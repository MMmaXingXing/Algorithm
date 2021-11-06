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
    let preNode = head;
    let nextNode = head.next;
    while (preNode !== nextNode) {
        if (!nextNode || !nextNode.next) return false;
        preNode = preNode.next;
        nextNode = nextNode.next.next;
    }

    return true;
};
// @lc code=end
