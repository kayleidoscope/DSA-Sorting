class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertCycle(item, otherNode) {
        if (this.head === null) {
            throw new Error()
        }
        let tempNode = this.head
        while(tempNode.next !== null) {
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, otherNode)
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    
    insertBefore(item, before) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let beforeNode = this.find(before)

            nextNode.next = new _Node(item, beforeNode)
        }
    }

    insertAfter(item, after) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let afterNode = this.find(after)
            let nextNode = afterNode.next

            afterNode.next = new _Node(item, nextNode)
        }
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head;
            let currentPosition = 0
            while(currentPosition !== position) {
                currentPosition++;
                if (!currNode) {
                    return null
                }
                currNode = currNode.next;
            }
            this.insertAfter(item, currNode.value)
        }
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function size(list) {
    let count = 0;
    let node = list.head;
    while(node) {
        count++;
        node = node.next
    }
    return count
}

function display (size, list) {
    let length = size

    let currNode = list.head

    console.log(currNode)
    for (let i = 0; i < (length - 1); i++) {
        currNode = currNode.next
        console.log(currNode)
    }
}

function isEmpty(list) {
    if (!list.head) {
        return true;
    }
    return false;
}

function findPrevious(item, list) {
    let currNode = list.head
    let ticks = 0;
    if (item === currNode.value) {
        return null
    }
    if (item.next === null) {
        while (currNode.next.value !== item.value) {
            ticks++;
            currNode = currNode.next
            if (currNode.next.value === item.value) {
                break
            }
        }    
    }  else if (item.next !== null) {
        while (currNode.next.value !== item.value) {
                currNode = currNode.next
            }
    }
    return currNode
}

function findLast(list) {
    let currNode = list.head
    let length = size(list)
    if (!currNode) {
        return null
    }
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
}

module.exports = {LinkedList, size, display, isEmpty, findPrevious, findLast}