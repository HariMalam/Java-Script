let high = 0;

while (true) {
    let num = Math.round(Math.random() * 100)
    let chances = 0;
    let n;
    let yourname = prompt("enter you name: ");
    do {
        n = prompt("Enter Number: ");
        chances++;
        if (n == num) {
            console.log("You Win the game");
            break;
        }
        else {
            console.log("number is", n > num ? "less" : "greter", "than your guess")
        }

    } while (n != num);

    let score = 100 - chances;
    console.log("Your Score = " + high + "(" + yourname + ")")
    if (score > high) {
        high = score
        names = yourname
    }
    console.log("Highest Score = " + high + "(" + names + ")")

    let i = prompt("\nYou want to play again(y/n)?")
    if(i=="n"){
        break;
    }
}
console.log("Thank you for playing this amazing game")