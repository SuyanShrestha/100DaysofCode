// DEBOUNCING AND THROTTLING

// debouncing limits execution of a function call and waits for a certain amount of time before running it again.
// jastai ki 400ms ko interval set garyo vane, 400ms vanda muni time liyo vane ta function call huni vayena, tara yedi 400ms vanda badhi time liyo one click paxi arko click garna vane function call huncha.

// throttling limits the execution of a function to a certain amount of time, and waits for that time to pass before running it again.
// Throttling limits the execution of your code to once in every specified time interval

// Debouncing is useful when you want to delay the execution of your code until the user stops performing a certain action. For example, you can use debouncing for autocomplete, where you want to wait for the user to stop typing before fetching suggestions from the backend. Debouncing can reduce the number of times your code is executed, but it can also introduce some latency in your user interface.

// Throttling is useful when you want to limit the execution of your code to a certain frequency. For example, you can use throttling for resize, where you want to update the layout of your page at a fixed rate. Throttling can improve the responsiveness of your user interface, but it can also cause some loss of information or accuracy in your code.

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");
const count2 = document.querySelector(".throttle-count");
const time = document.querySelector(".time");
const searchInput = document.querySelector(".searchInput");

var pressedCount = 0;
var triggerCount = 0;
var triggerCount2 = 0;

const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

const start = new Date().getTime();

const throttledCount = _.throttle(() => {
  const now = new Date().getTime();
  time.innerHTML = `Time Difference: ${now - start}`;

  count2.innerHTML = ++triggerCount2;
}, 1000);

// DEBOUNCE POLYFILL
const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCount2 = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

// THROTTLE POLYFILL
const myThrottle = () => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  // count.innerHTML = ++triggerCount;
  debouncedCount();
  // debouncedCount2();
  throttledCount();
});
