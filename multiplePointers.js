// Write a function called sumZero which accept a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair doesnt exist.

function sumZero (arr){
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}


// Implement a function called countUniqueValues, which accepts sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
