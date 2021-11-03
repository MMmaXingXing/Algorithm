/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  let temp, minIndex;
  for (let i = 0; i < len - 1; i++) {
    temp = nums[i];
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
};
// @lc code=end
