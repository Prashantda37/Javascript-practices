const array = [2, 5, 4, 3, 6, 9, 8, 7];


function bubbleSortAsc(array) {
  let temp, n = array.length; 
  for(let i =0; i < n-1 ;i++) {
    for(let k =0; k <  n-i-1 ;k++){
      if( array[k] > array[k+1] ) {
        temp = array[k];
        array[k] = array[k+1];
        array[k+1] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSortAsc(array))

// function swap(array, x, y) {
//   const temp = array[x];
//   array[x] = array[y];
//   array[y] = temp;
// }
// // asc
// function  bubbleSortAsc(array) {
//   const n = array.length;
//   for(i = 0; i < n -1 ; i++) {
//     for(k = 0; k < n-i-1; k++) {
//       if(array[k] > array[k + 1]) {
//         swap(array, k, k + 1);
//       }
//     }
//   }
//   return array;
// }

// function  bubbleSortDsc(array) {
//   const n = array.length;
//   for(i = 0; i < n -1 ; i++) {
//     for(k = 0; k < n-i-1; k++) {
//       if(array[k] < array[k + 1]) {
//         swap(array, k, k + 1);
//       }
//     }
//   }
//   return array;
// }
// console.log(bubbleSortAsc(array));
// console.log(bubbleSortDsc(array));