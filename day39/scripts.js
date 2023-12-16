// BOM (BROWSER OBJECT MODEL)
// allows js to talk to brwoser


// window = interface used to talk to web browser 
            // DOM is property of the window

console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.scrollX);            // how far has been scrolled X
console.log(window.scrollY);            // how far has been scrolled Y

console.log(window.location.href);      // changing href property
// window.location.href = 'https://www.google.com';   // redirects to google
console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector('#mybtn');
myButton.addEventListener('click', ()=>window.open('https://www.google.com'));
// myButton.addEventListener('click', ()=>window.close());      // closes current window

const myButton2 = document.querySelector('#mybtn2');
myButton2.addEventListener('mouseover', () => window.print());

// window.alert('SuyanShristi');
// window.confirm('Press OK to continue!'); 
// let age = window.prompt('Enter your age!');
// if(age<18){
//     window.alert('You must be 18+ to visit this website. Go watch yt kids lil niga');
//     window.close();
//     window.open('https://www.youtubekids.com/');
// }


// COOKIES
// small txt file stored in our computer used to remember information about user saved in name=value pairs

// to check if cookies are enabled
console.log(navigator.cookieEnabled);

// adding a cookie
document.cookie = 'firstname=Suyan;', expires=''



// SCREEN
const demo1 = document.querySelector('#demo1');
demo1.innerText = 'Screen width is ' + screen.width + ' and screen height is ' + screen.height;
console.log(demo1);

const demo2 = document.querySelector('#demo2');
demo2.innerText = 'Available width is ' + screen.availWidth + ' and available height is '+ screen.availHeight;
console.log(demo2);

const demo3 = document.querySelector('#demo3');
demo3.innerText = 'Screen color depth is: ' +screen.colorDepth;
console.log(demo3);

const demo4 = document.querySelector('#demo4');
demo4.innerText = 'Screen pixel depth is: ' +screen.pixelDepth;
console.log(demo4);


// LOCATION
// i tried this feature on "https://www.facebook.com/" console
// window.location.hostname;           // www.facebook.com
// window.location.pathname;           // '/'
// window.location.protocol;           // 'https:'
// window.location.port;               // ''

// location assign
function loadW3(){
    window.location.assign('https://www.w3schools.com');
}


// JS HISTORY
// window.history object contains the browsers history.

// history.back() method loads the previous URL in the history list.
function goBack(){
    window.history.back();
}
// history.forward() method loads the next URL in the history list.
function goForward(){
    window.history.forward();
}

const buttons = document.querySelectorAll("button");
console.log(buttons);
for(let i=0; i<buttons.length; i++){
    let buttons2 = buttons[i];
    buttons2.addEventListener('mouseenter', () =>{
        // console.log(buttons);
        buttons2.style.backgroundColor = 'aqua';
    });
    buttons2.addEventListener('mouseleave', () =>{
        // console.log(buttons);
        buttons2.style.backgroundColor = 'white';
    });
}
function goHover(){
    buttons.style.transform = 'rotate(15deg)';
}


// NAVIGATOR
// contains information about the visitor's browser.
// following codes were tested on console of ms-edge

// navigator.cookieEnabled      // true
// navigator.appName            // 'Netscape'
// navigator.appCodeName        // 'Mozilla'
// navigator.product            // 'Gecko'

// navigator.appVersion         // '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
// navigator.userAgent          // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
// navigator.platform           // 'Win32'

// navigator.language           // 'en-US'
// navigator.onLine             // true
// navigator.javaEnabled        // false


// linebreaks inside a popup box
// alert('Hello \n My name is Suyan Shristi')



// TIMING EVENTS

// setTimeout
const timeBtn = document.querySelector('#mybtn6');
const timeBtn2 = document.querySelector('#mybtn7');

timeBtn.addEventListener('click', () => {
    timeBtn.innerText = 'Wait for three seconds';
    // activate timeout
    const timer1 = setTimeout(() => {
        alert('So this is the example of setTimeout');
    },3000);

    // clearTimeout
    timeBtn2.addEventListener('click', () =>{
        clearTimeout(timer1);
    });
})


// setInterval
const timeBtn3 = document.querySelector('#mybtn8');
const timeBtn4 = document.querySelector('#mybtn9');

timeBtn3.addEventListener('click', ()=> {
    const timer2 = setInterval(() => {
        const date = new Date();
        timeBtn3.innerHTML = date.toLocaleTimeString();
    },1000);

    timeBtn4.innerText = 'Click to stop clock';
    timeBtn4.addEventListener('click', () => {
        clearInterval(timer2);
        timeBtn3.innerText = 'Click to begin the clock again';
    });
});



// COOKIES
// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
// so cookies are data stored in small text files on computer

// Response.AddHeader("Set-Cookie", "CookieName=CookieValue; path=/;");
// Response.SetCookie(new HttpCookie("session-id") { Value = Guid.NewGuid().ToString(), HttpOnly = false });
// Response.SetCookie(new HttpCookie("user-name") { Value = data.Login, HttpOnly = false });

document.cookie = "firstName=Shristi Koju; expires=Mon, 18 Dec 2050 12:00:00 UTC; path=/";
document.cookie = "lastName=Suyan Shrestha; expires=Mon, 18 Dec 2050 12:00:00 UTC; path=/";

console.log(document.cookie);

// function for creating cookies
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive*24*60*60*1000);
    let expires = 'expires='+date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

setCookie('email', 'shrsitisuyan@gmail.com', 365);

// function for deleting cookies
function deleteCookie(name){
    setCookie(name, null, null);
}

deleteCookie(firstName);
deleteCookie(lastName);

// function for getting cookie
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    // console.log(cDecoded);
    const cArray = cDecoded.split('; ');
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result.element.substring(name.length + 1)
        }
    })
    return result;

}

setCookie('student1', 'Shristi', 365);
setCookie('student2', 'Suyan', 365);