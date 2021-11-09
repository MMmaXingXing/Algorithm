/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  let ret = new ListNode(0, head);
  let p = ret;
  while (p.next) {
    if (p.next && p.next.next && p.next.val === p.next.next.val) {
      let next = p.next;
      while (
        next.next &&
        next.next.next &&
        next.next.val === next.next.next.val
      ) {
        next = next.next;
      }
      p.next = next.next.next;
    } else {
      p = p.next;
    }
  }
  return ret.next;
};
// @lc code=end
