// This is an array [1, 2, 3, 4, 5, 6, 7, 8, 9] (it should be sorted ascending). 
// find paired sum = 10


// we should use tow pointer techniq
function findPairWithSum (array, sum) {
  if (!array || array?.length === 0) {
    throw 'There is invalid array or Empty.';
  }
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if((array[start] + array[end]) === sum) {
      return true;
    } else if (array[start] + array[end] < sum) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// console.log(findPairWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 50));

// if the result is pair like [[1,9], [3, 5], [9, 2]]

function getPairedWithSum (array, sum) {
  if (!array || array?.length === 0) {
    throw 'There is invalid array or Empty.';
  }
  let start = 0;
  let end = array.length - 1;
  let paired = [];
  while (start < end) {
    if((array[start] + array[end]) === sum) {
      paired.push([array[start], array[end]]);
      start++;
      end--;
    } else if (array[start] + array[end] < sum) {
      start++;
    } else {
      end--;
    }
  }
  return paired;
}

// console.log(getPairedWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))