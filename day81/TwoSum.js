// Given array bata chahi yesari 2 taa number lera sum garnu paryo ki summ will be equal to target number.
// eutai number kai repeat garerw sum garxu vanna chahi paudaina.
// ani answer maa chahi return indices of those two numbers

// nums = [2, 7, 9, 11], target = 9
// Output: [0, 1] or [1,0] j vayeni vo

let nums = [2, 7, 9, 11];
let target = 11;

const twoSum = (nums, target) => {
  const map = new Map();
  for (const index in nums) {
    const pairTarget = target - nums[index];
    if (map.has(pairTarget)) return [index, map.get(pairTarget)];
    map.set(nums[index], index);
  }
};

console.log(twoSum(nums, target));

// yesma chahi basically k vo vanda kheri first maa euta map banayo
// aba harek number ko lagi for loop garda, target minus tyo number garni
// if map maa tyo number xa vane return garxa index of that number and index of that number in map
// else chahi tyo map maa map.set le rakhdinxa

// aba next time kunai point maa ta pairtarget ko value ra map maa vako value match hunxa ni ta , ani tespaxi chahi nhamilai answer return garni vayo
