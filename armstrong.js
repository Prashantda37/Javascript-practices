// 153 = 1*1*1 + 5*5*5 + 3*3*3
// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4

// program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}



