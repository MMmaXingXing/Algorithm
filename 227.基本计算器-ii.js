/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let str = s.replace(/\s*/g, "");
  const stack = [0];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === "-") {
        stack.push(`${str[i]}${str[i + 1]}`);
      } else {
        stack.push(str[i]);
      }
    }
    switch (str[i]) {
      case "+":
        stack.push(str[i + 1]);
        break;
      case "-":
        stack.push(-str[i + 1]);
        break;
      case "*":
        stack.push(stack.pop() * str[i + 1]);
        break;
      case "/":
        stack.push(parseInt(stack.pop() / str[i + 1], 10));
        break;
    }
  }
  const result = stack.reduce((prev, next) => prev * 1 + next * 1);
  return result;
};
// @lc code=end
