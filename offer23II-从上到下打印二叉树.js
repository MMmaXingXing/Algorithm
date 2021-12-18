/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const __levelOrder = (root, res, index) => {
    if (!root) return;
    res[index] ? res[index].push(root.val) : (res[index] = [root.val]);
    __levelOrder(root.left, res, index + 1);
    __levelOrder(root.right, res, index + 1);
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
