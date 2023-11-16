// if else

let myAge = 22;
if(myAge>23){
    console.log("I m old");
}
else{
    console.log("No i aint");
}

if(myAge%2==0){
    console.log("even");
}
else{
    console.log("odd");
}


//truthy and falsy values
// falsy values are false, "", null, undefined, 0

let falseName = "";
// let falseName;
// let falseName = null;
// let falseName = 0;
if(falseName){
    console.log("Truthy value");
}
else{
    console.log("This is a falsy value");
}


// TERNARY OPERATOR / CONDITIONAL OPERATOR
myAge = 18;
let myDrink = myAge >= 20 ? "Age is over 20" : "wassup lil niga";
console.log(myDrink);


// AND OR OPERATOR
let myName = "Suyan";
myAge = 22;

if(myName[0]="S" && myAge>20){
    console.log("Your name starts with S and age is greater than 20.");
}
else{
    console.log("one or both condition unsatisfied.");
}

if(myName[0]="S" || myAge<20){
    console.log("Either Your name starts with S or age is less than 20.");
}
else{
    console.log(" both condition unsatisfied.");
}


// nested if else
let winningNumber = 19;
let userGuess = +prompt("Guess a number."); //takes in value as a string, so + is necessary

if(userGuess === winningNumber){
    console.log("Your guess is right");
}
else{
    if(userGuess < winningNumber){
        console.log("too low");
    }
    else{
        console.log("too high");
    }
}


// SWITCH
let userDay = +prompt("Enter your day: ");
switch(userDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}


// WHILE LOOP
let i=0;
while(i<=3){
    console.log(i);
    i++;
}
console.log(`The current value of i is ${i}`);

// examples on WHILE LOOP
let number = +prompt("Enter total number of numbers");
let total = 0;
i = 0;
while(i <= number){
    total += i;
    i++;
}
console.log(`Hence the sum of natural numbers upto ${number} is ${total}`);

// FOR LOOP
num = +prompt(`Give the number to which must be summed of natural numbers: `);
for( i=0;i<=num;i++){
    total = total+i;
}
console.log(`The sum upto ${i} is ${total}`);


// BREAK KEYWORD
for(i =1;i<=10;i++){
    if(i==4){
        break;
    }
    console.log(i);
}


// CONTINUE KEYWORD
for(i =1;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}

// DO WHILE LOOP
do{
    console.log(i);
    i++;
}while(i<=9);