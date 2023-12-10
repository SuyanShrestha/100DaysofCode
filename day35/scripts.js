// var student1 = {
//     name: 'Shristi',
//     age: 30,
//     percent: 85,
//     subject: ['Physics', 'Applied', 'Maths'],
//     isFemale: true
// };

// var student2 = {
//     name: 'Suyan',
//     age: '32',
//     percent: 84,
//     subject: ['English', 'TOC', 'Discrete'],
//     isFemale: false
// }


// CONSTRUCTOR FUNCTION
// camelcase haina full capital letter hunuparyo yesma naming garda

function KhwopaStudent (name, age, percent, subject, isFemale){
    this.name = name;
    this.age = age;
    this.percent = percent;
    this.subject = subject;
    this.isFemale = isFemale;
}

var student1 = new KhwopaStudent('Shristi', 30, 85, ['Physics', 'Applied', 'Maths'], true);
var student2 = new KhwopaStudent('Suyan', 32, 84, ['English', 'TOC', 'Discrete'], false);


//setTimeout() = invokes a function after a number of milliseconds, asynchronous functions
// (doesnt pause the execution)

function firstMessage(){
    alert('Well, now you have clicked me');
}
function secondMessage(){
    alert('means you are interested? ');
}
function thirdMessage(herName, myName, myPlace){
    alert(`aww ${herName}, I m ${myName} from ${myPlace}`);
}
let myName = 'Suyan';
let myPlace = 'KTM';
let herName = 'kojukumari'
let timer1 = setTimeout(firstMessage, 1000);
let timer2 = setTimeout(secondMessage, 4000);
let timer3 = setTimeout(thirdMessage, 6000, herName, myName, myPlace);


// cancelling the setTimeout
document.getElementById('btn').onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert('clever, now no more alerts!')
}


//setInterval() = invokes a function repeatedly after a number of milliseconds, asynchronous functions
// (doesnt pause the execution)

console.log('---------------------------------');
let count= 0;
// let max = window.prompt('Count up to what ? ');
// max = Number(max);
let max = +prompt('Count upto what? ');

let myTimer = setInterval(countUp, 3000);

function countUp(){
    count+=1;
    console.log(count);
    if (count>=max){
        clearInterval(myTimer);
    }
}


// DATE OBJECTS
let date = new Date();
date = date.toLocaleString();
// toLocaleString makes it more readable
// earlier date -> Sun Dec 10 2023 19:01:45 GMT+0545 (Nepal Time)
// after toLocaleString -> '12/10/2023, 7:01:20 PM'
console.log(date);

document.getElementById('myLabel').innerHTML = date;

let date2 = new Date(0); // gives epoch at 1970 AD
date2 = date2.toLocaleString();
console.log(date2);

let date3 = new Date(10000000000); // gives 100000000000 ms time after epoch
date3 = date3.toLocaleString();
console.log(date3);

let date4 = new Date(2023, 0, 1, 2, 3, 55, 3); // gives 100000000000 ms time after epoch
// january = 0
date4 = date4.toLocaleString();
console.log(date4);

let date5 = new Date();
let year = date5.getFullYear();
let dayOfMonth = date5.getDate();
let dayOfWeek = date5.getDay();
// sunday = 0
let month = date5.getMonth();
// december = 11
let hour = date5.getHours();
console.log(year, dayOfMonth, dayOfWeek, month, hour);

date5.setFullYear(2028);
console.log(date5);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours>=12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

let date6 = new Date();
console.log(date6);

document.querySelector('#myLabel').innerHTML = formatDate(date6);
document.querySelector('#myLabel').innerHTML;
document.querySelector('#myLabel').innerHTML = formatTime(date6);
document.querySelector('#myLabel').innerHTML;


// CLOCK PROGRAM
const myLabel1 = document.querySelector('#myLabel');
document.querySelector('#myLabel').style.fontSize='5rem';
document.querySelector('#myLabel').style.display='flex';
document.querySelector('#myLabel').style.justifyContent='center';



function update(){
    let date7 = new Date();
    myLabel1.innerHTML = formatTime(date7);
    

    function formatTime(date7){
        let hours = date7.getHours();
        let minutes = date7.getMinutes();
        let seconds = date7.getSeconds();
        let amOrPm = hours>=12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);    
        minutes = formatZeroes(minutes);    
        seconds = formatZeroes(seconds);    

        return `${hours}:${minutes}:${seconds} ${amOrPm}`    
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? '0'+time : time;
    }
}

update();
setInterval(update, 1000);


