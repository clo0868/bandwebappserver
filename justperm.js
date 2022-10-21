//unused perm function 

var results = [];
const inputArr = [1,2,3,4] 

//console.log(inputArr);
function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
    cur = arr.splice(i, 1);
    if (arr.length === 0) {
        console.log('pushed');
        results.push(memo.concat(cur));
        //console.log(memo.concat(cur).length);
        //console.log(cur);
    }

    permute(arr.slice(), memo.concat(cur));
    arr.splice(i, 0, cur[0]);
    }

    return results;
}

console.log(permute(inputArr))


