/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// map版本
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    const mapper = new Map();
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA) {
        mapper.set(nodeA, nodeA);
        nodeA = nodeA.next;
    }

    while (nodeB) {
        if (mapper.get(nodeB)) {
            return nodeB;
        }
        nodeB = nodeB.next;
    }

    return null;
};
// @lc code=end
