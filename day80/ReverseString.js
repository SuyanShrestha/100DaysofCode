// string deko hunxa, teslai chahi aba reverse garnu paryo

s = "Suyan";

const reverseString = (s) => {
  // first of all change the string to array elements.
  let str = s.trim().split("");

  // yo chahi naya array ko lagi
  let backward = [];

  // aba loop garnu paryo first array ko chahi last bata, ani harek last item lai naya backward array ko first maa haldai jani
  for (let i = str.length - 1; i >= 0; i--) {
    backward.push(str[i]);
  }

  // aba feri hamilai chahi array ko elements lai string maa convert garnu paryo
  return backward.join('');
};

console.log(reverseString(s));


// yesma s.trim().split() le chahi string lai arraymaa lagyo
// ani backward vanni naya array banayo
// aba loop gardai original array lai last bata process gardaai backward maa chahi push handai gayo
// finally hami sanga backward ko ni euta array chahi aauxa
// aba simply .join() use garyo vane default mode anusar, seperated by commas hunxa elements chahi, so not a string
// thus .join(' ') garyo vane elements haru lai with no characters in between, le seperate garera string maa convert garxa