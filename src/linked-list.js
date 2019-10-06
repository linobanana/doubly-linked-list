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
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
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
    }

    isEmpty() {
        if (this._head === null && this._tail === null) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        let current = this._head;
        while (this.length) {
            current.next.prev = null;
            current.prev.next = null;
            current = current.next;
            this.length--;
        }
        console.log(current);
    }

    deleteAt(index) {

    }

    reverse() {

    }

    indexOf(data) {

    }
}

module.exports = LinkedList;
