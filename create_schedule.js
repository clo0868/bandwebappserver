

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

        
        
        function permutator(inputArr) {
            var results = [];
            
            //console.log(inputArr);
            function permute(arr, memo) {
              var cur, memo = memo || [];
          
              for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                  results.push(memo.concat(cur));
                  //console.log(cur);
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
              }
          
              return results;
            }
            return permute(inputArr);
          }
    
        function isPossiblePlayTime(user,play_time){
            //check if user can play at the given time 
    
            if (user.play_times.length === 0) {
                //if user has no current playing times then they can play 
                return true 
            }
    
    
            return user.play_times.map((user_play_time) =>{ 
                //check if given play time is within 5 minutes of another playing time of theirs
                return (play_time <= (user_play_time - 15)|| play_time >= (user_play_time + 15))
    
                //if any values return false user cannot play at that time 
            }).every((value) => (value === true))
    
        }
    
    
        function orderEvent(entries,start_time,user_list){
            //gives array of all permutations of entrants 
            const all_perm_entries = permutator(entries).reverse()
            
            const cannot_play = []
            //loop through all permutations 
            try{
                for (const [perm_index,entries] of all_perm_entries.entries()) {
    
                    //check to see if any perm values have already been checked and returned false
                    //this stops the alogrithm checking entries where the user is already known to not play at that time 
                    const already_been_checked = cannot_play.filter((v) => {return entries[v.perm_index].userID === v.userID})
                    if (already_been_checked.length>0) continue;
                
                    //set inital return value 
                    const return_event = []
    
    
                    //loop through each entry in the permutation 
                    for (const [entry_index,entry] of entries.entries()) {  

                        //map through user list to find the corresponding user 
                        user_list.forEach((user,useri) => {
                            if (user.userID === entry.userID) {
                                //once user found check if they can play at the given time 
                                const can_play = isPossiblePlayTime(user,start_time+(5*entry_index))
                                if (can_play) {
                                    //if they can play add entry and playtime to the event 
                                    return_event.push({entry,play_time:start_time+(5*entry_index)})
                                    if (return_event.length === entries.length ) {   
                                        
                                        //if all entries have returned true break loop
                                        throw({return_event,time:((entries.length*5)+5)});
                                    }
                                }else{
                                    //if the user cant play add it to the cannot play array and try a different permutation 
                                    cannot_play.push({userID:user.userID,perm_index:entry_index})
                                }
    
                            }
                        })
                    }
                }
            }catch(err){
                //returns sorted event 
                return err
            }
            
        }
    
        function orderRoom(room,user_list,max_time){

            //gives all possible arrangements of the events in the room 
            all_perm_room = permutator(room).reverse()
            var return_room = []
            
            //returns finish time of the room
            const finish_time = room.reduce((t,v) => {return t+v.time},0)

            //calculates any float time avalible for non critical rooms 
            const float_time = max_time-finish_time
            var delay = 0

            try{
                while(true){ 
                    //repeat this function until err is thrown

                    for (const [perm_index,perm] of all_perm_room.entries()) {
                        //take a single perm of the events
                        
                        return_room = []


                        for (const [event_index,event] of perm.entries()) {
                            //for each event in this permutation 

                            //gives start time of this event based on times of previous events 
                            const start_time = (perm.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay
                            
                            //returns an array of sorted entries if possible 
                            //if not possible returns false 
                            const ordered_event = orderEvent(event.event_entries,start_time,user_list)
                            //if order of entries was found
                            if (ordered_event) {   
                                
                                //add event to the room 
                                return_room.push(ordered_event)
                                //if all rooms are add throw room object out of loop 
                                if (return_room.length === room.length) {throw {return_room,delay,finish_time:start_time+10}}                   
                            }
                            
                        }    
                        //if any events returned non possible play times 
                        //try the next permutation of events             
                    }
                //if no possible permutations were found 
                //add a delay to the room so it starts 5 mins later and try again 
                // this can change the critical path 
                 delay+=5
                }
                
                  
            }catch(err){
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
                return err
                
            }         
        }
        
        //orders each room one by one starting with the critical room 
        const result = rooms.map((room,room_index) => {

            //calculates critical time 
            const max_time = rooms[0].reduce((t,v) => {return t+v.time},0)

            //orders the room 
            const ordered_room = orderRoom(room,user_list,max_time)
            
            return ordered_room
            
        })
    
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
    
    //create schdule
    const schedule = sort_users(entries,critical_order)


    //end of algorithm time
    var over_end_time = process.hrtime(over_start_time);

    
    return schedule
}

module.exports = create_schedule;
