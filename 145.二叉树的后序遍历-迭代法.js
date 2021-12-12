/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    const ans = [];
    const s1 = []; // 递归中的值
    const s2 = []; // 程序状态

    s1.push(root);
    s2.push(0);

    while (!(s1.length === 0)) {
        const status = s2.pop();
        const len = s1.length;
        switch (status) {
            case 0:
                s2.push(1);
                const left = s1[len - 1].left;
                if (left) {
                    s1.push(left);
                    s2.push(0);
                }
                break;
            case 1:
                s2.push(2);
                const right = s1[len - 1].right;
                if (right) {
                    s1.push(right);
                    s2.push(0);
                }
                break;
            case 2:
                ans.push(s1.pop().val);
                break;
        }
    }

    return ans;
};
// @lc code=end
