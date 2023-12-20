let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#reset-btn');

// turn is play X and player O
let turn0 = true; // player0 ko turn

// use 2D arrays for combinations and patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
    [3,4,5],
    [6,7,8]
];

// add event listener for each box
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
    });
});