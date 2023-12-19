let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer= document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let countX = 0;
let countO = 0;
let scoreX = document.querySelector('#score1');
let scoreO = document.querySelector('#score2');

// turn is play X and player O
let turn0 = true; // player0 ko turn

// use 2D arrays for combinations and patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


// reset game
const resetGame = () => {
    console.log('game reset')
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}


// add event listener for each box
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        box.style.backgroundColor = 'yellow';
        box.style.transform = 'rotateX(360deg)';
        // box.style.transition = 'all 1s';
        box.style.transition = 'transform 0.4s';
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// msgContainer.classList.add('hide');
console.log(boxes);
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};

const showWinner = (winner) => {
    console.log(msg); 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    // msgContainer.style.transition = 'all 1s';
    disableBoxes();
    
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner', pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);