/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const reverseN = (node, n) => {
        if (n === 1) return node;
        let tail = node.next;
        const p = reverseN(node.next, n - 1);
        node.next = tail.next;
        tail.next = node;
        return p;
    };
    const count = right - left + 1;
    let ret = new ListNode(0, head);
    let p = ret;
    while (--left) p = p.next;
    p.next = reverseN(p.next, count);
    return ret.next;
};
// @lc code=end
