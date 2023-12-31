    // document.querySelector('button').addEventListener('click', clickButton);
    // if clickbutton() halya vaye parameter maa, then function chahi instant call hunxa 
    // instead we pass a function as an input yesari brackets narakhi kana


    // for(let i = 0; i<document.querySelectorAll('.drum').length; i++){
    //     document.querySelectorAll('button')[i].addEventListener('click', clickButton);

    // }

    // function clickButton(){
    //     // alert('I got clicked!');
    //     let audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    // } 


// DETECTING BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for(let i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        let buttonInnerHTML = this.innerHTML;
        pressLocate(buttonInnerHTML);

        beatAnimation(buttonInnerHTML);
    });   
        
}


// LOCATE WHAT WAS PRESSED
function pressLocate(keyPressed){
    switch (keyPressed){
        case 'W':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'A':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'S':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'D':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'J':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'K':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'L':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

// USING KEYBOARD
document.addEventListener('keypress', function(event){
    // console.log(event);
    let key = event.key.toUpperCase();
    // console.log(key);
    pressLocate(key);

    beatAnimation(key);
});


function beatAnimation(thisKey){
    let pressedButton = document.querySelector('.' + thisKey);
    console.log(pressedButton.classList);
    pressedButton.classList.add('pressed');

    setTimeout(function(){
        pressedButton.classList.remove('pressed');
    }, 200);
}