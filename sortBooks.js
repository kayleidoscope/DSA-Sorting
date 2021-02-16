const books = [
    "assassin with strength",
    "companion of the stockades",
    "creators of the south",
    "descendants without hate",
    "vultures and friends",
    "gangsters and gods",
    "intention without honor",
    "certainty of the sea",
    "possessed by the river",
    "justice in the mountains",
    "beloved with a crush",
    "nymph of my adoration",
    "foreigners of the ocean",
    "husbands with funny socks",
    "butterflies and angels",
    "honeys and gods",
    "perfection of my dreams",
    "fortune of eternity",
    "possessed by love",
    "chasing the husband"
]

function isItSorted(books) {
    for (let i = 0; i < books.length; i++) {
        if (books[i+1] < books[i]) {
            return false
        }
    }
    return true
}

function swap(array, i, j) {
    let itemI = array[i]

    array[i] = array[j]
    array[j] = itemI
    return array
}

function alphabetize(books) {
    while(!isItSorted(books)) {
        let bookToSort = ""
        for (let i = 0; i < books.length; i++) {
            if (books[i+1] < books[i]) {
                bookToSort = books[i]
                for (let j = 0; j < books.length; j++) {
                    if (books[i + 1] > bookToSort) {
                        swap(books, i, j)
                    }
                }
            }
        }
    }
    return books
}

console.log(alphabetize(books))