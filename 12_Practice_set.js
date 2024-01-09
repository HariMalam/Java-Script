let marks = {
    hari:100,
    tirth:70,
    deep:50,
    jatin:7
}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

for(let i in marks){
    console.log("The marks of " + i + " are " + marks[i])
}


const mean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5;
}

console.log(mean(5,4,3,6,4));