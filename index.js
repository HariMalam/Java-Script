document.write("Stone Paper Sessor Game")

let max = 3
let min = 1
let c=0, y=0;

let bool = true

while (bool) {
    const comp = Math.floor(Math.random() * (max - min + 1)) + min;

    const you = prompt("select 1.Stone, 2.Paper, 3.Sessor")

    if (you == 1) {
        if (comp == 1) {
            alert("draw, you and comp both select stone !")
            c++
            y++
        }
        else if (comp == 2) {
            alert("you loss, you select stone and comp select paper")
            c++
        }
        else {
            alert("you win, you select stone and comp select sessor")
            y++
        }
    }
    else if (you == 2) {
        if (comp == 2) {
            alert("draw, you and comp both select paper !")
            c++
            y++
        }
        else if (comp == 1) {
            alert("you win, you select paper and comp select stone")
            y++
        }
        else {
            alert("you loss, you select paper and comp select sessor")
            c++
        }
    }
    else if(you == 3) {
        if (comp == 3) {
            alert("draw, you and comp both select sessor !")
            c++
            y++
        }
        else if (comp == 1) {
            alert("you loss, you select sessor and comp select stone")
            c++
        }
        else {
            alert("you win, you select sessor and comp select paper")
            y++
        }
    }
    else{
        alert("please select valid option!!")
        continue;
    }
    alert("socre\nyou - " + y + "\ncomp - " + c)
    bool = confirm("You want to play again?")
}
document.write("<br><br>")
if (y > c) {
    document.write("Congratulation!<br> You win this game")
    document.body.style.background = "green"
}
else if (y< c) {
    document.write("sorry!<br> You loss this game")
    document.body.style.background = "red"
}
else{
    document.write("drow !!!")
    document.body.style.background = "blue"
}
document.write("<br>socre<br>you - " + y + "<br>comp - " + c)