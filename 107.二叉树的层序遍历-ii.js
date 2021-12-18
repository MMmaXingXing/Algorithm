/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
const __levelOrderButton = (root, res, index) => {
    if (!root) return;
    res[index] ? res[index].push(root.val) : (res[index] = [root.val]);
    __levelOrderButton(root.left, res, index + 1);
    __levelOrderButton(root.right, res, index + 1);
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = [];
    __levelOrderButton(root, res, 0);
    for (let i = 0, j = res.length - 1; i < j; i++, j--) {
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
    }

    return res;
};
// @lc code=end
