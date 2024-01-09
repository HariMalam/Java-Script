// nn bb ss u - primittive data types in js

let a = null;
let b = 345;
let c = true;
let d = BigInt("987");
let e = "hari";
let f = Symbol("i am symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof(d));


// objects in js

const item = {
    "hari": true,
    "tirth": false,
    "deep": 78
}

console.log(item["hari"]);
console.log(item["harid"]);