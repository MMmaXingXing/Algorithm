/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let str = s.replace(/[\s()]*/g, "");
    const len = str.length;
    const stack = [1];
    let sign = 1;
    let i = 0;
    let result = 0;

    while (i < len) {
        if (str[i] === "+") {
            sign = stack[stack.length - 1];
            i++;
        } else if (str[i] === "-") {
            sign = -stack[stack.length - 1];
            i++;
        } else if (str[i] === "(") {
            stack.push(sign);
            i++;
        } else if (str[i] === ")") {
            stack.pop();
            i++;
        } else {
            console.log(stack);
            let num = 0;
            while (i < len && !isNaN(Number(str[i]))) {
                num = num * 10 + Number(str[i]);
                i++;
            }
            result += sign * num;
        }
    }

    return result;
};
// @lc code=end
