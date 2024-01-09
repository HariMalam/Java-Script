function sum(a,b){
    return Math.round(1 + (a+b)/2);
}

// Arrow Funtion
const greed = (p,q) =>{
    console.log("hello",q,"hello",p);
}

let a = 4;
let b = 6;
let c = 4;
let d = 2;

console.log(sum(a,b))
console.log(sum(a,c))
console.log(sum(a,d))

greed(5,4);