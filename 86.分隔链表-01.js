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
  let smallHead = new ListNode(0, null);
  let bigHead = new ListNode(0, null);
  let smallTail = smallHead;
  let bigTail = bigHead;
  let p = head;
  let q;
  while (p) {
    q = p.next;
    if (p.val < x) {
      p.next = smallTail.next;
      smallTail.next = p;
      smallTail = p;
    } else {
      p.next = bigTail.next;
      bigTail.next = p;
      bigTail = p;
    }
    p = q;
  }
  smallTail.next = bigHead.next;
  return smallHead.next;
};
// @lc code=end
