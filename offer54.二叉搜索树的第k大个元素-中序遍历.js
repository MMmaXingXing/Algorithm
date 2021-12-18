/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const in_order = (root, ans = []) => {
    if (!root) return;
    in_order(root.left, ans);
    ans.push(root.val);
    in_order(root.right, ans);
    return;
};
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let ans = [];
    in_order(root, ans);
    return ans[ans.length - k];
};
