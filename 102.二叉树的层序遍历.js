/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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

const __levelOrder = (root, res, index) => {
  if (!root) return;
  res[index] ? res[index].push(root.val) : (res[index] = [root.val]);
  const newIndex = index + 1;
  __levelOrder(root.left, res, newIndex);
  __levelOrder(root.right, res, newIndex);
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  __levelOrder(root, res, 0);
  return res;
};
// @lc code=end
