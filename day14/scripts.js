"use strict";

console.log("hello world");

// learning js

// variables
var firstName = "SuyanShrestha";
console.log(firstName);

// secondname = "shristikoju"' will come undefined because we are using strict.

// can only use $ or _ in vairable names, no other symbols
var $firstname = "Suyan";
var first$name = "Suyan";
var first_name = "Suyan";
var _firstname = "Suyan";

// Good conventions 
// start with small letter for eg firstname, not Firstname
// use camelCase


// let keyword (block scope vs function scope)
let firstNaam = "Suyan";
console.log(firstNaam);


// constants decalrations
const pi = 3.14;
console.log(pi);
// pi = 3 (cant be changed)
let r = 5;
console.log(pi*r*r);

let username = "Shristi Koju",
age = 92,
message = "hehe";
alert(username, age, message);



// string indexing

let myName = "Suyan";
console.log(myName[2]);
console.log(myName.length);


// USEFUL STRING METHODS
// trim, toUpperCase(), toLowerCase(), slice()

let untrimName = "abc   Suyan   ";
untrimName.trim();
console.log(untrimName.length);
console.log(untrimName.trim().length);
// strings are immutable, so siddai effect herna mildaina 
 

let caseCheck = "my name is Suyan";
console.log(caseCheck.toUpperCase());
console.log(caseCheck);  //see how strings are still immutable
console.log(caseCheck.toLowerCase());

let sliceTry =  "abcdef";
let newSlicetry = sliceTry.slice(1,4);
console.log(newSlicetry);


// typeof operator

let myAge = 22;
let typeTryname = "Shristi";

console.log(typeof myAge);
console.log(typeof typeTryname);

// convert number to string by simply adding ""
console.log(typeof (myAge + ""));
// convert string to number by simply using +
let strAge = "25";
console.log(typeof strAge);
strAge = +"25";
console.log(typeof strAge);