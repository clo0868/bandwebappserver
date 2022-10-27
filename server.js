var mysql = require('mysql');
var cors = require('cors');
var express = require('express');
var app = express()
var http = require('http');
var path = require('path');
const { createHash } = require('crypto');
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const create_schedule = require('./create_schedule');

//create connection with the database 
var con = mysql.createConnection({
  host: 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user:'mkyfhek53nw7gqgz',
  password:'vdcw0srep5pxh0f7',
  database:'cjf17s2cdl19t72x'
});

//confirm the connection was succesful
con.connect(function(err) {
if (err) throw err
});

//define hashing function 
function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

//log to output 
console.log("i am listening");

//server setup 
var server = http.createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

var users = {};

io.on("connection", (socket) => {
  console.log("New client connected");
  
  socket.on('new_connection' , function(data) {
    const user_types = ['student','admin','parent','tutor','steward','judge']
    var user = data.user;
    var socketID = data.socketID;
    var comp = data.comp
    const room = JSON.parse(comp.comp_rooms).filter((room) => { return (room.room_judge.userID === user.userID || room.room_steward.userID === user.userID)})[0]
    console.log(room);
    users[user.userID] = {socketID:socketID,user_role:user_types[user.user_type],room:room.room_name};
    socket.join(room.room_name)
  });

  socket.on("send_to_room", (room,user,message) => {
    console.log(io.sockets.adapter.rooms.get(room));
    console.log(room,user,message);
    io.to(room).emit('room_message',user,message)
  });
  socket.on("entry_called", (room,entryID,called) => {
    console.log(io.sockets.adapter.rooms.get(room));
    console.log(room,entryID,called);
    io.to(room).emit('entry_called',entryID,called)
  });
  socket.on("entry_playing", (room,entryID,playing) => {
    console.log(io.sockets.adapter.rooms.get(room));
    console.log(room,entryID,playing);
    io.to(room).emit('entry_playing',entryID,playing)
  });

  
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});



server.listen(process.env.PORT || 3000)

//cors options 
app.options('*', cors())
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());





// Listen to POST requests to /

//a lot of queries need to be cleaned up using joins 
//some very inefficient querying is going on 

