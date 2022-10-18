const comp = {"compID":2,"comp_name":"HPSC Sunday Morning Solos","comp_location":"St Andrews College","comp_start_time":"2022-06-25T21:00:00.000Z","ent_open_time":"2022-06-17T21:00:00.000Z","ent_close_time":"2023-06-24T21:00:00.000Z","comp_rooms":"[{\"room_name\":\"1\",\"room_judge\":\"1\",\"room_steward\":\"1\"},{\"room_name\":\"2\",\"room_judge\":\"2\",\"room_steward\":\"2\"},{\"room_name\":\"3\",\"room_judge\":\"3\",\"room_steward\":\"3\"},{\"room_name\":\"4\",\"room_judge\":\"4\",\"room_steward\":\"4\"}]","comp_events":"[{\"event\":1,\"grade\":1},{\"event\":2,\"grade\":1},{\"event\":4,\"grade\":1},{\"event\":1,\"grade\":2},{\"event\":2,\"grade\":2},{\"event\":4,\"grade\":2},{\"event\":1,\"grade\":3},{\"event\":2,\"grade\":3},{\"event\":4,\"grade\":3},{\"event\":1,\"grade\":4},{\"event\":2,\"grade\":4},{\"event\":4,\"grade\":4},{\"event\":5,\"grade\":5},{\"event\":3,\"grade\":6}]","comp_schedule":"0"}

