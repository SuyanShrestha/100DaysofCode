// CLOSURES

// closure iscombination of function enclosed with reference to its surrounding state (lexical environment)
//  closure is a function that has access to its outer function scopefrom an inner function

function main(name) {
  //   let name = "Suyan";
  function sayMyName() {
    console.log(name);
  }
  return sayMyName;
}

let consoleSuyan = main("Suyan");
consoleSuyan();
consoleSuyan();
consoleSuyan();

// Practical use of closures

// 1. Text-Sizer

const myName = document.getElementById("my-name");
const btn30 = document.getElementById("btn-30");
const btn50 = document.getElementById("btn-50");
const btn80 = document.getElementById("btn-80");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = size + "px";
  }
  return changeSize;
}

let size30 = makeTextSizer(30);
let size50 = makeTextSizer(50);
let size80 = makeTextSizer(80);

btn30.addEventListener("click", size30);
btn50.addEventListener("click", size50);
btn80.addEventListener("click", size80);

// 2. Counter
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("count-num");

function makeCounter() {
  // let privateCounter = parseInt(counter.textContent, 10);
  let privateCounter;
  function changeCounter(val) {
    privateCounter += val;
  }

  return {
    increment() {
      return changeCounter(+1);
    },

    decrement() {
      return changeCounter(-1);
    },

    value() {
      return privateCounter;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

plus.addEventListener("click", () => {
  counter1.increment();
  counter.textContent = counter1.value();
});

minus.addEventListener("click", () => {
  counter2.decrement();
  counter.textContent = counter2.value();
});

// CLOSURE SCOPE CHAIN
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

// CLOSURE OVER MODULES
// let x = 5;
// export const getX = () => x;
// export const setX = (val) => {
//   x = val;
// };
// import { getX, setX } from "./myModule.js";

// console.log(getX()); // 5
// setX(6);
// console.log(getX()); // 6

// CURRYING
// currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const add => (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // 6

// Example-2
const emailText = document.getElementById("email-text");
function sendAutoEmail(to) {
  return function (subject) {
    return function (message) {
      return `To: ${to}, Subject: ${subject}, Message: ${message}`;
    };
  };
}

let step1 = sendAutoEmail("sh.suyan16@gmail.com");
let step2 = step1("New Order Confirmation");
step2("Hey Suyan, Your order has been confirmed");
emailText.innerHTML = step2("Hey Suyan, Your order has been confirmed");

// Example-3 (modern js for example 2)
const sendAutoEmail2 = (to) => (subject) => (message) =>
  `To: ${to}, Subject: ${subject}, Message: ${message}`;