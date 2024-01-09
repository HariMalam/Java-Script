let arr = [45, 23, 21]
// Map
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})

console.log(a)

let arr2 = [45, 23, 21, 0, 3, 5]

// Filter
let a2 = arr2.filter((a) => {
    return a < 10
})

console.log(a2)

// Reduce
let arr3 = [1, 2, 3, 5, 2, 1]
let a3 = arr3.reduce((a, b) => {
    return a + b
})
console.log(a3)

// Reduce - Second method
const reduce = (h1, h2) => {
    return h1 + h2
}

let newarr3 = arr3.reduce(reduce)
console.log(newarr3)
