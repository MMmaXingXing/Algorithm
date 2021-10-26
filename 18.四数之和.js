/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const numList = nums.sort((a, b) => a - b);
    const results = [];

    const findNum = (nums, target, N, tempList, result) => {
        const len = nums.length;
        if (len < N || N < 2) return;
        if (N === 2) {
            l = 0;
            r = len - 1;
            while (l < r) {
                if (nums[l] + nums[r] === target) {
                    result = result.concat([nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l - 1]) {
                        l += 1;
                    }

                    while (r > l && nums[r] === nums[r + 1]) {
                        r -= 1;
                    }
                } else if (nums[l] + nums[r] < target) {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                if (i === 0 || (i > 0 && nums[i - 1] != nums[i])) {
                    const insertList = nums.slice(i + 1, len + 1);
                    findNum(
                        insertList,
                        target - nums[i],
                        N - 1,
                        [...tempList, nums[i]],
                        result
                    );
                }
            }
        }
    };
    findNum(numList, target, 4, [], results);
    console.log(results);
    return results;
};
// @lc code=end
