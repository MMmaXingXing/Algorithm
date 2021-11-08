/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let listNode = new ListNode(0, head);
  let start = listNode;
  let end = head;
  while (n--) end = end.next;
  while (end) {
    end = end.next;
    start = start.next;
  }
  start.next = start.next.next;
  return listNode.next;
};
// @lc code=end
