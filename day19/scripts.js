// NUMBERS


let billion = 1000000000;
// different ways to make number readable
billion = 1_000_000_000;
billion = 1e9;

let zillion = 1.23e6;       //  1.23 * 10 ^ 6
let mcs = 0.0006;
mcs = 6e-4;

//binary and octal
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b );

let num = 255;

alert( num.toString(16));  // ff    - base 16 for hexa
alert( num.toString(2));   // 11111111      - base 2 for binary
alert(num.toString(8));    // 377   - base 8 for octal


// Rounding
num = 123.4678;
alert(Math.round(num));
alert(num.toFixed(1));  // "123.5" string 
num = 12.34;
alert(num.toFixed(5));  // "12.34000"


// Imprecise calculations
alert(0.1+0.2 == 0.3);  // false , so we can use toFixed(1) to get exact sum 0.3
alert(9999999999999999); 

//isFinite and isNaN
alert(isNaN(Infinity));
alert(isNaN(NaN));
alert(NaN==NaN);

num = +prompt("Enter a number: ", '');
alert(isFinite(num));

alert(isNaN("NaN"));               // true 
alert(Number.isNaN("NaN"));        // false (checks for num too)
alert(isFinite("123"));
alert(Number.isFinite("123"));

// Object.is
alert(Object.is(1,1));              // a===b
alert(Object.is(0,-0));
alert(+"123");
alert(+"123px");        // NaN since the string is not exactly a number


//parseInt and parseFloat
alert(parseInt(12.3));                  // 12
alert(parseInt("100px"));               // 100
alert(parseInt("100px6"));              // 100
alert(parseFloat("22.5rem"));           // 22.5
alert(parseFloat("22.5.4"));            // 22.5

alert(parseInt("1111"),2);              // 15 in binary
alert(parseFloat("1111.1111",2));       // 1111.1111 since only parseInt has got such second arrgument
alert(parseInt("0xff",16));             // 255
alert(parseInt("ff",16));               // 255


// MATH FUNCTIONS
alert(Math.random());
num = Math.random();
console.log(num/2);

alert( Math.pow(2, 10) );               // 2^10 == 1024
alert( Math.max(3, 5, -10, 0, 1) );     // 5
alert( Math.min(1, 2) );                // 1




// ARRAYS

// Declaration of arrays
let arr1 = new Array();
let arr2 = [];

let fruits = ['apple', 'banana', 'orange'];
alert(fruits[0]);
alert(fruits);
fruits[0] = 'pineapple';
alert(fruits);
alert(fruits.length);

// mix of values acceptable in array
let arr3 = ['apple',
            {name: 'Shristi Koju',
             age: 22},
            true,
            function(){
                alert("hello suyan");
            }
           ]
alert(arr3[1].name);            // Shristi Koju
alert(arr3[2].name);            // undefined
alert(arr3.at(-1));             // [Function (anonymous)]
alert(arr3.at(-2));             // true
alert(arr3.at(-3).name);        // Shristi Koju


// PUSH POP SHIFT UNSHIFT

//push and pop add/remove elements at index -1
fruits = ['apple','banana','guava'];
alert(fruits);
fruits.push('shristi');
alert(fruits);  
let poppedFruit = fruits.pop();
alert(fruits);
alert(poppedFruit);

// unshift is used to add elemnts on the index 0 while shift is used to remove
fruits = ['apple','banana','guava'];
fruits.shift();
alert(fruits);
fruits.unshift("Suyan","Shristi");
alert(fruits);


// PRIMITIVE VS REFERENCE DATATYPES

let num1 = 6;
let num2 = num1;
alert('value of num1 is', num1);
alert('value of num2 is', num2);
num1++;
alert("after incrementing num1");
alert('value of num1 is', num1);
alert('value of num2 is', num2);
// this example is primitive, changing num1 doesnt chnager num2

// one reference tyype datatype is array
let array1 = ["Suyan", "Shristi"];
let array2 = array1;
alert("array1",array1);
alert("array2",array2);
array1.push("Alex");
alert("After pushing: ");
alert("array1",array1);
alert("array2",array2);