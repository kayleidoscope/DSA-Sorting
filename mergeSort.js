const {LinkedList, size, display, isEmpty, findPrevious, findLast} = require('./LinkedList')

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

// console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))

const nums = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"

function addCommas(stringOfNums) {
    let numArray = nums.split(" ").map(num => {
        return parseInt(num)
    })

    return numArray
}

console.log(mergeSort(addCommas(nums)))

/*
1.

- What is the resulting list that will be sorted after 3 recursive calls to mergesort?

[ 21, 1, 26, 45 ]

- What is the resulting list that will be sorted after 16 recursive calls to mergesort?

[ 9 ]

- What are the first 2 lists to be merged?

[ 21 ] and [ 1 ]

- Which two lists would be merged on the 7th merge?

[ 1, 21, 26, 45 ] and [ 2, 9, 28, 29 ]

*/

// console.log(mergeSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]))

function listMaker() {
    let SLL = new LinkedList()
    
    SLL.insertFirst("7")
    SLL.insertLast("1")
    SLL.insertLast("3")
    SLL.insertLast("5")
    SLL.insertLast("2")

    // SLL.insertFirst("1")
    // SLL.insertLast("2")
    // SLL.insertLast("3")
    // SLL.insertLast("5")
    // SLL.insertLast("7")


    return SLL
    
}

function isItSorted(list) {
    let node = list.head
    while (node.next) {
        if (node.value > node.next.value) {
            return false
        }
        node = node.next
    }
    return true
}

function sortLinkedList(list) {
    let node = list.head

    let length = size(list)

    while(!isItSorted(list)) {
        if (node.value > node.next.value) {
            list.remove(node.value)
            list.insertLast(node.value)
            console.log(display(list))
            break
        }
    }

    // console.log(isItSorted(list))
}

// sortLinkedList(listMaker())