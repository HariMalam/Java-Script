console.log(document.body.firstChild)

let a = document.body.firstChild
console.log(a.parentNode) // all type of nodes (comment nodes / text nodes)
console.log(a.parentElement) // valid html element

console.log(a.firstChild.nextSibling)