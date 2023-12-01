// Math.random() creates 0 to 0.99999 maa random number
var n = Math.random();
n = n*6;                         // since only 0-0.99999 is available, scale the range as needed
console.log(n);

// LOVE CALCULATOR USING RANDOM

var name1 = prompt('Enter your name: ');
var name2 = prompt('Enter the name of your partner: ')
var percent = Math.random();
percent = percent*100;
alert(`The true percentage of love between ${name1} and ${name2} is: ${percent}`);

// making a custom range of 90-99 for nibba nibbi
var percent2 = Math.random();
percent2 = percent2 * (99-90);   // random * difference range
percent2 = percent2 + 90; // random + minimum
alert(`The cute percentage of love between ${name1} and ${name2} is: ${percent2}`);

if(percent > 80 || percent2 > 95){
    alert('And yep, you got an distinction scale in ur love');
}

// LEAP YEAR PROBLEM
var  year = +prompt('Enter the year: ');

function isLeap(year){

    if (year%4===0){
        if(year%100 === 0){
           if(year%400 === 0){
               return 'It is a leap year.';
           }
            else{
                return 'Not a leap year.';
            }
        }
        else{
            return 'It is a leap year';
        }
    }
    else{
        return 'Not a leap year.';
    }
}

isLeap(year);


// GUEST LIST IN COLLECTIONS
var guestList = ['Suyan', 'Shristi', 'Jack', 'Lara', 'Alex'];
var guestName = prompt('Hi, can i have the honor of knwoing your name? ');

if(guestList.includes(guestName)){
    alert(`Welcome to the party`);
}
else{
   alert(`Sorry, maybe next time!`);
}


// FIZZBUZZ PROBLEM
var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 5 === 0 && count % 3 === 0) {
    output.push("FizzBuzz");
  }
  else if (count % 3 === 0) {
    output.push("Fizz");
  }
  else if (count % 5 === 0) {
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  count++;
};

while(count < 100) {
    fizzBuzz();
}
console.log(output);


// Select random name from a list of names
nameList = ['Suyan', 'Shristi', 'pursottma', 'safal'];
function selectRandom(nameList){
   var totalPeople = nameList.length;
   var randomPersonIndex = Math.floor(Math.random() * totalPeople);
   var randomPerson = nameList[randomPersonIndex];
   return randomPerson + ' is the one honored!';
}
selectRandom(nameList);


// // FIBONACCI SERIES    
function fibonacciGenerator(num){
    var arr = [];
    if(num===1){
        arr.push(0);
    }
    else if(num===2){
        arr.push(0,1);
    }
    else{
        arr = [0,1];
        for(var i=2;i<num;i++){
            // arr.push(+arr[-1] + +arr[-2]);     // there is not concept of negative indices of arrays in JS, we can use them tho in splice, slice etc     
            arr.push(arr[arr.length-1] + arr[arr.length-2]);
        }
    }
    return arr;
}

console.log(fibonacciGenerator(5));


// SHRADHA KHAPRA practice on arrays
//  q1.  avg of marks
let arr1 = [85,97,44,37,76,60];
let sum=0;

for (let i=0; i<arr1.length; i++){
    sum += arr1[i];
}

// for(let val of arr1){
//     sum+=val;
// }

console.log(sum/arr1.length);

//q2. 10% discount on each item
let arr2 = [250, 645, 300, 900, 50];

for (let i=0; i<arr2.length; i++){
    arr2[i] = arr2[i] - 10/100*arr2[i];
}
console.log(arr2);

// q3. companies ques
let arr3 = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(arr3.shift());
console.log(arr3);
//splice for replacing
arr3.splice(2,1,'Ola');
//adding at end of array
arr3.push('Amazon');


// ARROW FUNCTIONS
function sum(a,b){
    return a+b;
}

//  in arrowm mode (should store in some variable to execute)
let sum2 = (a,b) => {
    console.log(a+b);
};
sum2(2,3);

const mul2 = (a,b,c) => {
    return a*b*c;
}
mul2(2,3,4);


// function to eturn numbe of vowels

function countVowels(str){
    let count = 0;
    for(const val of str){
        // console.log(val);
        if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u'){
            count = count+1;
        }
    }
    console.log(count);
}

arrowVowel = str => {
    let count = 0;
    for(const val of str){
        // console.log(val);
        if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u'){
            count = count+1;
        }
    }
    console.log(count);
}

arrowVowel('bananana');

// methods are just functions but are binded to some data structure, for eg, toUpperCase() 
// is a mthod which is a function binded to just strings

// forEach and callback functions
let arr4 = [1,2,3,4,5];
// arr4.forEach(function printVal(val){
//     console.log(val);
// });
arr4.forEach((val) => {console.log(val)});

// converting justthe first letter to uppercase
let arr5 = ['suyan', 'shristi', 'safal', 'pursottam'];
arr5.forEach((val) => {
    let firstLetter = 0;
    let remLetter = 0;
    // let newTotal = 0;
    for(let i=0; i<arr5.length; i++){
        firstLetter = arr5[i].slice(0,1);
        firstUpper = firstLetter.toUpperCase();
        remLetter = arr5[i].slice(1,arr5[i].length);
        arr5[i] = firstUpper.concat(remLetter);  
    }
});

console.log(arr5);

// forEach can only be used for arrays, but not for strings.

// HIGHER ORDER FUNCTIONS are those functions that use other functions as parameters, or return them.
// callback functions dekhyo ki higher order functions huni vo.

// printing sqaure of each number using forEach loop 
let arr6 = [1,2,3,4,5,6];
arr6.forEach((val)=>{
    console.log(val^2);
});