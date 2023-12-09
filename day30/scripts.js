// declaring class 

class myProduct{
    constructor(itemName, price, discount, productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil = new myProduct('Nataraj pencil', 20, 2, 'P10');
let eraser = new myProduct('DOMS eraser', 10, 5, 'E20');

console.log(pencil, eraser);


const Product2 = class Product2 {
    constructor(name, expiry, productcode){
        this.name = name;
        this.expiry = expiry;
        this.productCode = productcode;
    }
};

const fakeproduct2 = new Product2('kurmure', 22, 'k28');
console.log(fakeproduct2);
console.log(typeof fakeproduct2);
console.log(typeof Product2);

// getter and setter
const newProduct = class {

    constructor(name, price, discount){
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    
    get getChangeName(){
        return this.name;        
    }
    set setChangeName(value){
        this.name = value;
    }

    // methods
    discountValue(){
        return this.discount*this.price/100;
    }
};


console.log(newProduct);
let newP1 = new  newProduct('Suyan', 334, 2);
console.log(newP1);
newP1.setChangeName = 'banana';
newP1.getChangeName;
console.log(newP1);


// DOM

document;
document.firstChild;
document.firstElementChild;
document.firstElementChild.firstElementChild
document.firstElementChild.lastElementChild;
document.firstElementChild.lastElementChild.firstElementChild;

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = 'Shristi';
heading.style.color = 'blue';

// DOM Manipulation
document.getElementsByTagName('li');
document.getElementsByTagName('li')[2].style.color='green';   // since li is an array of listed items, direct color set garna mildaina
document.getElementsByTagName('li').length;

document.getElementsByClassName('clickMe')[0].style.color = 'yellow';
// even if there is only a single element, idnexing is a must

document.getElementById('title').style.background='black';
document.getElementById('title').innerHTML = 'ShristiSuyan';


// query selector can select anything unlike previous
document.querySelector('h1');
document.querySelector('#title');
document.querySelector('.clickMe');

document.querySelector('li a');
document.querySelector('li .item');

document.querySelector('ul .item');     // only returns the first  one that matches condition
document.querySelectorAll('ul .item');      // returns all that match condition
document.querySelectorAll('ul .item')[1].style.color = 'white';
document.querySelectorAll('ul .item')[1].style.background = '#333';

document.querySelector('.jsDay').innerHTML = 'jsDay11';