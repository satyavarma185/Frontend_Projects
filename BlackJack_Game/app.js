let player = {
    name : "Per Game",
    chips:150
}

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +" : $ "+player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards : ";
    for(let i=0 ;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" ";
    }
    sumEl.textContent = "Sum : "+sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    }
    else if (sum === 21) {
        message = "Wohoo! You've got BlackJack! 🥳";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newcard(){  
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }   
}

function getRandomCard(){
    let randomcard = Math.floor(Math.random() * 13) + 1;
    if(randomcard === 1){
        return 11;
    }
    else if(randomcard > 10){
        return 10;
    }
    else{
        return randomcard;
    }
}




