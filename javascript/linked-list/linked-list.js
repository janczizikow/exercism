class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.next = next || null;
    this.previous = previous || null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const tail = this.tail;
      node.previous = tail;
      tail.next = node;

      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return null;

    const tail = this.tail;
    this.tail = tail.previous;
    if (!this.tail) this.head = this.tail;

    this.length--;

    return tail.value;
  }

  shift() {
    if (!this.head) return null;

    const head = this.head;
    this.head = head.next;
    if (!this.head) this.tail = this.head;

    this.length--;

    return head.value;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const head = this.head;
      head.previous = node;
      node.next = head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  delete(value) {
    let currentNode = this.head;
    let nodeToDelete;

    while (currentNode) {
      if (currentNode.value === value) {
        nodeToDelete = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    if (nodeToDelete) {
      const prev = nodeToDelete.previous;
      const next = nodeToDelete.next;

      if (!this.head.next && !this.tail.previous) {
        // deleting from LinkedList where there's only 1 node
        this.head = null;
        this.tail = null;
      } else if (!prev) {
        // deleting head
        this.head = next;
        next.previous = null;
      } else if (!next) {
        // deleting tail
        this.tail = prev;
        prev.next = null;
      } else {
        prev.next = next;
        next.previous = prev;
      }

      this.length--;
    }

    return this;
  }

  count() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
    // eslint-disable-next-line no-unreachable
    return this.length; // easy peasy
  }
}
