/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const reverseN = (head, k) => {
    let p = head;
    const cnt = k;
    // 判断当前节点够不够k个节点
    while (--k && p) p = p.next;
    if (!p) return head;
    return __reverseN(head, cnt);
  };

  const __reverseN = (head, k) => {
    if (k === 1) return head;
    // 翻转后的尾节点
    let tail = head.next;
    // 翻转后的头结点
    let p = __reverseN(head.next, k - 1);
    head.next = tail.next;
    tail.next = head;
    return p;
  };

  if (!head || !head.next) return head;
  const k = 2;
  let res = new ListNode(0, head);
  let p = res;
  let q = p.next;

  while ((p.next = reverseN(q, k))) {
    p = q;
    q = q.next;
  }
  return res.next;
};
// @lc code=end
