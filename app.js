let score1 = document.getElementById("score1")
let currentOne = document.getElementsByClassName("current1");
let p1message = document.getElementById("p1message")

let diceImage = document.getElementById("diceimg")

let rollButton = document.getElementById("div4");
let newGame = document.getElementById("div6");

let score = 0;

rollButton.addEventListener("click", () => {    
    let num = Math.ceil(Math.random() * 6)
    diceImage.style.display = "block";
    currentOne[0].style.display = "block";
    currentOne[1].style.display = "block";

    if (num === 1 && score < 20) {
        //currentOne[0].style.display = "none";
        //currentOne[1].style.display = "none";
        //diceImage.style.display = "none";
        score = 0;
        p1message.innerText = "Lossssseeeeeer!";
        score1.innerText = 1;
        diceImage.setAttribute("src", "images/dice1.png");
    } else if (num === 2) {        
        score += 2;
        currentOne[0].innerText = score;
        score1.innerText = 2;
        diceImage.setAttribute("src", "images/dice2.png");
    } else if (num === 3) {
        diceImage.setAttribute("src", "images/dice3.png");
        score += 3;
        currentOne[0].innerText = score;
        score1.innerText = 3;
    } else if (num === 4) {
        diceImage.setAttribute("src", "images/dice4.png");
        score += 4;
        currentOne[0].innerText = score;
        score1.innerText = 4;
    } else if (num === 5) {
        diceImage.setAttribute("src", "images/dice5.png");
        score += 5;
        currentOne[0].innerText = score;
        score1.innerText = 5;
    } else if (num === 6) {
        diceImage.setAttribute("src", "images/dice6.png");
        score += 6;
        currentOne[0].innerText = score;
        score1.innerText = 6;
    }
    else {
    }
});

 if (score >= 21){
    //currentOne[0].style.display = "none";
    //currentOne[1].style.display = "none";
    p1message.innerText = "Winner Winner Chicken dinner!!";
    //diceImage.style.display = "none";
 }

newGame.addEventListener("click", () => {      
    diceImage.style.display = "none";
    score = 0;
    currentOne[0].innerText = score;
    score1.innerText = score;
    p1message.innerText = "";
})