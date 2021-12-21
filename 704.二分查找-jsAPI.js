/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let cnt = 0;
    if (!nums.includes(target)) return -1;
    nums.forEach((item, index) => {
        if (item === target) cnt = index;
    });
    return cnt;
};
// @lc code=end
