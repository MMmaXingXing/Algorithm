/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    let ans = 0;
    let q = [];
    q.push([root, 0]);
    while (q.length !== 0) {
        let len = q.length;
        let l = q[0][1],
            r = q[0][1];
        for (let i = 0; i < len; i++) {
            const n = q[0][0];
            const index = q[0][1];
            r = index;
            if (n.left) q.push([n.left, (index - l) * 2]);
            if (n.right) q.push([n.right, (index - l) * 2 + 1]);
            q.shift();
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
// @lc code=end
