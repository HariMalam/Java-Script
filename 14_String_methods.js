// Strings are immutable

let names = "Haribhai"
console.log(names.length)
console.log(names.toUpperCase())
console.log(names.toLowerCase())

console.log(names.slice(1,3))
console.log(names.slice(1))

console.log(names.replace("bhai","bhau"))

console.log(names.concat(" king"))

let friend = "   hari   "
console.log(friend.trim())

for(let i=0; i<names.length;i++){
    console.log(names[i])
}