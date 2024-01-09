let a = prompt("Hey whats your age?");
console.log(typeof(a));

alert(a);

a = Number.parseInt(a); // converting the string to number
console.log(typeof(a));

if(a>0){
    alert("this is valid age");
}
else{
    alert("this is invalid age");
}

console.log("done");