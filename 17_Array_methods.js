let num = [1,2,3,4,56,7]
console.log(num)
console.log(typeof num)

let b = num.toString()
console.log(b)

let c = num.join("_")
console.log(c)
console.log(typeof c)

let r = num.pop()
console.log(num)
console.log(r) // poped elemet

let g = num.push(7)
console.log(num)
console.log(g) // new array length

let k = num.shift() // remove first element
console.log(num)
console.log(k) // retrun removed element

let j = num.unshift(5) // add element at first
console.log(num)
console.log(j) // return new array length


