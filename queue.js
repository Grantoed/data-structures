class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
// console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// console.log(queue.size());
queue.print();