const entries = [
    {"entryID":1,"userID":4,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":2,"userID":4,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":3,"userID":4,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":4,"userID":5,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":5,"userID":5,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":6,"userID":5,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":7,"userID":6,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":8,"userID":6,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":9,"userID":6,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":10,"userID":7,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":11,"userID":7,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":12,"userID":7,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":13,"userID":8,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":14,"userID":8,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":15,"userID":8,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":16,"userID":9,"compID":2,"gradeID":3,"eventID":1,"placing":0},
    {"entryID":17,"userID":9,"compID":2,"gradeID":3,"eventID":2,"placing":0},
    {"entryID":18,"userID":9,"compID":2,"gradeID":3,"eventID":4,"placing":0},
    {"entryID":19,"userID":10,"compID":2,"gradeID":2,"eventID":1,"placing":0},
    {"entryID":20,"userID":10,"compID":2,"gradeID":2,"eventID":2,"placing":0},
    {"entryID":21,"userID":10,"compID":2,"gradeID":2,"eventID":4,"placing":0},
    {"entryID":22,"userID":11,"compID":2,"gradeID":2,"eventID":1,"placing":0},
    {"entryID":23,"userID":11,"compID":2,"gradeID":2,"eventID":2,"placing":0},
    {"entryID":24,"userID":11,"compID":2,"gradeID":2,"eventID":4,"placing":0},
    {"entryID":25,"userID":12,"compID":2,"gradeID":2,"eventID":1,"placing":0},
    {"entryID":26,"userID":12,"compID":2,"gradeID":2,"eventID":2,"placing":0},
    {"entryID":27,"userID":12,"compID":2,"gradeID":2,"eventID":4,"placing":0},
    {"entryID":28,"userID":13,"compID":2,"gradeID":2,"eventID":1,"placing":0},
    {"entryID":29,"userID":13,"compID":2,"gradeID":2,"eventID":2,"placing":0},
    {"entryID":30,"userID":13,"compID":2,"gradeID":2,"eventID":4,"placing":0},
    {"entryID":31,"userID":15,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":32,"userID":15,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":33,"userID":15,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":34,"userID":16,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":35,"userID":16,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":36,"userID":16,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":37,"userID":17,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":38,"userID":17,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":39,"userID":17,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":40,"userID":18,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":41,"userID":18,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":42,"userID":18,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":43,"userID":19,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":44,"userID":19,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":45,"userID":19,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":46,"userID":20,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":47,"userID":20,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":48,"userID":20,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":49,"userID":21,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":50,"userID":21,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":51,"userID":21,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":52,"userID":22,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":53,"userID":22,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":54,"userID":22,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":55,"userID":23,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":56,"userID":23,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":57,"userID":23,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":58,"userID":24,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":59,"userID":24,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":60,"userID":24,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":61,"userID":26,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":62,"userID":26,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":63,"userID":26,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":64,"userID":27,"compID":2,"gradeID":1,"eventID":1,"placing":0},
    {"entryID":65,"userID":27,"compID":2,"gradeID":1,"eventID":2,"placing":0},
    {"entryID":66,"userID":27,"compID":2,"gradeID":1,"eventID":4,"placing":0},
    {"entryID":67,"userID":14,"compID":2,"gradeID":4,"eventID":1,"placing":0},
    {"entryID":68,"userID":14,"compID":2,"gradeID":4,"eventID":2,"placing":0},
    {"entryID":69,"userID":14,"compID":2,"gradeID":4,"eventID":4,"placing":0},
    {"entryID":70,"userID":14,"compID":2,"gradeID":5,"eventID":5,"placing":0},
    {"entryID":71,"userID":14,"compID":2,"gradeID":6,"eventID":3,"placing":0},
    {"entryID":72,"userID":25,"compID":2,"gradeID":4,"eventID":1,"placing":0},
    {"entryID":73,"userID":25,"compID":2,"gradeID":4,"eventID":2,"placing":0},
    {"entryID":74,"userID":25,"compID":2,"gradeID":4,"eventID":4,"placing":0},
    {"entryID":75,"userID":25,"compID":2,"gradeID":5,"eventID":5,"placing":0},
    {"entryID":76,"userID":25,"compID":2,"gradeID":6,"eventID":3,"placing":0},
    {"entryID":77,"userID":30,"compID":2,"gradeID":4,"eventID":1,"placing":0},
    {"entryID":78,"userID":30,"compID":2,"gradeID":4,"eventID":2,"placing":0},
    {"entryID":79,"userID":30,"compID":2,"gradeID":4,"eventID":4,"placing":0},
    {"entryID":80,"userID":30,"compID":2,"gradeID":5,"eventID":5,"placing":0},
    {"entryID":81,"userID":30,"compID":2,"gradeID":6,"eventID":3,"placing":0},
    {"entryID":82,"userID":31,"compID":2,"gradeID":4,"eventID":1,"placing":0},
    {"entryID":83,"userID":31,"compID":2,"gradeID":4,"eventID":2,"placing":0},
    {"entryID":84,"userID":31,"compID":2,"gradeID":4,"eventID":4,"placing":0},
    {"entryID":85,"userID":31,"compID":2,"gradeID":5,"eventID":5,"placing":0},
    {"entryID":86,"userID":31,"compID":2,"gradeID":6,"eventID":3,"placing":0},
    {"entryID":87,"userID":32,"compID":2,"gradeID":4,"eventID":1,"placing":0},
    {"entryID":88,"userID":32,"compID":2,"gradeID":4,"eventID":2,"placing":0},
    {"entryID":89,"userID":32,"compID":2,"gradeID":4,"eventID":4,"placing":0},
    {"entryID":90,"userID":32,"compID":2,"gradeID":5,"eventID":5,"placing":0},
    {"entryID":91,"userID":32,"compID":2,"gradeID":6,"eventID":3,"placing":0},
    ]





          






function create_schedule(comp,entries){
    console.log('launch');
    //start of algorithm timing
    var over_start_time = process.hrtime();

    //JSON for the competition rooms
    const comp_rooms = JSON.parse(comp.comp_rooms)

    //JSON for the competition events
    const comp_events = JSON.parse(comp.comp_events)

    function find_critical_order(events,n){

        //sort events in order of time highest to lowest 
        events.sort(function(a, b){return b.time - a.time});
        
        //create rooms array of length n (# number of avaliable rooms)
        var sch_rooms = Array.apply(null, Array(n)).map(i => i=[])
        
        //returns sorted rooms with minimum time to complete
        events.map((event,i_events) => {

            //find the room which currently has the least amount of time to complete 
            sch_rooms.sort(function(a, b){return a.reduce((t,v) => {return t+v.time},0) - b.reduce((t,v) => {return t+v.time},0)});

            //add the room with the largest remaining time to complete 
            sch_rooms[0].push(event)
        })

        //sorts rooms in order of time to complete
        //so that first room is critical room and last will take the least 
        sch_rooms.sort(function(a, b){return b.reduce((t,v) => {return t+v.time},0) - a.reduce((t,v) => {return t+v.time},0)});

        //return order of rooms
        return sch_rooms
        
    }

    function sort_users(entries,rooms){

        //create array of all users that have entered
        //returns array of objects containing userID and an array for all that users play times
        const user_list = [...new Set(entries.map((v) => (v.userID)))].map((v)=> ({userID:v,play_times:[]}));

        
        
        
    
        function isPossiblePlayTime(user,play_time){
            //check if user can play at the given time 
    
            if (user.play_times.length === 0) {
                //if user has no current playing times then they can play 
                return true 
            }
    
    
            return user.play_times.map((user_play_time) =>{ 
                //check if given play time is within 5 minutes of another playing time of theirs
                return (play_time <= (user_play_time - 10)|| play_time >= (user_play_time + 15))
    
                //if any values return false user cannot play at that time 
            }).every((value) => (value === true))
    
        }
    
    
        function orderEvent(entries,start_time,user_list){
            //console.log(entries.length+'entries');
            //console.log('order start');
            //gives array of all permutations of entrants 
            //console.log('reset cannot play');
            var cannot_play = []
            //console.log(cannot_play.length + ' cannot play array '+ start_time );
            //loop through all permutations 

            function permute(arr,start_time, memo) {
                var cur, memo = memo || [];
                for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    //cannot_play.map((v,i) => {console.log(v.userID,v.perm_index,i);})
                    try {
                        const order = memo.concat(cur)
                        //console.log(order.length + 'order');
                        //console.log(order.length);
                        //console.log(order[0].eventID,order[0].gradeID);
                        //check to see if any perm values have already been checked and returned false
                        //this stops the alogrithm checking entries where the user is already known to not play at that time 
                        //console.log(cannot_play.length + ' inner length');
                        if (cannot_play.length === 0) {
                            //console.log('no bad entries');
                        }
                        const already_been_checked = cannot_play.filter((v) => {
                            //console.log(v);
                            //console.log(order);
                            if (order[v.perm_index].userID === v.userID) {
                                //console.log('user'+v.userID+'cannot play at'+(v.perm_index*5+start_time));
                            }
                            return order[v.perm_index].userID === v.userID
                        })
                        if (already_been_checked.length>0){
                            //console.log('skip');
                            throw('skip')
                        }
                    
                        //set inital return value 
                        const return_event = []
        
        
                        //loop through each entry in the permutation 
                        for (const [entry_index,entry] of order.entries()) {  

                            //map through user list to find the corresponding user 
                            user_list.forEach((user,useri) => {
                                if (user.userID === entry.userID) {
                                    //once user found check if they can play at the given time 
                                    //console.log(start_time);
                                    const can_play = isPossiblePlayTime(user,start_time+(5*entry_index))
                                    //console.log(can_play);
                                    if (can_play) {
                                        //console.log('user'+user.userID+'can play at'+(entry_index*5+start_time));
                                        //if they can play add entry and playtime to the event 
                                        return_event.push({entry,play_time:start_time+(5*entry_index)})
                                        //console.log(return_event.length+'/'+order.length);
                                        if (return_event.length === order.length ) {   
                                            
                                            //if all entries have returned true break loop
                                            cannot_play = []
                                            throw({return_event,time:((order.length*5)+5)});
                                        }
                                    }else{
                                        //if the user cant play add it to the cannot play array and try a different permutation 
                                        //console.log(return_event.length+'/'+order.length);
                                        //console.log('user'+user.userID+'cannot play at'+(entry_index*5+start_time));

                                        cannot_play.push({userID:user.userID,perm_index:entry_index})
                                        throw('skip')
                                    }
        
                                }
                            })
                        }
                        
                    } catch (event_data) {
                        if (event_data !== 'skip') {
                            throw(event_data)
                        }else{
                        }
                    }
                    
                    
                }
                //console.log(user_list);
                permute(arr.slice(),start_time, memo.concat(cur));
                arr.splice(i, 0, cur[0]);
                }
            }


            try{
                permute(entries.reverse(),start_time)
                cannot_play = []
            }catch(err){
                //console.log(err);
                //returns sorted event 
                return err
            }
            
        }
    
        function orderRoom(room,user_list,max_time){

            var cannot_event = []
            //console.log(cannot_event.length + 'cannot event array');
            function permute(arr,delay,memo) {
                //console.log('perm start');
                
                
                var cur, memo = memo || [];
            
                for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    //console.log('next');
                    //cannot_event.map((v,i) => {console.log(v.event.event.event,v.event.event.grade,v.perm_index,i);})
                    try {
                    const order = memo.concat(cur)
                    return_room = []
                    //console.log(order.length);
                    //order.map((event,eventi) => {console.log(eventi,event.event.event,event.event.grade,event.event_entries.length);})
                    //console.log(cannot_event.length);
                    const already_been_checked = cannot_event.filter((v) => {
                        //console.log(v);
                       // console.log(order[0].event.event === v.event.event.event);
                        //console.log(order[0].event.grade === v.event.event.grade );
                        const start_times = order.map((event,event_index) => {return (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay})
                        return (start_times.every((time) => {return time !== v.start_time}))
                    })
                    if (already_been_checked.length>0){
                        
                        throw('skip')
                    }

                    //console.log(order.length);
                    for (const [event_index,event] of order.entries()) {
                        //for each event in this permutation 
                        
                        //console.log(event.event);
                        //gives start time of this event based on times of previous events 
                        const start_time = (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay
                        //returns an array of sorted entries if possible 
                        //if not possible returns false 
                        //console.log('new event to order');
                        //console.log(event);
                        const ordered_event = orderEvent(event.event_entries.slice(),start_time,user_list)

                        //console.log(ordered_event);
                        //if order of entries was found
                        if (ordered_event) {   
                            //add event to the room 
                            return_room.push(ordered_event)
                            //if all rooms are add throw room object out of loop 
                            //console.log(return_room);
                            if (return_room.length === order.length) {
                               // console.log('throw room');
                                cannot_event  = []
                                throw {return_room,delay,finish_time:start_time+10}
                            }                   
                        }else{
                            //console.log(return_room.length+'/'+order.length);
                            cannot_event.push({event,start_time})
                            throw('skip')
                        }
                        
                    } 
                        
                    } catch (room_data) {
                        if (room_data !== 'skip') {
                            //console.log('done');
                            throw(room_data)
                        }else{
                            //console.log('failed');
                            //console.log(memo.concat(cur));
                        }
                    }
                       
                    
                }
                //console.log(arr.slice(),memo.concat(cur));
                permute(arr.slice(),delay, memo.concat(cur));
                arr.splice(i, 0, cur[0]);
                }
            }
            

            //gives all possible arrangements of the events in the room 
            
            var return_room = []
            
            //returns finish time of the room
            const finish_time = room.reduce((t,v) => {return t+v.time},0)

            //calculates any float time avalible for non critical rooms 
            const float_time = max_time-finish_time
            var delay = 0

            try{
                while(true){ 
                    //repeat this function until err is thrown
                    //console.log('delay is now '+delay);
                    
                    permute(room.reverse(),delay)
                    //console.log('cannot event array has a current length of' + cannot_event.length);
                    cannot_event = []
                    //console.log('cannot event array has been reset to a length of' + cannot_event.length);
                    delay+=5
                }
                
                  
            }catch(err){
                //console.log(err);
                //on throw catch the room object 

                //for each event in the room 
                for (const [eventi,event] of err.return_room.entries()) {

                    //for each entry in each event 
                    event.return_event.forEach((entry) => {    

                        //go through list of users 
                        user_list.forEach((user,useri) => {

                            //when the user for the entry is found add the playtime to their user list 
                            if (user.userID === entry.entry.userID) {
                                user.play_times.push(entry.play_time)
                            }
                        })
                    })
                }
                //return room object 
                //console.log(err);
                //console.log(user_list);
                return err
                
            }         
        }
        
        //orders each room one by one starting with the critical room 
        const result = rooms.map((room,room_index) => {

            //calculates critical time 
            const max_time = rooms[0].reduce((t,v) => {return t+v.time},0)

            //orders the room 
            const ordered_room = orderRoom(room,user_list,max_time)
            //console.log(ordered_room);
            return ordered_room
            
        })
        //console.log(result);
        return(result)


    }

    //returns event with all entries and a time to complete if entries if greater then 1 
    const all_events = comp_events.filter((event) => {   

        //check if there are any entries for the event
        var event_entries = entries.filter((v) => {return v.gradeID === event.grade && v.eventID === event.event });
        return event_entries.length > 0    
        
        //returns list of events where there are at least 1 entry

    }).map((event) => {
        //gets all entries for the event
        var event_entries = entries.filter((v) => {return v.gradeID === event.grade && v.eventID === event.event });

        //calculate time to complete event 
        const event_time = (event_entries.length*5)+5

        //return event object 
        return({event,event_entries,time:event_time})
    })

    //find critical order
    const critical_order = find_critical_order(all_events,comp_rooms.length)
    console.log(critical_order);
    //critical_order.map((room,roomindex) => {room.map((event,eventindex) => {console.log(roomindex,eventindex,event.event_entries.length);})})
    //create schdule
    const schedule = sort_users(entries,critical_order)


    //end of algorithm time
    var over_end_time = process.hrtime(over_start_time);

    console.log(schedule);
    return schedule
}

create_schedule(comp,entries);