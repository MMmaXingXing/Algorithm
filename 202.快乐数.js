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
    while (newNum || sum !== 1) {
        if (newNum === 0 && sum !== 1) {
            if (mapper.has(sum)) {
                return false;
            } else {
                mapper.set(sum, true);
            }
            newNum = sum;
            sum = 0;
        }
        sum = Number(sum) + Number(newNum % 10) * Number(newNum % 10);
        newNum = Math.floor(newNum / 10);
    }
    return sum === 1;
};
// @lc code=end
