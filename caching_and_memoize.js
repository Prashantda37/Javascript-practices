// Implement cache and memoize funtion 
// function memoizeFn(fn) {
//   const cacheValue = {};
//   return function (n) {
//       if(n in cacheValue) {
//         return cacheValue[n];
//       } else {
//         const res =  fn(n)
//         cacheValue[n] = fn(n);
//         return res;
//       }
//   }
// }

// const mem = memoizeFn(cal);

// function cal(n) {
//   for(let i=0;i< 40000000; i++) {}
//   return n * 10;
// }
// console.time('============');
// console.log(mem(10))
// console.timeEnd('============');
// console.time('===')
// console.log(mem(10))
// console.timeEnd('===');



/// 

const memoFn = (fn) => {
  const cache = {};
  return function (n) {
    if(n in cache) {
      return cache[n];
    } else {
      const res = fn(n);
      cache[n] = fn(n);
      return res;
    }
  }
}

function cal(n) {
  for(let i =0;i<400000; i++) {}
  return n * 10
};

const mem = memoFn(cal);

console.time('first');
console.log(mem(10));
console.timeEnd('first')
console.time('second');
console.log(mem(10))
console.timeEnd('second');
