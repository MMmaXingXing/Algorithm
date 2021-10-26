/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const newList = new ListNode();
    let result = newList;
    while ((l1 && !isNaN(l1.val)) || (l2 && !isNaN(l2.val))) {
        console.log(!isNaN(l1.val));
        console.log(!isNaN(l2.val));
        const sum = (l1.val || 0) + (l2.val || 0) + (result.val || 0);

        if (sum >= 10) {
            result.val = sum % 10;
            result.next = new ListNode(1);
        } else {
            result.val = sum;
        }

        if ((l1.next || l2.next) && !result.next) {
            result.next = new ListNode();
        }

        l1 = l1.next || {};
        l2 = l2.next || {};
        result = result.next;
    }

    return newList;
};
// @lc code=end
