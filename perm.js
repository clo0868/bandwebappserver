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
                return (play_time <= (user_play_time - 10)|| play_time >= (user_play_time + 10))
    
                //if any values return false user cannot play at that time 
            }).every((value) => (value === true))
    
        }
    
    
        function orderEvent(entries,start_time,user_list){
            
            //initiate cannot play array 
            var cannot_play = []
            //function creating permutations of the entries in an event
            function permute(arr,start_time, memo) {

                
                //init cur and if memo is not set it should be an empty array
                //this occurs on the first permutation as memo is no initiated yet
                var cur, memo = memo || [];
                
                //for loop that loops for input array length 
                //this will loop so that the first entry will end up at every other possible position
                //inside this loop every possible way to have the first entry at arr[i] will occur due to reccurence 
                //on a reccuring step it takes the next element as the first has already been removed and repeats
                //so that the second element will end up at every position not taken by the first element 
                for (var i = 0; i < arr.length; i++) {
                
                    //take off the first element of the array 
                    cur = arr.splice(i, 1);
                    console.log(arr.length,memo.length);

                    //if it took off the last element then a permutation has been found 
                    if (arr.length === 0) {
                        console.log('try');
                        

                        //new permutation is here 
                        //try expect so perms can be skipped if cannot play is triggered 
                        try {
                            //order is given by the permutation 
                            const order = memo.concat(cur)

                            //checks if any user is at a time that has already been checked 
                            const already_been_checked = cannot_play.filter((v) => {

                                //returns true if a user is on the list at that time 
                                return order[v.perm_index].userID === v.userID
                            })

                            if (already_been_checked.length>0){
                                //break try catch if perm wont work 
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
                                        const can_play = isPossiblePlayTime(user,start_time+(5*entry_index))

                                        
                                        if (can_play) {

                                            //if they can play add entry and playtime to the event 
                                            return_event.push({entry,play_time:start_time+(5*entry_index)})

                                            //if the return array is full then all entries can play in this order 
                                            if (return_event.length === order.length ) {   
                                                
                                                //reset cannot play array as new event will start 
                                                //i think it alreadys happens but just in case 
                                                cannot_play = []

                                                //if all entries have returned true break loop
                                                throw({return_event,time:((order.length*5)+5)});
                                            }

                                        }else{
                                            //if the user cant play add it to the cannot play array with the index
                                            //skip the remainder of the perm as it already cant occur 

                                            cannot_play.push({userID:user.userID,perm_index:entry_index})
                                            throw('skip')
                                        }
            
                                    }
                                })
                            }
                            
                        } catch (event_data) {
                            //this will trigger either when a perm should be skipped 
                            //or when the event has been ordered succesfully 
                            if (event_data !== 'skip') {

                                //if data was found throw to outer loop to stop checking more permutations 
                                throw(event_data)
                            }
                            //otherwise continue on with the next perm in the loop 
                        }
                        
                        
                    }
                    //this is where the function reoccurs 
                    //if arr still has entries then it needs to go a layer deeper so that the next entry will become the pivot
                    //will continue until the last entry is the pivot and then work its way back up
                    permute(arr.slice(),start_time, memo.concat(cur));

                    //on the way back up add the current pivot back into the array but in the opposite direction
                    //this is how it ends up in every other position 
                    //by reversing the direction in different layers 
                    arr.splice(i, 0, cur[0]);
                }
            }

            //outer try except so it can break out of permute function 
            try{

                //starts the permute function with list of entries and the event start time 
                permute(entries.reverse(),start_time)

                //reset cannot play array if no permutations were found 
                //the event will be in a different position next time 
                cannot_play = []

            }catch(err){
                //if event is thrown out of permute
                //then event has been ordered succesfully 
                //returns sorted event to the room sort function
                return err
            }
            
        }
    
        function orderRoom(room,user_list,max_time){


            //cannot event function 
            //same as cannot play 
            //but stored with specific start time instead of index due to different lengths of events 
            var cannot_event = []


            //function for finding all possible ways to arrange events within a room 
            function permute(arr,delay,memo) {

                
                //init cur set memo to empty array if null
                //only occurs in the first time not on reoccurences 
                var cur, memo = memo || [];
            
                //same as for loop in the order room function
                //just rotates the current pivot through the array 
                for (var i = 0; i < arr.length; i++) {
                
                    //take off first element in array
                    cur = arr.splice(i, 1);

                    //occurs when perm is found as it will be 8 layers in 
                    if (arr.length === 0) {

                        //inner try except so it can throw to parent function 
                        try {

                            //the order is the current permutation 
                            const order = memo.concat(cur)
                            return_room = []

                            //gives an array of all the start times in this permutations 
                            const start_times = order.map((event,event_index) => {return (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay})
                            
                            //check if the event has already been checked at the given start times
                            const already_been_checked = cannot_event.filter((v) => {

                                //returns truw if already been checked 
                                return (start_times.every((time) => {return time !== v.start_time}))
                            })

                            if (already_been_checked.length>0){
                                //throw if need to skip perm 
                                throw('skip')
                            }

                            for (const [event_index,event] of order.entries()) {
                                //for each event in this permutation 
                                
                                //gives start time of this event based on times of previous events 
                                const start_time = (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay
                            
                                //returns an array of sorted entries if possible 
                                //if not possible returns undefined
                                const ordered_event = orderEvent(event.event_entries.slice(),start_time,user_list)

                                //if order of entries was found
                                if (ordered_event) {   
                                    //add event to the room 
                                    return_room.push(ordered_event)

                                    //if all rooms are add throw room object out of loop 
                                    if (return_room.length === order.length) {
                                        cannot_event  = []
                                        throw {return_room,delay,finish_time:return_room.reduce((t,v) => {return t+v.time},0)-5}
                                    }                   
                                }else{
                                    //if event wasnt ordered add to couldnt event array
                                    //along with the start time of that event  
                                    cannot_event.push({event,start_time})
                                    throw('skip')
                                }
                                
                            } 
                            
                        } catch (room_data) {
                            //catchs skips and room data
                            if (room_data !== 'skip') {
                                //if room data thrown throw it to outer catch 
                                throw(room_data)
                            }
                            //if skipped continue with next perm 
                        }
                        
                        
                    }
                    
                    //permute the next layer down 
                    permute(arr.slice(),delay, memo.concat(cur));

                    //push pivot entry back in with others in opposite direction 
                    arr.splice(i, 0, cur[0]);
                }
            }
            

            //gives all possible arrangements of the events in the room 
            
            var return_room = []
            
            //returns finish time of the room
            const finish_time = room.reduce((t,v) => {return t+v.time},0)
            console.log(finish_time);
            //calculates any float time avalible for non critical rooms 
            const float_time = max_time-finish_time
            var delay = 0

            try{
                while(true){ 
                    //repeat this function until err is thrown
                    //function will repeat until schedule is found 
                    //it will just keep adding delay until it works 
                    
                    //start finding permutations
                    permute(room.reverse(),delay)

                    //reset cannot event array on a new room 
                    cannot_event = []

                    //add to delay if no possible perm is found 
                    delay+=5
                    console.log('delay is '+delay);
                }
                
                  
            }catch(err){
                //on throw catch the room object 
                
                //for each event in the room 
                for (const [eventi,event] of err.return_room.entries()) {
                    console.log(event);
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
                
                console.log(err);
                console.log(user_list);
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