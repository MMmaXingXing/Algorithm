/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stackIn = [];
    this.stackOut = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.prepare();
    return this.stackOut.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.prepare();
    return this.stackOut[this.stackOut.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stackIn.length && !this.stackOut.length;
};

MyQueue.prototype.prepare = function () {
    if (!this.stackOut.length) {
        while (this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
