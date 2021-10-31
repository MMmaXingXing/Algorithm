/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;

    const mapper = new Map();
    let currentNode = head.next;

    while (currentNode) {
        if (mapper.has(currentNode)) {
            return true;
        } else {
            mapper.set(currentNode, currentNode);
        }
        currentNode = currentNode.next;
    }

    return false;
};
// @lc code=end
