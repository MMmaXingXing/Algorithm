// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你不需要 保留 每个分区中各节点的初始相对位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
