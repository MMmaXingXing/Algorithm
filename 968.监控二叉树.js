/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const getDp = (root, dp) => {
    if (!root) {
        dp[0][0] = 0;
        dp[0][1] = 10000;
        dp[1][0] = 0;
        dp[1][1] = 10000;
        return;
    }

    if (!root.left && !root.rught) {
        dp[0][0] = 10000;
        dp[1][0] = 0;
        dp[1][1] = 1;
        dp[0][1] = 1;
        return;
    }

    const l = [[], []],
        r = [[], []];
    getDp(root.left, l);
    getDp(root.right, r);
    dp[0][0] = Math.min(
        Math.min(l[0][1] + r[0][0], l[0][0] + r[0][1]),
        l[0][1] + r[0][1]
    );
    dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0]);
    dp[0][1] =
        Math.min(
            Math.min(l[1][0] + r[1][0], l[1][1] + r[1][1]),
            Math.min(l[1][0] + r[1][1], l[1][1] + r[1][0])
        ) + 1;
    dp[1][1] = dp[0][1];
    return;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
    const dp = [[], []];
    getDp(root, dp);
    return Math.min(dp[0][1], dp[0][0]);
};
// @lc code=end
