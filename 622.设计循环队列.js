/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.list = new Array(k);
  this.head = 0; // 头指针
  this.tail = 0; // 尾指针
  this.count = 0; // 元素数量
  this.max = k;
};

/**
 * @description 入队
 * @param ∫{number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.list[this.tail] = value;
  this.count += 1; // 多了一个元素
  this.tail = (this.tail + 1) % this.max; // 尾指针更新
  return true;
};

/**
 * @description 出队
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.list[this.head] = null;
  this.head = (this.head + 1) % this.max;
  this.count -= 1;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.list[this.head]; // 返回顶部元素
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  //   if (tail === 0) {
  //     tail = this.max - 1;
  //   } else {
  //     tail -= 1;
  //   }

  return this.list[(this.tail - 1 + this.max) % this.max];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.max;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
