const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            node.next = null;
        }
        this.length++;
        return this;
    }

    head() {
        return (this._head) ? this._head.data : null;
    }

    tail() {
        return (this._tail) ? this._tail.data : null;
    }

    at(index) {
        if (index === 0) {
            return this._head.data;
        } else {
            let current = this._head;
            for (let i = 1; i <= index; i++) {
                current = current.next;
            }
            return current.data;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        if(index === 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            let current = this._head;
            for (let i = 1; i <= index; i++) {
                current = current.next;
            }
            node.prev = current.prev;
            current.prev.next = node;
            node.next = current;
            current.prev = node
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this._head === null && this._tail === null) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this._head.next.prev = null;
            this._head = this._head.next;
            if (length === 1) {
                this._tail = null;
            }
            this.length--;
            return this;
        } else if (index === this.length) {
            this._tail.prev.next = null;
            this._tail = this._tail.prev;
            this.length--;
            return this;
        } else {
            let current = this._head;
            for (let i = 1; i <= index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
            return this;
        }
    }

    reverse() {
        if (this.length === 1) {
            return this;
        }
        let current = this._head;
        let previousNode = null;
        while (current !== null) {
            let nextNode = current.next;
            current.next = previousNode;
            current.prev = nextNode;
            previousNode = current;
            current = nextNode;
        }
        this._tail = this._head
        this._head = previousNode;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        if (!this.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
