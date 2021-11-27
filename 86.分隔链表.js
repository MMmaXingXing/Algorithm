/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let smallHead = new ListNode(0);
    let bigHead = new ListNode(0);
    let smallTail = smallHead;
    let bigTail = bigHead;
    let cycleNext = head;
    let copyHead;

    while (cycleNext) {
        copyHead = cycleNext.next;
        if (cycleNext.val < x) {
            cycleNext.next = smallTail.next;
            smallTail.next = cycleNext;
            smallTail = cycleNext;
        } else {
            cycleNext.next = bigTail.next;
            bigTail.next = cycleNext;
            bigTail = cycleNext;
        }
        cycleNext = copyHead;
    }

    smallTail.next = bigHead.next;
    return smallHead.next;
};
// @lc code=end
