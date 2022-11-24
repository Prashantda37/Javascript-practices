
function add(a) {
  return function (b) {
    if(b) return add(a + b)

    return a;
  }
}

console.log(add(1)(2)(2)());


//add chain object
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  }
}

const result = calc.add(3).multiply(3).substract(2).add(4);
console.log(result.total);




// function curry(a) {
//   return function (b) {
//     return a + b;
//   } 
// }

// // console.log(curry(1)(2));

// function sum(n) {
//   var v = function(x) {
//     return sum(n + x);
//   };

//   v.valueOf = v.toString = function() {
//     return n;
//   };

//   return v;
// }



// console.log(+sum(1)(2))

// function sum1(a) {

//   var sum = a;
//   function f(b) {
//       sum += b;
//       return f;
//    }
//   f.toString = function() { return sum }
//   return f
// }

// console.log(sum1(1)(2)(3).toString())






function  x (a) {
  return function (b) {
    return a + b;
  }
}

const w = x(1);

w(2)