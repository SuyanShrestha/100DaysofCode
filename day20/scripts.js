// CLONING AN ARRAY 

let array1 = ["Shristi", "Suyan"];
let array2 = array1.slice(0);           // simply assigning one array to other make them identical such that changes
                                        // in one array will result changes in other array so use slice

array2 = [].concat(array1);
array2 = [...array1];                   // most used way
alert(array1 === array2);                // comes false, so both arrays are different from each other
// So arrays can be clones using slice, concat and spread operator

array2 = [].concat(array1, ["Kojukumar", "Shresthakumari"]);
alert(array2);
array2 = [...array1, "Alex", "Kriti"];
alert(array2);
alert([...array1, ...array2]);
let array3 = [...array1, ...array2];



// LOOPING IN ARRAY

// for loop in array
let capArray3 = [];
for(let i=0; i < array3.length;i++){
    console.log(array3[i]);
    capArray3.push(array3[i].toUpperCase());
}
console.log(capArray3);

// using const to create arrays
const fruits = ["apple", "mango"];
fruits.push("banana");
alert(fruits);

// fruits = ["kera", "syau"];       (error aauxa cuz const le ekchoti matra banauna dinxa..
                                    //tarw devs le dherai jas oconst nai use garxan for safety)


// while loop in array
const arr1 = ['Shristi', 'Suyan'];
const arr2 = [];
let i=0;
while(i<arr1.length){
    arr2.push(arr1[i].toUpperCase());
    i++;
}       
console.log(arr2);                             


// for of loop in array
// directly gives items
for(let item of arr1){
    console.log(item.toUpperCase());
}

// for in loop in array
// gives index
for(let index in arr1){
    console.log(index);
    console.log(arr1[index].toUpperCase());
}


// In arrays we usually use forloop and for of loops



// ARRAY DESTRUCTURING

//
const myArray1 = ["ShristiKoju", "SuyanShrestha", "apple"];
let[myvar1, myvar2] = myArray1;
console.log("value of myvar1 is", myvar1);
console.log("value of myvar2 is", myvar2);


// 
const myArray2 = ["ShristiKoju", "SuyanShrestha"];
let[myvar3, myvar4, myvar5] = myArray1;
console.log("value of myvar3 is", myvar3);
console.log("value of myvar4 is", myvar4);
console.log("value of myvar5 is", myvar5);          // undefined

//
const myArray3 = ["ShristiKoju", "SuyanShrestha", "apple"];
let[myvar6, ,myvar7] = myArray1;
console.log("value of myvar6 is", myvar6);
console.log("value of myvar7 is", myvar7);

//
const myArray4 = ["Shristi", "Suyan", "Apple", "banana"];
let [myvar8, myvar9, ...myFruits] = myArray4;
console.log("myvar8 is ", myvar8);
console.log("myvar9 is ", myvar9);
console.log("my fruits are ", myFruits);




// SOME ARRAY SPECIAL METHODS       

// splice
const sparr1 = ["I", "love", "ujok", "umari"];
sparr1.splice(1,2);                 // from index 1 remove 2 elements
console.log(sparr1);

//
const sparr2 = ["I", "love", "ujok", "umari"];
sparr2.splice(0, 2, "Let's" , "dance");                 // from index 1 remove 2 elements and add these two
console.log(sparr2);

//
const sparr3 = ["I", "love", "ujok", "umari"];
sparr3.splice(2, 0, "dancing" , "and");                 // add elements without delete
console.log(sparr3);


// slice
// doesnt transform orignal array but creates a copy
const sparr4 = sparr3.slice(1, 5);                       // index 1 inclusive and index 5 exclusive
alert(sparr3.slice(-2));                                 // index -2 to the end


// concat

let newArr1 = [1,2];
alert(newArr1.concat([3,4],[5,6]));

let arrayLike = {
    0: "something",
    length: 1
};
  
alert( newArr1.concat(arrayLike) );