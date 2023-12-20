// EVENTS

// onclick event
function clickMe(){
    alert('you clicked me');
}

const btn1 = document.querySelector('#btn');
btn1.onclick = clickMe;

const btn2 = document.querySelector('#btn2');
btn2.onclick = consoleClick;

function consoleClick() {
    let count = 0;
    let timer1 = setInterval(function(){
        count+=1;
        console.log(count);
        if(count>=5){
            clearInterval(timer1);
        }
    }, 1000);
}

// onload event
let element2 = document.body;
element2.onload = loadMessage;
function loadMessage(){
    alert('Warm welcome! this is an onload msg');
}

//  onchange event
const element3 = document.querySelector('#txt1');
element3.onchange = textChange;
function textChange(){
    element3.style.backgroundColor = 'green';
    element3.style.color = 'white';
    element3.style.width = '10rem';
    element3.style.height = '2rem';
    element3.style.transition = '1s';
}

// onmouseover event
const element4 = document.querySelector('.container1');
element4.onmouseover = mouseChangeOver;
element4.onmouseout = mouseChangeOut;
element4.onmousedown = mouseChangeDown;
element4.onmouseup = mouseChangeUp;
element4.style.transition = '1s';

function mouseChangeOver(){
    element4.style.backgroundColor = 'lightgreen';
    element4.style.color = 'black';
    element4.innerText = 'onmouseOVER';
}

function mouseChangeOut(){
    element4.style.backgroundColor = 'goldenrod';
    element4.style.color = 'white';
    element4.innerText = 'onmouseOUT';
}

function mouseChangeDown(){
    element4.style.backgroundColor = 'red';
    element4.style.color = 'aqua';
    element4.innerText = 'onmouseDOWN';
}

function mouseChangeUp(){
    element4.style.backgroundColor = 'black';
    element4.style.color = 'white';
    element4.innerText = 'onmouseUP';
}


// ASYNCHRONOUS 
// synchronous -> ordered seq of step by step linear instruction // start now finish now
// asynchronous -> out of sequence // start now finish sometime later

console.log('Start');
console.log('This is synchronous');
console.log('End');

console.log('Start');
setTimeout(() => console.log('This is asynchronous'), 3000);
console.log('End');



// PROMISES
// object that encapsulates result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// 'I promise to return smth in future'


const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;    // resolve
    // fileLoaded = false;    // reject
    if(fileLoaded){
        resolve('File Loaded');
    }
    else{
        reject('file not loaded');
    }

});


// The state is pending, then: fulfilled or rejected
// result is what can be reutrned
// 2 parts: consuming and producing
promise.then(value => console.log(value))
       .catch(error => console.log(error));

       
// example2 on promise
const promise2 = new Promise(resolve =>{
    setTimeout(resolve,7000);
    console.log('just 7 seconds');
});
promise2.then(() => console.log('Thanks for being here'));

// optimized example2
const wait = time => new Promise(resolve =>{
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log('Thanks for waiting'));
// yesma time chahi parameter huni vo arrow function ko, ani 300 chahi pass gareko argument



// ASYNC KEYWORD = makes a function return a promise
async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded){
        return 'File Loaded';
    }
    else{
        throw 'File not loaded';
    }
}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));

// Another way of writing same func can be 
// function loadFile(){
//     let fileLoaded = false;
//     if(fileLoaded){
//         return Promise.resolve('File Loaded');
//     }
//     else{
//         return promise.resolve('File not loaded');
//     }
// }



// AWAIT KEYWORD 
// makes a async function wait for a function
async function loadFile(){
    let fileLoaded = true;
    if(fileLoaded){
        return 'File Loaded';
    }
    else{
        throw 'File not loaded';
    }
}

async function startProcess(){
    try{
        let message = await loadFile();     // await gareko lai euta variable maa assign garni
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();

// await chahi async function ko vitra matra use garna milxa, so yeta loadFile vanni async function ko await lai arko async function startProcess maa haleko

// aba await use garyo vane then, ra catch use gariranu parena
// then, wala condition ta easily await le dihalxa, tarw catch wala condition garda results diyeni error ni sathsathai throw gardinxa, tei nahos vanerw try catch use gardini
