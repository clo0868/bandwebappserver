

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

        
        function chunk(arr, chunkSize) {
            if (chunkSize <= 0) throw "Invalid chunk size";
            var R = [];
            for (var i=0,len=arr.length; i<len; i+=chunkSize)
              R.push(arr.slice(i,i+chunkSize));
            return R;
          }
        
    
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
            var skip
            //initiate cannot play array 
            var cannot_play = []
            
            if (entries.length > 5) {
                var entry_chunks
                entry_chunks = chunk(entries,5)
                var cannot_sub_event = []
                var skip_sub_event
                function permute(arr,delay,memo) {

                
                    //init cur set memo to empty array if null
                    //only occurs in the first time not on reoccurences 
                    var cur, memo = memo || [];
                
                    //same as for loop in the order room function
                    //just rotates the current pivot through the array 
                    for (var i = 0; i < arr.length; i++) {
                    
                        if (memo.length > skip_sub_event) {
                            i = arr.length
                        }else{
                        
                        skip_sub_event = undefined
                        //take off first element in array
                        cur = arr.splice(i, 1);
    
                        //occurs when perm is found as it will be 8 layers in 
                        if (arr.length === 0) {
    
                            //inner try except so it can throw to parent function 
                            try {
    
                                //the order is the current permutation 
                                const order = memo.concat(cur)
                                const return_event = []
    
                               
                                console.log(order.length);
                                //gives an array of all the start times in this permutations 
                                const event_lengths = order.map((event,event_index) => {
                                    return event.length
                                })
                                event_lengths.unshift(0)
                                const start_times = event_lengths.map((length,length_index) => {
                                    return event_lengths.slice(0,length_index+1).reduce((t,v) => {
                                        return t + 5*v
                                    })+delay
                                })
                                
                                console.log(start_times);


                                //check if the event has already been checked at the given start times
                                const already_been_checked = cannot_sub_event.filter((v) => {
    
                                    //returns true if already been checked 
                                    return (start_times.every((time) => {return time !== v.start_time}))
                                })
    
                                if (already_been_checked.length>0){
                                    //throw if need to skip perm 
                                    throw('skip')
                                }
                                
                                for (const [sub_event_index,sub_event] of order.entries()) {
                                    
                                    //for each event in this permutation 
                                    //gives start time of this event based on times of previous events 
                                    const start_time = event_lengths.slice(0,sub_event_index+1).reduce((t,v) => {
                                        return t + 5*v
                                    })+delay
                                
                                    //returns an array of sorted entries if possible 
                                    //if not possible returns undefined
                                    const ordered_event = orderEvent(sub_event.slice(),start_time,user_list)
    
                                    //if order of entries was found
                                    if (ordered_event) {   
                                        //add event to the room 
                                        return_event.push(ordered_event)
    
                                        //if all rooms are add throw room object out of loop 
                                        if (return_event.length === order.length) {
                                            cannot_sub_event  = []
                                            throw({return_event});                                       
                                        }                   
                                    }else{
                                        //if event wasnt ordered add to couldnt event array
                                        //along with the start time of that event 
                                        skip_sub_event = sub_event_index 
                                        cannot_sub_event.push({sub_event,start_time})
                                        throw('skip')
                                    }
                                    
                                } 
                                
                            } catch (event_data) {
                                //catchs skips and room data
                                if (event_data !== 'skip') {
                                    //if room data thrown throw it to outer catch 
                                    throw(event_data)
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
                }
    
                //outer try except so it can break out of permute function 
                try{
                    
                        permute(entry_chunks.reverse(),start_time)
                    
                    
                    //starts the permute function with list of entries and the event start time 
                    
    
                    //reset cannot play array if no permutations were found 
                    //the event will be in a different position next time 
                    cannot_sub_event = []
    
                }catch(err){
                    console.log(err);
                    //if event is thrown out of permute
                    //then event has been ordered succesfully 
                    //returns sorted event to the room sort function
                    return {return_event:err.return_event.flatMap((obj) => {return obj.return_event}),time:err.return_event.reduce((t,v) => {return t + v.time},0)+5}
                }


                
            }else{
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
                   
                    //check if failed index is above or below this
                    if (memo.length > skip) {
                        //if index is above skip through perms by setting i to >= arr.length 
                        i = arr.length
                    }else{
                    
                    //if failed index above or equal to this pivot index

                    //reset skip as new perms used 
                    skip = undefined
                    //take off the first element of the array 
                    cur = arr.splice(i, 1);

                    //if it took off the last element then a permutation has been found 
                    if (arr.length === 0) {
                        
                        

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
                                
                                skip = already_been_checked[0].perm_index
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
                                            skip = entry_index
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
            }

            //outer try except so it can break out of permute function 
            try{
                
                    permute(entries.reverse(),start_time)
                
                
                //starts the permute function with list of entries and the event start time 
                

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
        }
        function orderRoom(room,user_list,max_time){
            console.log(room);

            //cannot event function 
            //same as cannot play 
            //but stored with specific start time instead of index due to different lengths of events 
            var cannot_event = []
            var skip_event

            //function for finding all possible ways to arrange events within a room 
            function permute(arr,delay,memo) {

                
                //init cur set memo to empty array if null
                //only occurs in the first time not on reoccurences 
                var cur, memo = memo || [];
            
                //same as for loop in the order room function
                //just rotates the current pivot through the array 
                for (var i = 0; i < arr.length; i++) {
                
                    if (memo.length > skip_event) {
                        i = arr.length
                    }else{
                    
                    skip_event = undefined
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
                                        throw {return_room,delay,finish_time:return_room.reduce((t,v) => {return t+v.time},0)-5+delay}
                                    }                   
                                }else{
                                    //if event wasnt ordered add to couldnt event array
                                    //along with the start time of that event 
                                    skip_event = event_index 
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
                    //function will repeat until schedule is found 
                    //it will just keep adding delay until it works 
                    
                    //start finding permutations
                    permute(room.reverse(),delay)

                    //reset cannot event array on a new room 
                    cannot_event = []

                    //add to delay if no possible perm is found 
                    delay+=5
                }
                
                  
            }catch(err){
                //on throw catch the room object 
                console.log(err);
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
    console.log(critical_order);
    //create schdule
    const schedule = sort_users(entries,critical_order)


    //end of algorithm time
    var over_end_time = process.hrtime(over_start_time);
    console.log(over_end_time[0] * 1000 + over_end_time[1] / 1000000);
    console.log(schedule);
    return schedule
}

module.exports = create_schedule;
