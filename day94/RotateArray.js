// k rotations in array
// input : [1, 2, 3, 4, 5], k = 3
// output : [3, 4, 5, 1, 2]

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;

// Approach 1 (mero wala)
const rotateArray = (nums, k) => {
  newArray = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    newArray.push(nums[i]);
  }
  console.log(newArray);

  for (let i = 0; i < k / 2; i++) {
    let temp = newArray[i];
    newArray[i] = newArray[k - i - 1];
    newArray[k - i - 1] = temp;
  }
  console.log(newArray);

  for (let i = k; i < (newArray.length + k) / 2; i++) {
    let temp = newArray[i];
    newArray[i] = newArray[newArray.length - i + k - 1];
    newArray[newArray.length - i + k - 1] = temp;
  }
  console.log(newArray);
};

rotateArray(nums, k);

// first maa whole total reverse gardini
// ani tespaxi first k ota numbers lai reverse handini
// ani feri baki ko numbers lai reverse handini

// -------------------------------------------------------------------
// Approach 2 (leetcode ko wala, same thing ho tarw better code)

console.log("APPROACH 2 ---------------------------------------");
nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;

const reverseArray = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
};

// yeta reverse func use garni jasle chahi aba first argument = array nums, second argument = start index, third argument = end index
const rotateArray2 = (nums, k) => {
  // k vanda sano ta nums.length vo vane start ra end nikalnai alter hunxa
  k = k % nums.length;
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);

  return nums;
};

console.log(rotateArray2(nums, k));

// yesma ni tei concept ho, first maa whole reverse, then reverse first k elemenets, then baki ko reverse
// rotateArray2 maa aba k vanda sano nums.length nahos vanerw k % nums.length gareko
// ani yesmai multiple reverse haru chahini vayera yesari function banayerw gariyo
// aba reverseArray maa start ra end le ta nums array ko kun point bata kun point samma reverse garni vanerw vanxa
// start chahi end vanda sano huwunjel kaam garnu paryo, ani simple swapping logic
// yesma swap garda chahi first element ra last element swap, ani feri second ra second-last, and so on.
// aba first ra last ko sakexi second ra secondlast ni janu paryo, tei vara chahi aba yesma ni ==start ra end lai ++ ra -- respectively.
