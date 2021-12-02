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
    if (x < 0 || (x % 10 === 0) & (x > 0)) return false;
    let newNum = 0;
    while (x > newNum) {
        newNum = newNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === newNum || x === Math.floor(newNum / 10);
};
// @lc code=end
