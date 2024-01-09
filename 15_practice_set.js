console.log("har\"".length)

const sentence = "hello i am malam hari"
const word = "hari"

console.log(`the word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`)

let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount)
