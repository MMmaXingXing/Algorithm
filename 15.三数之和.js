/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length;
    let res = [];
    if (len <= 2) return res;
    const newList = nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r -= 1;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l += 1;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) {
                    l += 1;
                }

                while (r > l && nums[r] === nums[r - 1]) {
                    r -= 1;
                }
                l += 1;
                r -= 1;
            }
        }
    }
    return res;
};
// @lc code=end
