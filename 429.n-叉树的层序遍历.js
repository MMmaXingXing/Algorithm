/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
var __levelOrder = (root, ans) => {
  if (!root.val) return;
  ans.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i]) {
      __levelOrder(root.children[i], ans);
    }
  }
  return;
};
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  __levelOrder(root, ans);
  return ans;
};
// @lc code=end
