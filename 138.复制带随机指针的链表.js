/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head;
    let p = head;
    let q;
    // 将每个节点单独复制一份
    while (p) {
        q = new Node(p.val);
        q.random = p.random;
        q.next = p.next;
        p.next = q;
        p = q.next;
    }

    // 修正每个节点的random指针域
    p = head.next;
    while (p) {
        if (p.random) p.random = p.random.next;
        (p = p.next) && (p = p.next);
    }

    // 拆分成两个独立的子链表（设置两个虚拟头节点）
    let new_head = head.next;
    p = head;
    while (p) {
        q = p.next;
        p.next = q.next;
        if (p.next) q.next = p.next.next;
        p = p.next;
    }

    return new_head;
};
// @lc code=end
