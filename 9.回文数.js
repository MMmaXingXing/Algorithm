/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const str = x.toString();
  const list = str.split("");
  if (str === list.reverse().join("")) return true;
  return false;
};
// @lc code=end
