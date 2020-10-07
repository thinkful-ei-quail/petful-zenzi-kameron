class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.last = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (!this.first) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.last = null;
    if (node == this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    if (!this.first) return null;
    return this.first.value;
  }

  all() {
    let currentNode = this.first;
    let results = [];
    while (currentNode !== null) {
      results.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return results;
  }
}

module.exports = Queue;
