let num = [13, 2, 3, 44, 5, 6, 72, 8, 9]
let num2 = [11, 12, 14, 15, 16, 17]
let num3 = [34, 55]
console.log(num)

delete num[0] // Array length still be unchanged
console.log(num)

let newarry = num.concat(num2, num3) // return new array does not change original array
console.log(newarry)

// sort method
const compare = (a, b) => {
    return a - b;
}

newarry.sort(compare)
console.log(newarry)


newarry.reverse()
console.log(newarry)

let n = [1, 2, 3, 4, 5]
 
// can modify original array
let deleted = n.splice(1, 3, 4, 9) // (start, delete_element_count, add_num1, add_num1,.....)
console.log(n)
console.log(deleted) // return deleted elements
console.log(typeof deleted)

// slice create a new array slice(Start,end)
// start - include, end - exclude
// can't modify original array

console.log(n)
let b = n.slice(2,4)
console.log(b)