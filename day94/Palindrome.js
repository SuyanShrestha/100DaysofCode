let inputStr = "madam";
inputStr = inputStr.toLocaleLowerCase();

// for finding reverse of string
const reverseFunc = (str) => {
  let s = str.trim().split("");
  let rev = [];

  for (i = s.length - 1; i >= 0; i--) {
    rev.push(s[i]);
  }

  return rev.join("");
};

// for finding palindrome
const findPalindrome = (str) => {
  // simply reverse wala lagauda ni hunxa yesari
  //   let reverseStr = str.split("").reverse().join("");

  // tara ma chahi aba aafnai reverse string ni use garxu
  let reverseStr = reverseFunc(str);
  // console.log(reverseStr);

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
};

if (findPalindrome(inputStr)) {
  console.log(`${inputStr} is palindrome in nature`);
} else {
  console.log(`${inputStr} is not palindrome in nature`);
}
