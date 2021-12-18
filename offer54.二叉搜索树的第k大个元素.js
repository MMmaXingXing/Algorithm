/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const getCount = (root) => {
    if (!root) return 0;
    return getCount(root.left) + getCount(root.right) + 1;
};
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let cnt_r = getCount(root.right);
    if (k <= cnt_r) return kthLargest(root.right, k);
    if (k == cnt_r + 1) return root.val;
    return kthLargest(root.left, k - cnt_r - 1);
};
