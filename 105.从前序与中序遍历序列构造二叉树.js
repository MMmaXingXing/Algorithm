/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    let pos = 0;
    while (inorder[pos] !== preorder[0]) ++pos;
    let l_pre = [],
        l_in = [],
        r_pre = [],
        r_in = [];

    for (let i = 0; i < pos; i++) {
        l_pre.push(preorder[i + 1]);
        l_in.push(inorder[i]);
    }

    for (let i = pos + 1; i < preorder.length; i++) {
        r_pre.push(preorder[i]);
        r_in.push(inorder[i]);
    }

    const root = new TreeNode(preorder[0]);
    root.left = buildTree(l_pre, l_in);
    root.right = buildTree(r_pre, r_in);
    return root;
};
// @lc code=end
