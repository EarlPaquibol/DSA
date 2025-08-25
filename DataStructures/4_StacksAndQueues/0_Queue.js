class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        console.log(this.first);
    }

    // Earl --> Pablo ---> Jose
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++;
    }

    // Earl --> Pablo ---> Jose
    dequeue(){
        if (!this.first) return null;
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) this.last = null;
    }

    printQueue(){
        let arr = [];
        let currentNode = this.first;
        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

const myQueue = new Queue();
myQueue.enqueue("Earl");
myQueue.enqueue("Pablo");
myQueue.enqueue("Jose");
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.printQueue();