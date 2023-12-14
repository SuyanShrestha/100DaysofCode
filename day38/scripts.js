// // ES6 MODULES

// // modules are simply files of reusable code
// // we can import sections of prewritten code whenever
// // great for general utility values and functions
// // code more resuable and maintainable

// // import {pi, getCircumference, getArea} from "./math_util.js";
// // console.log(pi);
// import * as MathUtil from "./math_util.js";

// console.log(MathUtil.pi);
// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);
// let area = MathUtil.getArea(20);
// console.log(area);

// // ES6 modules are subject to same-origin policy. You need to run your script from a local server, opening the file directly with a browser will not work.


// ANIMATIONS

const btn1 = document.getElementById('btn1');
const myAnimation = document.getElementById('myDiv');
btn1.addEventListener('click', begin);

function begin(){
    let timerId = null;
    let x=0;
    let y=0;

    timerId = setInterval(frame, 5);
    function frame(){
        if(x>=648 || y>=480){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myAnimation.style.left = x + 'px';
            myAnimation.style.top = y + 'px';
        }
    }
}


const btn2 = document.getElementById('btn2');
const myRotate = document.getElementById('myDiv');
btn2.addEventListener('click', rotateDiv);

function rotateDiv(){
    let timerId = null;
    let degrees = 0;
    timerId = setInterval(frame, 5);
    function frame(){
        if(degrees>=360){
            clearInterval(timerId);
        }
        else{
            degrees+=1;
            myRotate.style.transform = 'rotateZ('+degrees+'deg)';
            myRotate.style.borderRadius = "3rem";
        }
    }
}

const btn3 = document.getElementById('btn3');
const myScaleUp = document.getElementById('myDiv');
btn3.addEventListener('click', scaleDiv);

function scaleDiv(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;
    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX>=2 || scaleY>=2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myScaleUp.style.transform = 'scale('+scaleX+','+scaleY+')';
        }
    }
}

const btn4 = document.getElementById('btn4');
const myScaleDown = document.getElementById('myDiv');
btn4.addEventListener('click', scaleDownDiv);

function scaleDownDiv(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;
    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX<=0.1 || scaleY<=0.1){
            clearInterval(timerId);
        }
        else{
            scaleX -= 0.01;
            scaleY -= 0.01;
            myScaleDown.style.transform = 'scale('+scaleX+','+scaleY+')';
        }
    }
}

// use keyboard presses for respective animations
const myDiv = document.getElementById('myDiv');
window.addEventListener('keydown',move);
let x=0;
let y=0;
myDiv.style.transition = 'all 1s';
function move(event){
    switch(event.key){
        case 'ArrowDown':
            y+=200;
            myDiv.style.top = y + 'px';
            break;
        case 'ArrowUp':
            y-=200;
            myDiv.style.top = y + 'px';
            break;
        case 'ArrowRight':
            x+=200;
            myDiv.style.left = x + 'px';
            break;
        case 'ArrowLeft':
            x-=200;
            myDiv.style.left = x + 'px';
            break;
        case 's':
            begin();
            break;
        case 'x':
            rotateDiv();
            break;
        case 'c':
            scaleDiv();
            break;
        case 'v':
            scaleDownDiv();
            break;
    }
}


// CANVAS
// canvas api = a means for drawing graphics used for animations, games, data visualization etc.

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0,0);        // origin of brush
context.lineTo(200,300);       // kaa samma banauni, canvas size vanda thulo diyo vane just canvas ko size maa jati atxa teti matra dinxa
context.lineTo(250,100);
context.lineTo(250,400);
// take new origin now
context.moveTo(400,0);
context.lineTo(250,400);
context.lineTo(30,350);
context.lineTo(0,0);
context.lineWidth = 10;
context.strokeStyle = 'blue';
context.fillStyle = 'yellow';
context.fill();
context.stroke();            // draw gardinxa

// draw a triangle in canvas
let canvas2 = document.getElementById('myCanvas2');
let context2 = canvas2.getContext('2d');

context2.beginPath();
context2.strokeStyle = 'red';
context2.lineWidth = 10;
context2.moveTo(100,300);
context2.lineTo(200,100);
context2.lineTo(300,300);
context2.lineTo(100,300);

context2.moveTo(100,150);
context2.lineTo(200,350);
context2.lineTo(300,150);
context2.lineTo(100,150);

context2.stroke();

// draw a rectangle
let canvas3 = document.getElementById('myCanvas3');
let context3 = canvas3.getContext('2d');
// context3.beginPath();
context3.strokeStyle = 'blue';   
context3.strokeRect(0,0, 250,250);    // starting point is 0,0... and width=250, height=250
context3.fillStyle = 'goldenrod'; 
context3.fillRect(0,0,200,200);


context3.strokeStyle = 'purple';            // style must be before dimensions
context3.strokeRect(0, 250, 300,150);
context3.fillStyle = 'yellow';
context3.fillRect(0,250,300,200); 

context3.strokeStyle = 'green';      
context3.strokeRect(250, 0, 150,250);
context3.fillStyle = 'skyblue';
context3.fillRect(250,0,150,250); 

context3.strokeStyle = 'blue';      
context3.strokeRect(300, 250, 100,150);
context3.fillStyle = 'grey';
context3.fillRect(300, 250, 100,150); 


// HOISTING
// phenomenon in js by which we can access functions or variables even before we initialize it

console.log(hoistx);
var hoistx = 7;
getHoist();
function getHoist(){
    console.log('can be accessed before ini9tialization');
}

// even before code is executed, memory is allocated beforehand for each variable. 
// not defined vanya aba decalre nai garya xaina vane first mai memory ni allocate vako huni vayena
// undefined vanya, aba first maa "var hoistx = 7;" garda hoistx lai variable vanerw memory ta allocate gardeko hunxa, tarw still 7 chahi assign garna tei line mai janu parxa, so just agadi memory allocate garda undefined vako huni vara yesto auxa

console.log(getName2);          // stil undefined nai auni vo
var getName2 = function() {
    // statement
}
