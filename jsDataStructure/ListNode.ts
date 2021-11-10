class ListNodeItem {
  value: any;
  next: ListNodeItem | null;

  constructor(value?: any) {
    this.value = value;
    this.next = null;
  }
}

class ListNode {
  head: ListNodeItem;
  end: ListNodeItem;

  constructor(value?: any) {
    this.head = new ListNodeItem(value);
    this.end = this.head;
  }

  add = (value: any) => {
    this.end.next = new ListNodeItem(value);
    this.end = this.end.next;
  };

  find = (item: any): ListNodeItem | null => {
    let currentNode: ListNodeItem | null = this.head;
    while (currentNode?.value !== item && currentNode) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  findPrevious = (item: any): ListNodeItem | null => {
    let prevNode: ListNodeItem | null = this.head;
    while (prevNode?.next && prevNode?.next.value !== item) {
      prevNode = prevNode.next;
    }
    return prevNode;
  };

  remove = (item: any) => {
    let currentNode = this.findPrevious(item);
    if (currentNode?.next) {
      currentNode.next = currentNode.next.next;
      if (!currentNode.next) this.end = currentNode;
    }
  };

  insert = (newItem: any, item: any) => {
    const currentNode = this.find(item);
    const newNode = new ListNodeItem(newItem);
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      if (!newNode.next) this.end = newNode;
    }
  };

  print = () => {
    let currNode: ListNodeItem | null = this.head;
    while (currNode && currNode.value) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  };
}

// 测试代码
const nodeList = new ListNode(1);
nodeList.add(2);
nodeList.add(3);
nodeList.insert(4, 2);
nodeList.insert(5, 4);
nodeList.remove(5);
nodeList.insert(6, 3);
nodeList.print();
