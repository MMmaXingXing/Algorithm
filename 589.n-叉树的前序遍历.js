/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

var __preOrder = (root, ans) => {
  if (!root.val) return;
  ans.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    if (root.children[i]) {
      __preOrder(root.children[i], ans);
    }
  }
  return;
};

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = [];
  __preOrder(root, ans);
  return ans;
};
// @lc code=end
