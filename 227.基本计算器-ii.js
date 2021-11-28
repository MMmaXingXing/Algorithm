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
    const stack = [];
    let newNum = 0;
    let preSign = "+";
    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (!isNaN(Number(str[i]))) {
            newNum = newNum * 10 + Number(str[i]);
        }
        if (isNaN(Number(str[i])) || i === len - 1) {
            switch (preSign) {
                case "+":
                    stack.push(newNum);
                    break;
                case "-":
                    stack.push(-newNum);
                    break;
                case "*":
                    stack.push(stack.pop() * newNum);
                    break;
                default:
                    stack.push(parseInt(stack.pop() / newNum, 10));
                    break;
            }
            preSign = str[i];
            newNum = 0;
        }
    }
    const result = stack.reduce((prev, next) => prev * 1 + next * 1);
    return result;
};
// @lc code=end
