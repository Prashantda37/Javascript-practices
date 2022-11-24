// javascript program to find the smallest positive value that cannot be
// represented as sum of subsets of a given sorted array
var arr1 = [ 1, 3, 4, 5 ]; // 2
var arr2 = [ 1, 1, 1, 1]; // 5
var arr3 = [ 1, 2, 6, 10, 11, 15 ]; // 4
var arr4 = [ 2, 6, 10, 11, 15 ]; // 1


function findSmallestNumber(array, n) {
  let v = 1;
  for(let i = 0; i < n ;i++) {
    if(array[i] <= v) {
      v = array[i] + v;
    }
  }
  console.log(v)
}

findSmallestNumber(arr2, arr2.length);


// Hi Hello, Ih Olleh

function reverseString(str) {
  const splitStringWithSpace = str.split(" ");
  const splitStringLength = splitStringWithSpace.length;
 let modifyString = [];
 for(let i=0;i < splitStringLength;i++) {
  const word = splitStringWithSpace[i].split('').reverse().join('').toLowerCase();
  const newString = word.charAt(0).toUpperCase() + word.slice(1);
  modifyString.push(newString);
 }
return  modifyString.join(" ")
}

console.log(reverseString('Hi Hello')); // Ih Olleh

// function smallestValue (array, n) {
//   let res = 1;
//   for(let i=0; i < n; i++) {
//     if(array[i] <= res){
//       res = res + array[i];
//     }
//   }
//   console.log(res)
// } 

// smallestValue(arr1, arr1.length);
// smallestValue(arr2, arr2.length);
// smallestValue(arr3, arr3.length);
// smallestValue(arr4, arr4.length);

//Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.
/*arr[] = {1, 4, 45, 6, 0, 19}
   x  =  51
Output: 3
Minimum length subarray is {4, 45, 6}

arr[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Minimum length subarray is {10}
*/

function findSubArray(array, x) {
  let min_len = array.length + 1;
  const n = array.length;
  for(let i=0; i < n; i++) {
    let curr_sum = array[i];
    if (curr_sum > x) return 1;

    for(let k=i + 1; k < n;k++) {
      curr_sum += array[k];

      if(curr_sum > x && (k -i + 1) < min_len) {
        min_len = (k - i + 1);
      }
    }
  }
  return min_len;
}

let arr5 = [1, 4, 45, 6, 10, 19];
let x = 51;
let res = findSubArray(arr5, x);

// console.log(res === (arr5.length + 1) ? 'failed' : res )


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
// console.log("Welcome to Programiz!");
// let x= 2;

// function a () {
//     console.log(x)
// }

// x = 3;

// function b() {
//     let x = 'dog';
//     a()
// }

// b()

// function my(a, b, ...c) {
//     const [x1, ...[result]] = c;
//     console.log(result)
// }

// // my(...['1','2','3','4'])

// const ar = [1,2]
// ar.customProperty = true;
// console.log(ar)

// ar.forEach(el => console.log(el))

// const obj = {
//     props: 1
// }

// console.log(obj.props);

// Object.defineProperty(obj, 'props', {
//     writable: true,
//     value:2
// })
// console.log(obj.props);

// obj.props = 3;

// console.log(obj.props);

// const myQue = Queue();

// myQue.enqueue(1);

// myQue.enqueue(2);

// const r1 = myQue.dequeue() === 1;

// const r2 = myQue.dequeue() === 2;
// console.log(r1 && r2)


// function * gen1() {
//     console.log(yield 1)
//      console.log(yield 2)
//       console.log(yield 3)
    
// }

// const iterator = gen1();

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)


// let green;
// green = false;
// console.log(green)

// const arr = new Array(2);

// arr[1] = 1;
// arr[3] = 3;
// console.log(arr.length)
// console.log(arr)


// function apiCall () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => console.log('b'), 50)
//     })
// }


// async logger() {
//     setTimeout(() => console.log('a'), 10);
//     console.log(await apiCall());
//     console.log('c')
// }

// logger()


// const a = ['1','-2'];
// console.log(a.sort())

// function aa(a, b) {
//     a += 1;
    
//     b.push(a)
// }

// const a = 0;
// const b = [];
// aa(a, b);
// console.log(a, b)


const fn = (n) => n <= 1? 1: n * fn(n - 1) 

console.log(fn(4)) // 24




// Hi Hello, Ih Olleh

function reverseString(str) {
  const splitStringWithSpace = str.split(" ");
  const splitStringLength = splitStringWithSpace.length;
 //const length = str.length;
 let modifyString = [];
 for(let i=0;i < splitStringLength;i++) {
  const word = splitStringWithSpace[i].split('').reverse().join('').toLowerCase();
  const newString = word.charAt(0).toUpperCase() + word.slice(1);
  modifyString.push(newString);
 }
return  modifyString.join(" ")
//console.log(modifyString.join(" "))
}

console.log(reverseString('Hi Hello'));













