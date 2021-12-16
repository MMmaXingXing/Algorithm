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
var __levelOrder = (root, res, index) => {
  if (!root) return;
  res[index] ? res[index].push(root.val) : (res[index] = [root.val]);
  let newIndex = index + 1;
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i]) {
      __levelOrder(root.children[i], res, newIndex);
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
  __levelOrder(root, ans, 0);
  return ans;
};
// @lc code=end
