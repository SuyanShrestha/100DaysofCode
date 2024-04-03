// string deko hunxa s vanni, yesko last word ko length return garni
// if last word doesnt exist, just return 0

let s = "Hello World";

const lengthOfLastWord = function (s) {
  // aba last word exist nai gardaina vani
  if (s.length == 0) {
    return 0;
  }

  let sArray = s.trim().split(" ");
  //   console.log(lastWord);
  return sArray[sArray.length - 1].length;
};

console.log(lengthOfLastWord(s));

// first maa chahi any word nai exist garxa ki nai ni herni vayo, gardaina vane ta simly return 0
// aba if words exist garxa vane, string lai paila .split() lagayera array banauna milyo
// aba agadi paxadi ko whitespace le ni seperate gardina sakxa, testo nahos vanerw .trim() ni launi

// aba sArray maa whole string lai whitespace anusar xutayeko hamle payeko xam
// teslai chahi last element find garxa total length minus 1 garey pugihalyo
// now since we have access to last element of array, we can simply return the length of that element, thus getting the length of last word
