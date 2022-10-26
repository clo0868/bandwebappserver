//unused perm function 
console.log('start');
console.log('[array] + [order]');
var results = [];
const inputArr = [1,2,3,4,5] 
var count = 0
//console.log(inputArr);
function permute(arr, memo) {
    
    
        var cur, memo = memo || [];
        if (memo.length < 5) {
            console.log('pivot is now'+ (arr[0]));
            console.log('on level'+ (memo.length+1));
        }
    for (var i = 0; i < arr.length; i++) {
        console.log('['+arr+']+['+memo+']');
    cur = arr.splice(i, 1);
    
    if (arr.length === 0) {
        count++
        console.log('['+memo.concat(cur)+'] new order');
        results.push(memo.concat(cur));
        if (count > 2 ){
            throw('stop')
        }
    }

    permute(arr.slice(), memo.concat(cur));
    arr.splice(i, 0, cur[0]);
    console.log('['+arr+']+['+memo+']');
    }
    
    

    return results;
}

try {
console.log(permute(inputArr))

} catch (error) {
    console.log(error);
}
