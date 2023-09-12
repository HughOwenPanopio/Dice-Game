function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
}

let player1 = "Player 1";
let player2 = "Player 2";

// Function to roll the dice
function rollTheDice() {
        //
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        //rolls the dice
        document.querySelector(".img1").setAttribute("src",
            "images/dice" + randomNumber1 + ".JPG");
        document.querySelector(".img2").setAttribute("src",
            "images/dice" + randomNumber2 + ".JPG");
        //condition statement
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").textContent = "Draw!";
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").textContent
                            = (player2 + " WINS!");
        }
        else {
            document.querySelector("h1").textContent
                            = (player1 + " WINS!");
        } 
}