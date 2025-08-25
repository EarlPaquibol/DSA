// 10-->5-->16

// let linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        // const newNode = {
        //     value: value,
        //     next: this.head
        // }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        //if index === 0
        if (index === 0) {
            this.prepend(value);
            return;
        }

        //if index is out of bounds
        if (index >= this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let currentNode = this.head;
        let counter = 0;

        //traverse till before the index
        while (counter < index - 1) {
            currentNode = currentNode.next;
            counter++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return;
    }

    remove(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== (index - 1)) {
            currentNode = currentNode.next;
            counter++;
        };
        const nodeToRemove = currentNode.next;
        currentNode.next = nodeToRemove.next;

        //If index to remove is equal to the length of the array
        if (index === this.length - 1) {
            this.tail = currentNode;
        }
        this.length--;
    }

    //my try
    reverse() {
        // 1-->10-->5-->16
        this.printList();
        let arr = [];
        let currentNode = this.head;
        let counter = 0;

        while (counter !== this.length) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
            counter++;
        }

        let reverseArr = [];

        for (let i = counter - 1; i >= 0; i--) {
            reverseArr.push(arr[i]);
        }

        this.head = new Node(reverseArr[reverseArr.length - 1]);
        this.tail = this.head;
        this.length = 0;

        let counterTwo = 0;
        while (counterTwo !== reverseArr.length) {
            this.append(reverseArr[counterTwo])
            counterTwo++;
        }

        return reverseArr;
    }

    //efficient reversal
    reverseEff() {
        this.printList();
        if (!this.head.next) {
            return this.head;
        }

        // cn.  nn.         
        // 1-->10-->5-->16
        let prev = null;
        let currentNode = this.head;
        this.tail = this.head;

        while (currentNode){
            const nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
        }
        
        this.head = prev;
        
        return this.printList();
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
}
// 1-->10-->5-->16
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 6);
// myLinkedList.remove(1);
// console.log(myLinkedList);
console.log(myLinkedList.reverseEff());