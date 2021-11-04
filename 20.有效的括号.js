/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean
 */
var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
  ]);
  const arr = s.split("");
  const len = arr.length;
  const stack = [];
  if (len <= 1) return false;
  for (let i = 0; i < len; i++) {
    if (map.has(arr[i])) {
      stack.unshift(arr[i]);
    } else {
      const left = stack[0];
      if (map.get(left) === arr[i]) {
        stack.shift();
      } else {
        return false;
      }
    }
    if (i === len - 1 && stack.length === 0) return true;
    if (i === len - 1 && stack.length != 0) return false;
  }
};
// @lc code=end
