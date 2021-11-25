/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const mapper = new Map();
  let newNum = n;
  let sum = 0;
  while (newNum) {
    if (newNum === 0 && sum !== 1) {
      if (mapper.has(sum)) {
        return false;
      } else {
        mapper.set(sum, true);
      }
      newNum = sum;
    }
    newNum = Number(newNum % 10);
    console.log(newNum);
    sum += Number(newNum);
  }
  return sum === 1;
};
// @lc code=end
