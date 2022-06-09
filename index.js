let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
let sumOfCards = 0

player = {
    name :"Vaibhav",
    earning : 0
}

playerEl.textContent = player.name + ": $" + player.earning


function randomNumber(){
    let randonNo = Math.floor(( Math.random()*13)) + 1

    if(randonNo === 1){
        return 11
    }
    else if(randonNo > 1 && randonNo < 11 ){
        return randonNo
    }

    else{
        return 10
    }
}

function startGame(){
    isAlive = true
    hasBlackjack = false
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    // cards.push(firstCard, secondCard)  won't work bcz everytime new value will be inserted on exsiting array
    cards = [firstCard, secondCard]
    sumOfCards = firstCard + secondCard
    renderGame()
    
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    console.log(cardsEl.textContent)
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ", "
    }
    sumEl.textContent = "Sum: " + sumOfCards
    player.earning = sumOfCards
    playerEl.textContent = player.name + ": $" + (player.earning)*100


    if(sumOfCards < 21){
        message = "drwa a new card?"
    }
    else if (sumOfCards === 21){
        message = "Yay Blackjack"
        hasBlackjack = true
    }
    else{
        message = "Out of the game"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard(){

    if(isAlive == true && hasBlackjack == false)
    {
    let thirdCard = randomNumber()
    sumOfCards += thirdCard
    cards.push(thirdCard)
    renderGame()
    }

}

