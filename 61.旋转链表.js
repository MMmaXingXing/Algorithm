/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
  let p = head;
  if (!head || !head.next) return head;
  let n = 1;

  while (p.next) {
    p = p.next;
    n++;
  }

  p.next = head;
  let add = n - (k % n);

  while (add) {
    p = p.next;
    add--;
  }
  const ret = p.next;
  p.next = null;
  return ret;
};
// @lc code=end
