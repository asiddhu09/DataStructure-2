class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }


    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    deleteAtIndex(index) {
        if (index >= this.length || index < 0) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let prevNode = null;
            let i = 0;
            while (i < index) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            prevNode.next = currentNode.next;
        }
        this.length--;
    }

    insertAtIndex(data, index) {
        if (index > this.length || index < 0) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let currentNode = this.head;
        let prevNode = null;
        let i = 0;
        while (i < index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
    }
    reverse() {
        let prevNode = null;
        let currentNode = this.head;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }
}

const linkedList = new LinkedList();

// Append node to linked li
linkedList.append(10);
linkedList.append(20);
linkedList.append(100);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.prepend(5);

linkedList.traverse();
linkedList.deleteAtIndex(2);
linkedList.insertAtIndex(25, 2);
linkedList.reverse()
linkedList.traverse();