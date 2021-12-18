/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
const __zigzagLevelOrder = (root, res, index) => {
    if (!root) return;
    res[index] ? res[index].push(root.val) : (res[index] = [root.val]);
    __zigzagLevelOrder(root.left, res, index + 1);
    __zigzagLevelOrder(root.right, res, index + 1);
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let res = [];
    __zigzagLevelOrder(root, res, 0);
    for (let i = 1; i < res.length; i += 2) {
        res[i] = res[i].reverse();
    }

    return res;
};
// @lc code=end
