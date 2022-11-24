const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo1");
  }, 200);
});

const c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo2");
  }, 300);
});

// Promise.all([a, b, c]).then(([a, b, c]) => {
//   console.log(a,b,c)
// }).catch(err => console.log(err));


/////////////////////
// Polyfill of promise.all

Promise.CustomAll = function (promises) {
  return new Promise((resolved, reject) => {
    let count = promises.length;
    const result = [];
    promises.forEach((promise, i) => {
      promise.then((res) => {
        result[i] = res;
      }, reject).then(() => {
        if(--count === 0) {
          resolved(result);
        }
      })
    });
  });
}

Promise.CustomAll([a, b, c]).then((res) => {
  console.log(res)
}).catch(err => console.log(err));