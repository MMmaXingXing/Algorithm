/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// 通过链表思维来处理相关结构
class TreeNode {
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
    this.pre = n;
    return;
  };

  insert_next = (n) => {
    n.pre = this;
    n.next = this.next;
    if (this.next) this.next.pre = n;
    this.next = n;
    return;
  };

  delete_pre = () => {
    if (!this.pre) return;
    const p = this.pre;
    this.pre = p.pre;
    if (p.pre) p.pre.next = this;
    return;
  };

  delete_next = () => {
    if (!this.next) return;
    const p = this.next;
    this.next = p.next;
    if (p.next) {
      p.next.pre = this;
    }
    return;
  };
}

// 链表实现双端队列
class DeQueue {
  constructor() {
    // 虚拟头&虚拟尾
    this.head = new TreeNode();
    this.tail = new TreeNode();
    this.head.next = this.tail;
    this.head.pre = null;
    this.tail.next = null;
    this.tail.pre = this.head;
    this.count = 0;
  }

  // 虚拟尾部节点前面插入新元素
  pushBack = (val) => {
    this.tail.insert_pre(new TreeNode(val));
    this.count += 1;
  };

  // 虚拟头部节点插入新的对象
  pushFront = (val) => {
    this.head.insert_next(new TreeNode(val));
    this.count += 1;
  };

  popBack = () => {
    if (this.isEmpty()) return;
    const ret = this.tail.pre.val;
    this.tail.delete_pre();
    this.count -= 1;
    return ret;
  };

  popFront = () => {
    if (this.isEmpty()) return;
    const ret = this.head.next.val;
    this.head.delete_next();
    this.count -= 1;
    return ret;
  };

  isEmpty = () => {
    return this.head.next === this.tail;
  };

  size = () => {
    return this.count;
  };

  front = () => {
    return this.head.next.val;
  };

  back = () => {
    return this.tail.pre.val;
  };
}

class FrontMiddleBackQueue {
  constructor() {
    this.q1 = new DeQueue();
    this.q2 = new DeQueue();
  }

  // 两个双端队列 Q1 Q2
  // @lc code=start
  /**
   * @param {number} val
   * @return {void}
   */
  pushFront = (val) => {
    this.q1.pushFront(val);
    this.update();
    return;
  };

  /**
   * @param {number} val
   * @return {void}
   */
  pushBack = (val) => {
    this.q2.pushBack(val);
    this.update();
    return;
  };

  /**
   * @param {number} val
   * @return {void}
   *
   */
  pushMiddle = (val) => {
    if (this.q1.size() > this.q2.size()) {
      this.q2.pushFront(this.q1.popBack());
    }

    this.q1.pushBack(val);
    this.update();
    return;
  };

  /**
   * @return {number}
   */
  popFront = () => {
    if (this.isEmpty()) return -1;
    const ret = this.q1.popFront();
    this.update();
    return ret;
  };

  /**
   * @return {number}
   */
  popBack = () => {
    if (this.isEmpty()) return -1;
    let ret;
    if (this.q2.isEmpty()) {
      ret = this.q1.popBack();
    } else {
      ret = this.q2.popBack();
    }
    this.update();
    return ret;
  };

  /**
   * @return {number}
   */
  popMiddle = () => {
    if (this.isEmpty()) return -1;
    const ret = this.q1.popBack();
    this.update();
    return ret;
  };

  isEmpty = () => {
    return this.q1.size() + this.q2.size() === 0;
  };

  update = () => {
    // 更新元素数量，Q1奇数，偶数均分
    if (this.q1.size() < this.q2.size()) {
      this.q1.pushBack(this.q2.popFront());
    }

    if (this.q1.size() === this.q2.size() + 2) {
      this.q2.pushFront(this.q1.popBack());
    }
  };
}
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
