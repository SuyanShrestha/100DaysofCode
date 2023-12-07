// ATTRIBUTES

let div = document.querySelector('div');
console.log(div);

let id = div.getAttribute('id');
console.log(id);

let name = div.getAttribute('name');
console.log(name);

let para = document.querySelector('p');
console.log(para.getAttribute('class'));
--
para.setAttribute('class', 'shristikoclass');
console.log(para.getAttribute('shristikoclass'));

// STYLES 

div = document.querySelector('div');
div.style;
div.style.borderRadius = '3rem';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.margin = '2rem 4rem';

div.style.height = '12rem';
div.style.width = '32rem';
div.style.innerText = 'ShristiSuyan'

// INSERT ELEMENTS
let clickBtn = document.createElement('button');
clickBtn.innerText = 'Append Button';
clickBtn;
// this element created in DOM must be now inserted.

// append (adds at end of node - inside)
div = document.querySelector('div');
div.append(clickBtn);

// prepend (adds at start of node - inside)
let clickBtn2 = document.createElement('button');
clickBtn2.innerText = 'prepend button';
div.prepend(clickBtn2);
clickBtn2.style.backgroundColor = 'goldenrod';

// before (adds before the node - outside)
let clickBtn3 = document.createElement('button');
clickBtn3.innerText = 'before button';
div.prepend(clickBtn3);
clickBtn3.style.backgroundColor = 'blue';
clickBtn3.style.color = 'white';

// after (adds after the node - outside)
let clickBtn4 = document.createElement('button');
clickBtn4.innerText = 'after button';
div.prepend(clickBtn4);
clickBtn4.style.backgroundColor = 'blue';
clickBtn4.style.color = 'white';


// DELETING NODES FROM TREE
para = document.querySelector('p');
para.remove();


// PRACTICE QUESTIONS

// Q1. Create a new button with innertext, bgcxolor red, text white and insert it as first element inside body

let q1btn = document.createElement('button');
q1btn.innerText = 'Click Me!';
q1btn.style.backgroundColor = 'red';
q1btn.style.color = 'white';

