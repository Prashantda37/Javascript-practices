// // program to display fibonacci sequence using recursion
// function fibonacci(num) {
//   if(num < 2) {
//       return num;
//   }
//   else {
//       return fibonacci(num-1) + fibonacci(num - 2);
//   }
// }

// function f(nTerms) { // nTerms should be positive
//   for(let i = 0; i < nTerms; i++) {
//      console.log(fibonacci(i));
//   }
// }

function fabonacci(number) {
  if( number < 2) {
    return number;
  } else {
    fabonacci(number-1) + fabonacci(number-2)
  }

}
function f(n) {
  for(let i=0; i < n ;i++) {
    console.log(fabonacci(i))
  }
}

f(10)

// take nth term input from the user
// const nTerms = prompt('Enter the number of terms: ');

// if(nTerms <=0) {
//   console.log('Enter a positive integer.');
// }
// else {
//   for(let i = 0; i < nTerms; i++) {
//       console.log(fibonacci(i));
//   }
// }