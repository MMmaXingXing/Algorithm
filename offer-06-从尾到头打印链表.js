/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return [];
  let arr = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  arr.reverse();
  return arr;
};
