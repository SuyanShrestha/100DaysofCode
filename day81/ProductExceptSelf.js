// input -> nums = [1, 2, 3, 4]
// output -> [24, 12, 8, 6]

// Approach 1 ( mero wala )
nums = [1, 2, 3, 4];

const findProduct = (nums) => {
  let finalnums = [];
  let nums2 = [];

  for (const index in nums) {
    nums2 = nums.filter((value, i) => i != index);
    //   console.log(nums2);

    let product = 1;
    for (const i in nums2) {
      product *= nums2[i];
    }

    // console.log(product);
    finalnums.push(product);
  }

  return finalnums;
};

console.log(findProduct(nums));


// --------------------------------------------------------
// Approach 2 ( yt wala )

const findProduct2 = (nums) => {
  const n = nums.length;

  // nums kai size ko array banauni, initially chahi 0 value rakherw
  const left = Array(n).fill(0)
  const right = Array(n).fill(0);
  const output = Array(n).fill(0);

  // aba left maa kei xaina vane ta algo anusar mutiply garna lai nai kei hunna ni ta, so first and last item nums maa j j xa tei huni vo
  left[0] = nums[0]
  right[n - 1] = nums[n - 1]

  // left maa multiply garna lai
  // left[0] = nums[0] vaisakeko vara i = 1 bata start gareko
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i]
  }

  // aba right ko paalo ez
  for (let i=n-2 ; i>0 ; i--){
    // second last ko value find garna "last of right array" * "second last of nums" hunxa ni ta, tei vara i+1
    right[i] = right[i+1] * nums[i]
  }

  // output array

  output[0] = right[1]
  output[n-1] = left[n-2]
  
  // aba tyo point ko immediate left ra immediate right lai multiply garni
  for (let i = 1; i< n-1; i++){
    output[i] = left[i-1] * right[i+1]
  }
}