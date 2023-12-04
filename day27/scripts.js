// vid 13 challenbge changing string
var myName = prompt('What is your name?');
var firstChar = myName.slice(0,1);
var uppeCaseFirstChar = firstChar.toUpperCase();
var restOfName = myName.slice(1, myName.length); 

var newName = uppeCaseFirstChar.concat(restOfName);
console.log(`Hello, ${newName}`);   


// FUNCTIONS
function myName2(){
    return varName2 = prompt('What`s your name?');
}
myName2();

// vid 17
// vid 18

function myDecide(a,b){
    if(a*b > 99){
        console.log(`The product is ${a*b}`);
    }
    else{
        console.log(`So smoll smoll moyemoye`);
    }
}

var num1 = +prompt('Enter the value of first number: ', 'like 45');
var num2 = +prompt('Enter the value of second number: ', 'like 69');
myDecide(num1, num2);
var num3 = Math.floor(1.3);
console.log(num3);

// go market, and buy 3 apples (Rs 60 each) , 5 bananas (Rs 15 reach), and 3 mangoes (Rs 110 each)

function goMarket(apple, banana, mango, budget){
    var totalCost = apple*60 + banana*15 + mango*110;
    var remainMoney = (budgetMoney-totalCost);
    remainMoney = Math.abs(remainMoney);
    if (totalCost < budgetMoney){
        return `You have Rs ${remainMoney} remain and you are under the budget.`
    }
    else{
        return `You are Rs ${remainMoney} behind and you are behind the budget.`
    }
}

var budgetMoney = +prompt('What is your total budget?');
goMarket(3,5,3,budgetMoney);

// you have some budget, and you need to buy some milk . Now get some milk and return the change
alert('Beware! The budget of milk is Rs 40 currently.');
var milkBudget = +prompt(`Enter your budget.`,'like 140');

function buyMilk(budget){
    if(budget>40){
        var change = budget % 40;
        var numberOFMilk = budget/40;
        numberOFMilk = Math.floor(numberOFMilk);
        return `Now the number of milk packets you have is ${numberOFMilk} and the money remaining is ${change}`;
    }
    else{
        return 'You have insufficient budget.'
    }
}

buyMilk(milkBudget);


// BMI CALCULATOR
// BMI = weight(kg)/height^2

function bmiCalculator (height, weight){
    height = height^2;
    return `Your BMI is ${weight/height}`;
}
var myHeight = +prompt('Enter yur height in meter: ');
var myWeight = +prompt('Enter your wieght in kilograms: ');
bmiCalculator(myHeight, myWeight);

// COMPARISION OF OBJECTS BY REFERENCE  
let user1 = {
    name: 'Shristi',
    age: '22'
}

let user2 = user1;
alert(user1 == user2);
alert(user1 === user2);

user1.name = "Suyan";
console.log(user1);
console.log(user2);

// Object.assign method

let user3 = {name: 'Shristi'};

let permission1 = {canEdit: true};
let permission2 = {canView: true};
Object.assign(user3, permission1, permission2);     // copies all properties of right sided objects to leftmosdt target object
alert(user3.name);                       // Shristi
alert(user3.permission1);                           // true
alert(user3,permission2);                   // true

let suyanClone = Object.assign({}, user3);

let user4 = {
    name : 'Suyan',
    age : 22,
    gender : 'Male',
    partner : {
        name : 'Shristi',
        age : 22,
        gender : 'Female'
    }
}

alert(user4.name);
alert(user4.partner.name);
alert(user4.partner.gender);

let user5 = Object.assign({}, user4);
alert(user4.partner===user5.partner);

alert('Suyan Shrestha');

//CALLBACK FUNCTIONS 

function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function calculate(x,y,operate){
    return operate(x,y);
}

var num1 = +prompt('Enter the first number: ');
var num2 = +prompt('Enter the second number: ');

calculate(2, 4, add);

