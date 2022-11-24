// var  x = 5 initialization variable does nnot move to the top
function fun() {
  a = 1; //initialization variable
  console.log(a); //undefined
  var a;
  
  // console.log(b, c) // reference error
  // const b = 2;
  // let c = 3;
}

fun()
// this could be posible
// v()
// function v() {
//   console.log('111')
// }
x = 3
console.log(x)
var x;

// Promises check here
async function abc() {
  // const s = await new Promise((resolve) => { setTimeout(() => resolve('abc'), 100) });
  // reject throw 'something wrong'
  return [1,2];
}
// console.log(abc()) return Promise { [ 1, 2 ] }
// abc().then(res => console.log('=====',res))
// abc().catch(error => console.log(error));


// new scope
// function func() {
//   console.log(a);
//   if(true) {
//       var a = 20;
//       console.log(a)
//   }
//   console.log(a)
// }

// func()

// setTimeout(function () { console.log('ddd') }, 200); 
// while(true) { // goes into infinite mode and doesn't console ddd becoze stack is not getting empty
//   console.log(1)
// }