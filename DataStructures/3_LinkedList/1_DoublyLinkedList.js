class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //LinkedList = 10
    //I want to append 5
    // 10-->5
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    //LinkedList = 10
    //I want to prepend 5
    // 5-->10
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head= newNode;
        this.length++;
    }

    //LinkedList = 10-->5
    //I want to insert at index 1 the value 7
    // 5-->7-->10
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
        }
        if (index >= this.length) {
            this.append(value);
        }
        let counter = 0;
        let currentNode = this.head;

        //index-1 to get the node before the wanted index
        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        //         H
        // cN  nN  cN.n
        // 5-->7-->10
        const newNode = new Node(value);
        //new code
        const holder = currentNode.next;
        holder.prev = newNode;
        newNode.prev = currentNode;
        newNode.next = holder;
        //end new code
        currentNode.next = newNode;
        this.length++;
    }

    remove(index) {
        let counter = 0;
        let currentNode = this.head;

        if (index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return;
        }
        //get the node before the targeted node again
        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        //say remove 7, so index = 1
        // cn  nr cn.n
        // 5-->7-->10
        const nodeToRemove = currentNode.next;
        currentNode.next = nodeToRemove.next;
        //new code here
        const holder = currentNode.next;
        holder.prev = currentNode;
        //end code here

        if (index === this.length - 1) {
            this.tail = currentNode;
        }
        this.length--;
    }

    printList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(arr);
    }

    //index = 1, value 2
    //1-->10-->3
}


const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.prepend(5);
myDoublyLinkedList.insert(1, 7);
myDoublyLinkedList.printList();
console.log(myDoublyLinkedList);