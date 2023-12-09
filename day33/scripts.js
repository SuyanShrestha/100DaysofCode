// document.querySelector('button').addEventListener('click', clickButton);
// if clickbutton() halya vaye parameter maa, then function chahi instant call hunxa 
// instead we pass a function as an input yesari brackets narakhi kana


for(let i = 0; i<document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', clickButton);

}

function clickButton(){
    // alert('I got clicked!');
    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}