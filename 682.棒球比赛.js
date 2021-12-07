/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const stack = [];
    for (let i = 0; i < ops.length; i++) {
        const len = stack.length;
        switch (ops[i]) {
            case "C":
                stack.pop();
                break;
            case "D":
                stack.push(stack[len - 1] * 2);
                break;
            case "+":
                const num = stack[len - 1] + stack[len - 2];
                stack.push(num);
                break;
            default:
                stack.push(Number(ops[i], 10));
                break;
        }
    }
    return stack.reduce((total, next) => {
        return total + next;
    });
};
// @lc code=end
