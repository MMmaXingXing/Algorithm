/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const __reverseN = (head, n) => {
    if (n === 1) return head;
    let tail = head.next;
    const p = __reverseN(head.next, n - 1);
    head.next = tail.next;
    tail.next = head;
    return p;
};

const reverseN = (head, n) => {
    let prev = head;
    const count = n;
    while (--n) prev = prev ? prev.next : null;
    if (!prev) return head;
    return __reverseN(head, count);
};

var reverseKGroup = function (head, k) {
    let ret = new ListNode(0, head);
    let prev = ret,
        nextNode = ret.next;
    while ((prev.next = reverseN(nextNode, k)) != nextNode) {
        prev = nextNode;
        nextNode = prev.next;
    }

    return ret.next;
};
// @lc code=end
