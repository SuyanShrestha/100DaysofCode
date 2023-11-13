// string concatenation
let string1 = "Suyan";
let string2 = "Shrestha";

let fullName = string1 + " " + string2;
console.log(fullName);

string1 = "17";
string2 = "20";

fullString = string1 + string2;
console.log(fullString);

fullString = +string1 + +string2; // Changing the strings to number such that concatenation becomes addition
console.log(fullString);
console.log(typeof fullString);


// TEMPLATE STRINGS
let myAge = 22;  
let myName = "Suyan";
console.log("My name is ${myName} and my age is ${myAge}."); // This will not work, use backticks instead of quotes
console.log(`My name is ${myName} and my age is ${myAge}.`); // This will not work, use backticks instead of quotes


// UNDEFINED and NULL
let undefinedName;
console.log(typeof undefinedName);

let numVariable = null;
console.log(typeof numVariable, numVariable); //typeof null comes object is a bug, but devs didnt change it to prevent further bugs.

// BigInt
let bigNumber = 394328723874348235;         // wont be accurate
let bigNumber2 = BigInt(394328723874348235n);
let bigNumber3 = 394328723874348235n;
console.log(bigNumber, bigNumber2, bigNumber3);
console.log(bigNumber2 + bigNumber3);
console.log(bigNumber + bigNumber3);   //BigInt cannot be operated with other numbers except bigint

let bigString = BigInt("Suyan"n);
console.log(bigString);
 

// BOOLEAN AND COMPARISION OPERATORS
let num1 = 5;
let num2 = 7;
console.log(num1>num2, num1<num2, num1>=num2, num1<=num2);

// == (for only value) vs === (for both values and datatype)
num1 = 1;
num2 = "1";
let num3 = true;
console.log(num1==num2==num3);
console.log(num1==num2===num3); //boolean has no datatype
console.log(num1===num2===num3); //unequal datatypes of num1 and num2

// comparision of equality between null and undefined
console.log(null==undefined);
console.log(null===undefined);

// true=1 and false=0
// empty string is fasle and space matravako string vayeni filled string is true
let a = " ";
console.log(Boolean(a));
a = "";
console.log(Boolean(a));
a = "2";
console.log(Boolean(a));


//comparision operators change any datatype to number, but equality operator just checks and doesnt change datatype
//null is converted to 0
console.log(null>0); // false - 0 is not greater than 0
console.log(null==0); //false - no changes made in equality operator
console.log(null>=0); //true
//undefined is converted to NaN, so cannot use comparision operator.


//ALERT PROMPT CONFIRM
alert("Welcome to our homepage."); 
//alert just shows up a msg and waits for user to press OK

prompt("Type your age: ", 100);
// gives out the msg and a textbox to enter age. Default value of textbox is 100. User can click OK or cancel.

confirm("Are you a student?");
// users can either click OK or cancel. OK click gives true nad Cancel click gives false.