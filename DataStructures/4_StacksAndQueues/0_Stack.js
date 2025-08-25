class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class StackList {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        console.log(this.top);
    }

    //facebook
    //youtube this.top
    //google
    //udemy
    push(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    //facebook this.top
    //youtube
    //google
    //udemy
    pop(){
        if (!this.top){
            return null;
        }
        if (this.length === 0){
            this.bottom = null;
        }
        const nodeToRemove = this.top;
        this.top = nodeToRemove.next;
        this.length--;
    }

    isEmpty(){
        return this.length;
    }
}

const myStack = new StackList();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.peek();
// myStack.pop();
// myStack.peek();


class StackArray {
    constructor(){
        this.data = [];
    }

    peek(){
        console.log(this.data[this.data.length-1]);
    }

    push(value){
        this.data.push(value);
        this.data.length++;
    }

    pop(){
        this.data.pop();
        this.data.length--;
    }
}

const myStackArray = new StackArray();
myStackArray.push(10);
myStackArray.push(1);
myStackArray.push(2);
myStackArray.peek();
myStackArray.pop();
myStackArray.peek();
