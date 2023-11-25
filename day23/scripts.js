// objects reference type
// arrays not good for real world data
// objects stroe key value pairs
// objects dont have index


// how to create objects

const person = {
    name: 'Suyan',
    age: '20',
    hobbies: ['guitar', 'sleeping', 'music']
};
console.log(typeof person);

// how to access data from name
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[1]);

// how to add key value pairs to objects
person.gender = 'Male';
person['Date of Birth'] = '2059-09-20';
console.log(person);

// how to access data from objects
console.log(person['age']); // by default, keys are string in js



// DIFFERENCE BETWEEN DOT AND BRACKET NOTATION
const person2 = {
    name: 'Shristi Koju',
    age: 22,
    'person hobbies': ['loving', 'art', 'tiktok']  // person hobbies is in quotes because js doesnt allow spaces
}

// console.log(person1.person hobbies);  // space vara cant access using dot notation

console.log(person2['person hobbies']);

const key = 'email';
person2['key'] = 'kojushristi4@gmail.com';     // key vanni nai key banaidinxa
console.log(person2);
person2[key] = 'kojushristi4@gmail.com'; // mathi key variable maa vako email  vanni lera tyo email lai chahi key banaidinxa
console.log(person2);


// iterating objects 
const person3 = {
    name: 'Suyan Shristi',
    age: 20,
    'person hobbies': ['loving', 'eatingg', 'sleeping']
}

// for in loop
for(key in person3){
    console.log(key);
}

//this was how to get names of keys, now lets see how to get values
// for(key in person3){
//     console.log(person.key);   (will give undefined because it wont find a key named key in the object)
// }

for(key in person3){
    console.log(person3[key]);
}

for(key in person3){
    console.log(`My ${key} is ${person3[key]}`);
    // console.log(key, ":", person3[key]);
}



console.log(Object.keys(person3));
console.log(Array.isArray(Object.keys(person3)));
console.log(typeof (Object.keys(person3)));

// for of
for(let keys of Object.keys(person3)){
    console.log(`${person3[keys]} is the value of ${keys}`);
};


// COMPUTED PROPERTIES
const key1 = 'objkey1';
const key2 = 'objkey2';
const value1 = 'myvalue1';
const value2 = 'myvalue2'; 

const obj = {
    [key1] : value1,
    [key2] : value2
}

alert(obj);

let myFruit = prompt('Which fruit do you want to buy?');
const myBag = {};
myBag[myFruit] = 5;
alert(myBag);

// property name limitations
const newObj = {
    for : 1,
    let : 2,
    return: 3;
}
alert(newObj.for + newObj.let + newObj.return);


// SPREAD OPERATOR

const newArray = [..."abc"];            // [ 'a', 'b', 'c' ]
console.log(newArray);

// spread operator in objects

const obj1 = {
    key1: 'value1',
    key2: 'value2'
};
const obj2 = {
    key3: 'value3',
    key4: 'value4'
};

const cloneObject = {...obj1};     // cloning an object
obj1["key3"] = 'value3';
alert(obj1, cloneObject);


const newObject = {...obj1, ...obj2, key69: 'value69'};
console.log(newObject);

const newObject2 = {...'abc'};          // { '0': 'a', '1': 'b', '2': 'c' }
const newObject3 = {... ['item1', 'item2']};    // { '0': 'item1', '1': 'item2' }

const newObject4 = {..."qwertyuiopasdfghjklzxcvbnm"};
console.log(newObject4);


// OBJECT DESTRUCTURING
const band = {
    bandName : "linkin park",
    famousSong : "one mor light",
    year: 1990,
    lead: 'tony stark'
};

// let {bandName, famousSong} = band;              // linkin park                                        
// console.log(bandName);                          
// let {famousSong, bandName} = band;
// console.log(bandName);                       ( same result )

let {bandName: var1, famousSong: var2} = band;
console.log(var1,var2);

let {bandname, famousSong, ...restProps} = band;        // bandname != bandName
console.log(restProps);                          // restprops maa bandName, year ra lead tintai huni vo


// OBEJCTS INSIDE ARRAY

const users = [
    {   
        userId: 1,
        firstName: 'Suyan',
        gender: 'Male'
    },
    {   
        userId: 2,
        firstName: 'Shristi',
        gender: 'Female'
    },
    {   
        userId: 3,
        firstName: 'XYZ',
        gender: 'Male'
    }
]

for (let user of users){
    console.log(user);
}

for (let user of users){
    console.log(user.gender);
}


// NESTED DESTRUCTURING
const [user1, user2, user3] = users;
console.log(user1);

const [{firstName}, {gender}, ]= users;
console.log(firstName, gender);

const[{firstName: user1firstName}, {gender: user2gender}, ];
console.log(user1firstName);
// console.log(firstName);                                                 // firstName is not defined wala error
console.log(user2gender);