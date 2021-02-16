const nums = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"

function addCommas(stringOfNums) {
    let numArray = nums.split(" ").map(num => {
        return parseInt(num)
    })

    return numArray
}

const smallArray = [9, 1, 3, 5, 7, 4]

function swap(array) {
    if (array[0] > array[1]) {
        let item1 = array[0]
    
        array[0] = array[1]
        array[1] = item1
    }
    return array
}

function isArray(array) {
    return typeof array === "object" && array.length !== undefined
}

function flattenArray(arrayOfArrays) {

    return arrayOfArrays.reduce((newArray, item) => isArray(item) ? [...newArray, ...flattenArray(item)] : [...newArray, item], [])
}


function bucketSort(array, lowest, highest) {
    const numOfBuckets = Math.floor(array.length / 2)
    const valuesPerBucket = Math.round((highest - lowest)/numOfBuckets)
    
    let bucketOfBuckets = []

    //create buckets of twos
    for (let i = 0; i < numOfBuckets; i++) {
        bucketOfBuckets = [...bucketOfBuckets, []]
    }

    //put items into buckets
    //then if needed, swap items in buckets

    for (let j = 0; j < array.length; j++) {
        let value = array[j]
        let bucketNumber = Math.floor((value - lowest) / valuesPerBucket)
        bucketOfBuckets[bucketNumber].push(value)
        if (bucketOfBuckets[bucketNumber].length > 1) {
            swap(bucketOfBuckets[bucketNumber])
        }
    }

    return flattenArray(bucketOfBuckets)
}


const lowestInNums = 1
const highestInNums = 98

console.log(bucketSort(nums, 1, 98))