let runagain = true

while(runagain){
    let age = prompt("Enter you age")
    age = Number.parseInt(age)
    
    const canDrive = (age)=>{
        return age>=18?true:false
    }
    if(age<0){
        console.error("Please enter valid age")
        continue;
    }
    if(canDrive(age)){
        alert("You can drive")
    }
    else{
        alert("You cannot drive")
    }

    runagain = confirm("Do you want to play again?")
}


let num = prompt("Enter you number")

if(num>4){
    location.href = "https://google.com"
}

let color = prompt("Enter the page background color")
document.body.style.background = color
