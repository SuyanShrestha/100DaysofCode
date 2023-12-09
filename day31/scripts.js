// Manipulating and Changing styles of html elements with DOM

document.querySelector('h1').style.background = 'black';
document.querySelector('h1').style.color = 'goldenrod';

document.querySelector('h1').style.fontSize = '3rem';   // number vayeni specify it as a string unlike js.

document.querySelector('h1').innerHTML = 'ShristiSuyan';

// Seperation of concern structure vs Style cs Behaviour
document.querySelector('button').classList;
// adding a class
document.querySelector('button').classList.add('invisible');
// removing a class
document.querySelector('button').classList.remove('invisible');
// toggle (remove if already in, and add if not in)
document.querySelector('button').classList.toggle('invisible');

document.querySelector('button').classList.remove('invisible');

// document.querySelector('h1').classList.toggle('huge');


// Text Manipulation and Text content
document.querySelector('button').innerHTML;   
// doesnt just give the text content but the whole innerHTML along with tags

document.querySelector('button').innerHTML = '<em>Click&Join</em>';

// text content use
document.querySelector('button').textContent;
document.querySelector('button').textContent = 'Click Now!';

// Manipulating HTML attributes
document.querySelector('a');
document.querySelector('a').attributes;
// get the attribute
document.querySelector('a').getAttribute('href');
// change the attribute
document.querySelector('a').setAttribute('href','https://www.fb.com');

document.querySelector('h1');
document.querySelector('h1').attributes;
document.querySelector('h1').getAttribute('id');
document.querySelector('h1').setAttribute('id', 'main-heading');
document.querySelector('h1').getAttribute('id');

// q1. append text to a title
const hamroTitle = document.querySelector('#main-heading');
console.dir(hamroTitle);
hamroTitle.innerText;
hamroTitle.innerText = hamroTitle.innerText + 'KojuShrestha';
hamroTitle.innerText;
const newText = 'Hehehe';
hamroTitle.innerText.concat(newText);      
 // huna chahi hunxa but doesnt bring any changes, so assign
hamroTitle = hamroTitle.innerText.concat(newText);


// q2. making 3 divs and accessing each of them personally
document.querySelector('div').classList;
document.querySelector('.container-box').classList;
document.querySelectorAll('.box');

document.querySelectorAll('.box')[0].style.background = 'aquamarine';
document.querySelectorAll('.box')[1].style.background = 'goldenrod';
document.querySelectorAll('.box')[2].style.background = 'lightblue';

document.querySelectorAll('.box')[0].innerText = 'Suyan';
document.querySelectorAll('.box')[1].innerText = 'Shristi';
document.querySelectorAll('.box')[2].innerText = 'Console';