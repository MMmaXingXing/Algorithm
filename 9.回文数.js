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
    if (x < 0 || (x % 10 === 0 && x > 0)) return false;
    let revertNumber = 0;
    while (x > revertNumber) {
        revertNumber = revertNumber * 10 + (x % 10);
        x = Math.floor(x / 10);
        console.log(x);
    }

    if (x === revertNumber || x === Math.floor(revertNumber / 10)) return true;
    return false;
};
// @lc code=end
