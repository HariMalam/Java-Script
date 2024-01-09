let num = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log()

// ForEach loop
num.forEach((element) => {
    console.log(element * element)
})

// Array.from
let names = "Hari"
let arr = Array.from(names)
console.log(arr)

// for..of
for (i of num) {
    console.log(i)
}

// for..in
for (let i in num){
    console.log(i)
    console.log(num)
}