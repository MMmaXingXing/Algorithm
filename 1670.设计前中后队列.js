/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// 通过链表思维来处理相关结构
class TreeNode {
  val;
  next;
  pre;
  constructor(val, next, pre) {
    this.val = val;
    this.next = next;
    this.pre = pre;
  }

  insert_pre = (n) => {
    n.pre = this.pre;
    n.next = this;
    if (this.pre) {
      this.pre.next = n;
    }
  };

  insert_next = (n) => {
    this.next = n;
  };
}

// 虚拟头节点、虚拟尾节点
// @lc code=start
var FrontMiddleBackQueue = function () {
  this.head = new TreeNode();
  this.tail = new TreeNode();
  this.head.next = this.tail;
  this.head.pre = null;
  this.tail.next = null;
  this.tail.pre = this.head;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
