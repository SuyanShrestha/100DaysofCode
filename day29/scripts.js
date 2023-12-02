// MAP METHOD

let nums = [69, 96, 22];
nums.map((val) =>{ 
    console.log(val);
});

let calcSquare = (num) => {
    console.log(num*num);
}

let newArr = nums.map((val) => {
    return val*val;
});

console.log(newArr);

// FILTER METHOD
// filter to store all even elements

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
arr2.filter((val)=>{
    return val%2==0;
});

arr2.filter((val) => {
    return val%3 && val%4 === 0;
});


// REDUCE METHOD



// MAPS
const fruits2 = new Map([
    ['apples', 500],
    ['bananas', 20],
    ['oranges', 40]
]);

fruits2.set('Shristi', 1000);
console.log(fruits2);

fruits2.get('Shristi');
fruits2.size;
fruits2.delete("apples");
console.log(fruits2);

fruits2.has('shristi');         // false
fruits2.has('Shristi');         // true
fruits2.clear();
console.log(fruits2);

fruits2.set('Shristi', 9900);
console.log(fruits2);

// fruits2.set(('Shristi', 9900),('Suyan',  1000));
// console.log(fruits2);            // 9900 -> 1000 hunxa yesto maa

// iteration over map
let vegetables = new Map([
    ['potato', 1000],
    ['meat', 700],
    ['beans', 200]
]);

//iterating over keys
for (let veg of vegetables.keys()){
    console.log(veg);
}

//iterating over values
for (let veg of vegetables.values()){
    console.log(veg);
}


// iterating over key value entries
for (let veg of vegetables.entries()){
    console.log(veg);
}

for (let veg of vegetables){
    console.log(veg);
}

vegetables.forEach((value,key,map) => {
    console.log(`${key}: ${value}`);
});


// OBJECT.ENTRIES map from object
// create a map through an object  
let obj1 = {
    name: 'Shristi',
    age: 22
};
let map1 = new Map(Object.entries(obj1));
console.log(map1);


// OBJECT.fromEntries object from map
// create an object from a map
let map2 = new Map([
    ['Suyan', 23],
    ['Shristi', 32],
    ['Alex', 12]
]);

let obj2 = Object.fromEntries(map2.entries());
console.log(obj2);

let map3 = new Map(map2);       // cloning a map
map2.set('Kriti', 21);
console.log(map3);

let obj3 = Object.fromEntries(map3);
console.log(obj3);



// SETS
const set1 = new Set(['a', 'b', 'c']);
set1.add('Shristi');
console.log(set1);

set1.delete('a');
console.log(set1);

console.log(set1.size);
set1.has('Suyan');
set1.clear();
console.log(set1);

// iteration over sets
let set2 = new Set(['Shristi', 'Suyan', 'Alex', 'Safal', 'Pursot']);

// we can also use key value in sets too like maps, but all of the following 3 loops will give same result
for(let item of set2.keys()){
    console.log(item);
}
for(let item of set2.values()){
    console.log(item);
}
for(let item of set2){
    console.log(item);
}

// even though there are no key value thingy in sets, but also forEach needs 3 arguments
set2.forEach((item, sameItem, set) => {
    console.log(item);
});
  

// code with harry
// MAP method
let arr10 = [1,2,3,4,5];

arr10.map((value)=>{
    console.log(value);
});
// harek element maa kei operation perform garerw euta naya array banauni vayo
// additional arguments for map method
arr10.map((value, index) => {
    console.log(value, index);
    return value + 1;
});

arr10.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
});


// FILTER METHOD 
let arr12 = [45, 25, 35, 22 , 80,14];
let a12 = arr12.filter((arrItem)=>{
    return arrItem<30;
});
console.log(a12);


// REDUCE METHOD
// reduces an array to a single value
let arr13 = [123,42,3,1,3,565,124,3];
let newarr13 = arr13.reduce((h1,h2)=>{
    return h1+h2;       // 864
});
console.log(newarr13);

let arr14 = [123,42,3,1,3,565,124,3];
let newarr14 = arr14.reduce((h1)=>{
    return h1;       // 123
});
console.log(newarr14);