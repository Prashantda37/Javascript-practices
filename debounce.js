function  debounce(fn, timeout = 300) {
  let timer;
  return function (...arg) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, timeout);
  }
}

function inputValue (e) {
  // pressing data
  console.log(e)
}

const debounceData = debounce(() => { inputValue() })


// Pass by value vs reference?

var a = {
    name: 'Anup'
};

var b = 2;

var c = [];

function change(tempA, tempB, tempC) {
    tempA.name = 'Nikhil';
    tempB = 3;
    tempC.push('value');
}

change(a, b, c);

console.log(a.name, b, c); // ? Nikhil, 2, ['value']

// -----------------------------

var userName = "Anup";

a();

function a() {
    b();
    console.log("a");
}

function b() {
    console.log(userName); // ?
    console.log("b");
}

console.log("done");

// Anup
// b
// a
// done

// callstack?

// ---------------------------

var userName = "Anup";

function b() {
    console.log(userName); // ? Prashant
    console.log("b");
    
    var userName = "Prashant";
}

b();

console.log(userName); // ? Anup

// -----------------

var userName = "Anup";

function b() {

    setTimeout(() => {
        console.log("timeout: ", userName);
    }, 0);
    
    new Promise((resolve, reject) => 
        resolve("resolve: ")
    ).then(resolve => console.log(resolve, userName));
    
    
    console.log(userName); // ? Prashant
    console.log("b");
    
    var userName = "Prashant";
}

b();

// Prashant
// b
// resolve: Prashant
// timeout: Prashant

// ---------------------

var name = "Nikhil";

var person = {
    name: "Anup",
    age: 30,
    getDetail: function () {
        console.log(this.name);
    },
    getName: () => {
        console.log(this.name);
    }
}

person.getDetail(); // ? Anup
person.getName(); // ? undefined

var animal = {
    name: 'Lion'
}

animal.call(person)

// person.getDetail // Lion

// ------------------------------
// Pass by value vs reference?

var a = {
    name: 'Anup'
};

var b = 2;

var c = [];

function change(tempA, tempB, tempC) {
    tempA.name = 'Nikhil';
    tempB = 3;
    tempC.push('value');
}

change(a, b, c);

console.log(a.name, b, c); // ? Nikhil, 2, ['value']

// -----------------------------

var userName = "Anup";

a();

function a() {
    b();
    console.log("a");
}

function b() {
    console.log(userName); // ?
    console.log("b");
}

console.log("done");

// Anup
// b
// a
// done

// callstack?

// ---------------------------

var userName = "Anup";

function b() {
    console.log(userName); // ? Prashant
    console.log("b");
    
    var userName = "Prashant";
}

b();

console.log(userName); // ? Anup

// -----------------

var userName = "Anup";

function b() {

    setTimeout(() => {
        console.log("timeout: ", userName);
    }, 0);
    
    new Promise((resolve, reject) => 
        resolve("resolve: ")
    ).then(resolve => console.log(resolve, userName));
    
    
    console.log(userName); // ? Prashant
    console.log("b");
    
    var userName = "Prashant";
}

b();

// Prashant
// b
// resolve: Prashant
// timeout: Prashant

// ---------------------

var name = "Nikhil";

var person = {
    name: "Anup",
    age: 30,
    getDetail: function () {
        console.log(this.name);
    },
    getName: () => {
        console.log(this.name);
    }
}

person.getDetail(); // ? Anup
person.getName(); // ? Nikhil

var animal = {
    name: 'Lion'
}

animal.call(person)

// person.getDetail // Lion

// ------------------------------
console.time();
1 == '1'
console.timeEnd();

console.time();
1 === '1'
console.timeEnd();




























