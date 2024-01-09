// Arrays are mutable, array can be changed

let a = [1,2,3,4,5]
console.log(a)

let b = ["a",false,undefined,null,3,4]
console.log(b)
console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])
console.log(b[4])
console.log(b[5])
console.log(b[6])

console.log(b.length)

b[2] = 10

console.log(b)

console.log(typeof(b))