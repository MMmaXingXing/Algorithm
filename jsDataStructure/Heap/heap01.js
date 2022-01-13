class Heap {
  data = [];
  count = 0; // 堆中元素数量

  // 为堆追加元素
  push = (x) => {
    this.data[this.count++] = x;

    //向上调整
    // let idx = this.count;
    this.shift_up(this.count - 1);
  };

  // 从堆中弹出元素 根节点与最后一个节点互换
  pop = () => {
    if (this.size() === 0) return;
    this.data[0] = this.data[this.count - 1];
    this.count -= 1;

    // 从第0位开始向下调整
    // let idx = 0;
    this.shift_down(0);
    return;
  };

  //实现一个向上调整的方法，传入需要向上调整的元素的下标
  shift_up = (idx) => {
    //f父节点推算子节点
    // f节点的左孩子是 f * 2 + 1, f * 2 + 2
    // c1，c2节点的父节点是 c1 + 1 - 1 / 2 , (c2 + 2 - 1) / 2 向下取整
    while (idx && this.data[Math.floor((idx - 1) / 2)] < this.data[idx]) {
      const t = this.data[idx];
      this.data[idx] = this.data[Math.floor((idx - 1) / 2)];
      this.data[Math.floor((idx - 1) / 2)] = t;
      idx = Math.floor((idx - 1) / 2);
    }
  };

  shift_down = (idx) => {
    // 最大子节点下标
    let n = this.count - 1;
    while (idx * 2 + 1 <= n) {
      const temp = idx;
      if (data[temp] < this.data[idx * 2 + 1]) {
        temp = idx * 2 + 1;
      }
      if (idx * 2 + 2 <= n && this.data[temp] < this.data[idx * 2 + 2])
        temp = idx * 2 + 2;
      if (temp === idx) break;
      const t = this.data[idx];
      this.data[idx] = this.data[temp];
      this.data[temp] = t;
      // 最终更新idx向下走
      idx = temp;
    }
    return;
  };

  // 查看堆顶元素
  top = () => {
    return this.data[this.count];
  };

  // 返回堆的大小
  size = () => {
    return this.count;
  };
}
