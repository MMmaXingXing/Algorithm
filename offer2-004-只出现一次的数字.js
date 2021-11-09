/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const mapper = new Map();
  nums.forEach((num) => {
    if (mapper.get(num)) {
      mapper.set(num, mapper.get(num) + 1);
    } else {
      mapper.set(num, 1);
    }
  });

  for (let i = 0; i < nums.length; i++) {
    if (mapper.get(nums[i]) === 1) return nums[i];
  }
};
