let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

let b;
do {
    b = prompt("Enter a number")
    b = Number.parseInt(b)
    arr.push(b)
} while (b != 0);
console.log(arr)

let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
const fun = (item) => {
    return item % 10 == 0
}
let c = arr2.filter(fun)

console.log(c)

const fun2 = (item) => {
    return item * item
}
let d = arr2.map(fun2)

console.log(d)

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
const fun3 = (a, b) => {
    return a * b
}
let e = arr3.reduce(fun3)

console.log(e)