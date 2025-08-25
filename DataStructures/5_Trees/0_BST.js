class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return newNode;
        }
        //logic starts here
        let tempRoot = this.root;
        //traverse
        while (true) {
            if (newNode.value < tempRoot.value) {
                if (tempRoot.left === null) {
                    tempRoot.left = newNode;
                    return;
                }
                tempRoot = tempRoot.left;
            } else {
                if (tempRoot.right === null) {
                    tempRoot.right = newNode;
                    return;
                }
                tempRoot = tempRoot.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let tempRoot = this.root;
        while (tempRoot) {
            if (value < tempRoot.value) {
                tempRoot = tempRoot.left;
            } else if (value > tempRoot.value) {
                tempRoot = tempRoot.right;
            } else {
                return tempRoot;
            }
        }
        return false;
    }

    remove(value) {
        //if there is no root
        if (!this.root) {
            return false;
        }
        //if root has left and right null
        if (this.root.left === null && this.root.right === null) {
            this.root = null;
            return this.root;
        }
        let currentNode = this.root;
        let parentNode;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                break;
            }
        }

        //If current node has no child
        if (currentNode.left === null && currentNode.right === null) {
            if (value < parentNode.value) {
                parentNode.left = null;
            } else {
                parentNode.right = null;
            }
        }

        //If currentNode has one child
        if (currentNode.right === null) {
            if (value < parentNode.value) {
                parentNode.left = currentNode.left;
            } else {
                parentNode.right = currentNode.left;
            }
            return true;
        } else if (currentNode.left === null) {
            if (value < parentNode.value) {
                parentNode.left = currentNode.right;
            } else {
                parentNode.right = currentNode.right;
            }
            return true;
            // If currentNode has two children
        } else {
            let tempNode = currentNode.right;
            if (tempNode.left === null) {
                if (value < parentNode.value) {
                    tempNode.left = currentNode.left;
                    parentNode.left = tempNode;
                } else {
                    tempNode.left = currentNode.left;
                    parentNode.right = tempNode;
                }
                return true;
            } else {
                let xNode = tempNode.left;
                let xNodeParent;
                while (xNode.left !== null) {
                    xNodeParent = xNode;
                    xNode = xNode.left;
                }
                if (value < parentNode.value) {
                    parentNode.left = xNode;
                    if (xNode.right !== null) {
                        xNodeParent.left = xNode.right;
                    } else {
                        xNodeParent.left = null;
                    }
                    xNode.right = currentNode.right;
                    xNode.left = currentNode.left;
                } else {
                    parentNode.right = xNode;
                    if (xNode.right !== null) {
                        xNodeParent.left = xNode.right;
                    } else {
                        xNodeParent.left = null;
                    }
                    xNode.right = currentNode.right;
                    xNode.left = currentNode.left;
                }
            }
        }
    }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(120);
console.log(tree.lookup(4));