app.post('/login', function(req, res) {
  // Get sent data.
  var user = req.body.user;
  var pass = hash(req.body.pass);
  
  //check for username in db 
  var sql = 'SELECT * FROM users WHERE user = ?';
  con.query(sql, [user], function (err, result) {
    if (err) throw err;
    
    //if no username found return error 
    //shouldnt be more then 1 individual username as they are all unique 
    if (result.length == 0) {
      res.status(500).send({
        message: "Incorrect username"
      })
    }else{
      //check if the password of that user matches
      if (result[0].user_pass == pass){

        //create JWT signed with all user info 
        //this can be decoded in auth function and returned through to the api 
        //will appear as user in the headers 
        const token = jwt.sign(
          {
            userID: result[0].userID,
            user: result[0].user,
            user_type: result[0].user_type,
            user_name: result[0].user_name,
            email:result[0].email,
            user_approve:result[0].user_approve,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        //send token, user and succes message to client 
        res.status(201).send({
          message:"user logged in successfully",
          result: result,
          token
        })
      }else{
        //passwords didnt match 
        //send error message 
        res.status(500).send({
          message: "Incorrect password"
        })
      }
    }    
  });
});
app.post('/signup', function(req, res) {
  // Get sent data.
  const user = req.body.username;
  const pass = hash(req.body.pass);
  const type = req.body.type;
  const email = req.body.email;
  
  var name = req.body.name;
  
  //makes user unapproved if they are trying to make an admin account 
  if(type === '3'|| type === '4'|| type === '5'){
    var approve = 0
  }else{
    var approve = 1
  }

  //sets new user in the database 
  var sql = 'INSERT INTO users (user,user_pass,user_type,email,user_name,user_approve,parent) VALUES (?,?,?,?,?,?,0)';
  con.query(sql, [user,pass,type,email,name,approve], function (err, result) {
    if (err) throw err;

    //get info for userid from database 
    var sql = 'SELECT * FROM users WHERE user = ? AND user_pass = ?'
    con.query(sql, [user, pass], function (err, result) {
      if (err) throw err;

      //if user made an admin account get all other approved admin accounts 
      if(result[0].user_type === 5 || result[0].user_type === 4){
        var sql = 'SELECT userID FROM users WHERE user_type = 4 AND user_approve = 1 OR user_type = 5 AND user_approve = 1'
        con.query(sql, function (err, accounts) {
          if (err) throw err;

          //send all the approved admins notifications 
          var sql = 'INSERT INTO notifications (notif_type,userID,by_userID,seen) VALUES ?'
          con.query(sql,[accounts.map(account => [1,account.userID,result[0].userID,0])] ,function (err, result) {
            if (err) throw err;
          });
        });
      }

      //create JWT with user data 
      const token = jwt.sign(
        {
          userID: result[0].userID,
          user: result[0].user,
          user_type: result[0].user_type,
          user_name: result[0].user_name,
          email:result[0].email,
          user_approve:result[0].user_approve,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );
      //send user, token and success message 
      res.status(201).send({
        message:"user created successfully",
        result: result,
        token
      })
      res.end();
    });
  })
});
app.post('/comp_data', auth, function(req, res) {
  //returns all data for a specfic competition 
  const compID = req.body.compID
  var sql = 'SELECT * FROM competitions WHERE compID = ?';
  con.query(sql,[compID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});

app.post('/update_children',auth, function(req, res) {
  //changes linked student accounts 
  
  //returns list of new student user ids
  console.log(req.body.children); 
  const children = req.body.children.map((v) => {return v.userID})
  const user = req.user

  //removes links to any existing students 
  var sql = 'UPDATE users SET parent = 0 WHERE parent = ? ';
  con.query(sql,[user.userID], function (err, r) {
    if (err) throw err;
    //adds link to new specified students 
    var sql = 'UPDATE users SET parent = ? WHERE userID IN (?) ';
    con.query(sql,[user.userID,children], function (err, r) {
      if (err) throw err;
      res.send(r);
    });

  });
  
});
app.post('/update_account',auth, function(req, res) {
  //updates account info for a user 
  const user = req.user
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  var sql = 'UPDATE users SET user = ? , email = ? , user_name = ? WHERE userID = ? ';
  con.query(sql,[username,email,name,user.userID], function (err, r) {
    if (err) throw err;
    res.send(r);
  });

  
  
});
app.post('/all_comp_data', auth, function(req, res) {
  //selects all data for all competitions 
  //may need to add pagination later 
  var sql = 'SELECT * FROM competitions';
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});

app.post('/check_existing_user', function(req, res) {
  //checks if user exists
  var user = req.body.user;
  var sql = 'SELECT * FROM users WHERE user = ?';
  con.query(sql,[user], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/user',auth, function(req, res) {
  //gets all the user data from JWT
  var user = req.user;
  //checks if user is a parent 
  if (user.user_type === 2) {
    //gets data for linked student accounts 
  var sql = 'SELECT * FROM users WHERE parent = ?';
  con.query(sql,[user.userID], function (err, children) {
    if (err) throw err;
    //sends both user and student data 
    const spon = {user,children}
    res.send(spon);
    res.end();
  });
  }else{
    res.send({user});
    res.end();
  }
  
});
app.post('/event_grade_name',auth, function(req, res) {
  //gets all event and grade names stored in the database 
  var sql = 'SELECT grade_name FROM grades';
  con.query(sql, function (err, grades) {
    if (err) throw err;
    var sql = 'SELECT event_name FROM events';
    con.query(sql, function (err, events) {
      if (err) throw err;
      var multires = {grades,events}
      res.send(multires);
      res.end();
    });
  });
});
app.post('/create_comp',auth, function(req, res) {

  // creates new competition 
  data=req.body.form_data

  //formats dates into SQL readable
  function formatDate(date){
    return date.replace(/T/g,' ').slice(0,19)
  }

  var sql = 'INSERT INTO competitions (`comp_name`, `comp_location`, `comp_start_time`,`ent_open_time`,`ent_close_time`,`comp_events`,`comp_rooms`,`comp_schedule`) VALUES (?,?,?,?,?,?,?,?)';
  con.query(sql,[data[0],data[2],formatDate(data[1]),formatDate(data[3]),formatDate(data[4]),JSON.stringify(data[5]),0,0], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end
  });
});
app.post('/update_comp',auth, function(req, res) {
  //updates info for a competition after editing 
  data=req.body.form_data

  //formats dates into SQL readable 
  function formatDate(date){
    return date.replace(/T/g,' ').slice(0,19)
  }
  var sql = 'UPDATE competitions SET comp_name = ? ,  comp_location = ? , comp_start_time = ? , ent_open_time = ? , ent_close_time = ? , comp_events = ? WHERE compID = ?';
  con.query(sql,[data[0],data[2],formatDate(data[1]),formatDate(data[3]),formatDate(data[4]),JSON.stringify(data[5]),data[6]], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end
  });
});
app.post('/comp_entries',auth, function(req, res) {
  //gets all entries and user data for a comp
  var comp_data = req.body.comp;
  var sql = 'SELECT * FROM entries INNER JOIN users ON entries.userID = users.userID WHERE entries.compID = ?';
  con.query(sql,[comp_data.compID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/delete_comp',auth, function(req, res) {
  //deletes a competition 
  var compID = req.body.compID;
  var sql = 'DELETE FROM competitions WHERE compID = ?';
  con.query(sql,[compID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/clear',auth, function(req, res) {
  //deletes all students and parents 
  //used to remove all test subjects while testing over a short period 
  var compID = req.body.compID;
  var sql = 'DELETE FROM users WHERE user_type = 0 OR user_type = 2';
  con.query(sql,[compID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/create_entries',auth, function(req, res) {
  //creates, updates or deletes entries for a user

  var entry_input = []
  const user = req.body.user
  const compID = req.body.compID
  var entries=req.body.entries

  //deletes any old entries the user had in the competition 
  var sql = 'DELETE FROM entries WHERE userID = ? AND compID = ?';
  con.query(sql,[user,compID], function (err, result) {
    if (err) throw err;
  });

  //if new entries are specified 
  //if none the api just deletes all old entries and resolves 
  if (entries){

    //find what events were entered in the competition 
    //so we know which events were entered 
    var comp_events=req.body.comp_events
    var entry_indicies = [...entries.keys()].filter(i => entries[i])

    for (let i = 0; i < entry_indicies.length; i++) {
      entry_input.push(comp_events[entry_indicies[i]])
      
      //add each entry individually 
      var sql = 'INSERT INTO `entries`(`userID`, `compID`, `gradeID`, `eventID`, `placing`) VALUES (?,?,?,?,0)';
      con.query(sql,[user,compID,comp_events[entry_indicies[i]].grade,comp_events[entry_indicies[i]].event], function (err, result) {
        if (err) throw err;

        //if all entries were successfully entered 
        if(i===entry_indicies.length-1){

          //get all entry and user data from db 
          var sql = 'SELECT * FROM entries INNER JOIN users ON entries.userID = users.userID WHERE entries.userID = ? AND entries.compID = ?';
          con.query(sql,[user,compID], function (err, result) {
            if (err) throw err;

            //send succes message and entry and user data 
            res.status(201).send({
              message:"entered successfully",
              result: result,
            })
          });
        }
      });
    }
  }else{
    res.status(201).send({
      message:"entries deleted successfully",
    })
  }
  
});
app.post('/get_existing_names', function(req, res) {
  //gets list of existing names for students 
  var sql = 'SELECT userID,user_name,parent FROM users WHERE user_type = 0';
  con.query(sql, function (err, result) {
    if (err) throw err;    
    res.send(result);
    res.end();    
  });
});
app.post('/check_existing_entry',auth, function(req, res) {
  //checks if a user has entered a competition 
  const user = req.body.user;
  const compID = req.body.compID
  var sql = 'SELECT * FROM entries WHERE userID = ? AND compID = ?';
  con.query(sql,[user,compID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/config_rooms',auth, function(req, res) {

  //updates the rooms in a competition 
  const rooms = JSON.stringify(req.body.rooms)
  const compID = req.body.compID
  var sql = 'UPDATE competitions SET comp_rooms = ? WHERE compID = ? ';
  con.query(sql,[rooms,compID], function (err, r) {
    res.send(r);
    if (err) throw err;
  });
});
app.post('/reset_rooms',auth, function(req, res) {
  //removes rooms from a competition 
  const comp = req.body.comp
  var sql = 'UPDATE competitions SET comp_rooms = 0 WHERE compID = ? ';
  con.query(sql,[comp.compID], function (err, r) {
    if (err) throw err;
    res.send(r);
  });
});
app.post('/officials',auth, function(req, res) {

  //gets data for any judges or stewards 
  //returns 2 different objects 
  //maybe do this with one sql query and then seperate in js 
  var sql = 'SELECT * FROM users WHERE user_type = 4';
  con.query(sql, function (err, steward) {
    if (err) throw err;
    var sql = 'SELECT * FROM users WHERE user_type = 5';
    con.query(sql, function (err, judge) {
      if (err) throw err;
      var multires = {steward,judge}
      res.send(multires);
      res.end();
    });
  });
});
app.post('/create_schedule',auth, function(req, res) {
  //calls the create schedule function 

  const compID = req.body.compID;

  //gets all the entries for the competition 
  var sql = 'SELECT * FROM entries WHERE compID = ?';
  con.query(sql,[compID], function (err, entries) {
    if (err) throw err;    

    //gets the competition data 
    var sql = 'SELECT * FROM competitions WHERE compID = ?';
    con.query(sql,[compID], function (err, comp) {
      if (err) throw err;    
      var comp_data = comp[0]

      //calls create scheudle function to create for the given data 
      const sch_res = create_schedule(comp_data,entries)

      //updates the JSON in the db with the new schedule 
      var sql = 'UPDATE competitions SET comp_schedule = ? WHERE compID = ? ';
      con.query(sql,[JSON.stringify(sch_res),compID], function (err, r) {
        if (err) throw err;
      });
      //gets every user entered in the comps data 
      const userID_arr = entries.map((v)=>{return v.userID})
      var sql = 'SELECT * FROM users WHERE userID IN (?)';
      con.query(sql,[userID_arr], function (err, user_data) {
        if (err) throw err;    

        //sends schedule, competition data and user data 
        const send_data = {sch_res,comp_data,user_data}
        res.send(send_data);
        res.end();    
         
      });
    
    });  
  });
});
app.post('/comp_users',auth,function(req,res) {
  //gets all user data from a specific competition
  //outer join should be used
  const compID = req.body.compID
  var sql = 'SELECT * FROM entries WHERE compID = ? ';
  con.query(sql,[compID], function (err, result) {
    if (err) throw err; 
    const user_list = result.map((v) => { return v.userID})
    var sql = 'SELECT * FROM users WHERE userID IN (?)';
    con.query(sql,[user_list], function (err, result) {
      if (err) throw err;    
      res.send(result);
      res.end();    
    });       
  });
  
});
app.post('/approve_notif',auth, function(req, res) {
  //checks for any unseen notifications for a specific user 
  const user = req.user;
  var sql = 'SELECT * FROM notifications WHERE userID = ? AND seen = 0';
  con.query(sql,[user.userID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/approve_user',auth, function(req, res) {
  //approves a specific user 
  const userID = req.body.userID
  var sql = 'UPDATE users SET user_approve = 1 WHERE userID = ? ';
  con.query(sql,[userID], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.post('/seen_approve_notif',auth, function(req, res) {
  //sets user approve notification to seen for a specific user 
  const user = req.body.user
  const seen_by = req.user
  var sql = 'UPDATE notifications SET seen = 1 WHERE userID = ? AND by_userID = ?';
  con.query(sql,[seen_by.userID,user.userID], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.post('/delete_approve_notif',auth, function(req, res) {
  //removes approve user notification 
  //this occurs once the user had been declined or accepted 
  var user = req.body.user;
  var sql = 'DELETE FROM notifications WHERE by_userID = ?';
  con.query(sql,[user.userID], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.post('/delete_user_entries',auth, function(req, res) {
  //deletes a single users entries from a single competition 
  var user = req.body.user;
  var comp = req.body.comp;
  var sql = 'DELETE FROM entries WHERE compID = ? AND userID = ?';
  con.query(sql,[comp.compID,user.userID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/delete_entry',auth, function(req, res) {
  //deletes a specific entry from the database 
  var entry = req.body.entry;
  var sql = 'DELETE FROM entries WHERE entryID = ?';
  con.query(sql,[entry.entryID], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});
app.post('/non_admin_users',auth, function(req, res) {
  //gets all info for users who are students, parents or tutors 
  const user = req.user;
  var sql = 'SELECT * FROM users WHERE user_type IN (?)';
  con.query(sql,[[0,2,3]], function (err, result) {
    if (err) throw err;
    res.send(result);
    res.end();
  });
});

app.get('/', function (req, res) {
  //this is the error message if the api is found it will revert to /
  //pages should load generic error 
  res.send('<this is not the droid you are looking for>')
});

