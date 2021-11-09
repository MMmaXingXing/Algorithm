/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let n = 0;
  let p = head;
  while (p) {
    n++;
    p = p.next;
  }
  let count = n - k;
  let ret = head;
  while (count) {
    ret = ret.next;
    count--;
  }
  return ret.val;
};
