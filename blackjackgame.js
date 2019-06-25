// this is my first project in javascript. Creating a blackjack game using a pluralsight tutorial.
let suits=["Hearts", "Clubs", "Diamonds", "Spades"];
let values=["Ace", "King", "Queen", "Jack",
"Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];  

let textArea=document.getElementById("text-area");  //paragraph where we display info to user
let newGameButton=document.getElementById("new-game-button");
let hitButton=document.getElementById("hit-button");
let stayButton=document.getElementById("stay-button");

hitButton.style.display="none";  // hide these buttons at the beginning of the game
stayButton.style.display="none";

newGameButton.addEventListener("click", function() {
textArea.innerText="started..";
newGameButton.style.display="none";
hitButton.style.display="inline";
stayButton.style.display="inline";

});

function createDeck(){
    let deck=[];
    for (let suitIdx=0; suitIdx<suits.length; suitIdx++) //nested loop. Create a for loop withing our for loop
       { for (let valueIdx=0; valueIdx<values.length;valueIdx++){
           let card={
               suit:suits[suitIdx],
               value:values[valueIdx]
           }
           deck.push(card );   // adds cards to the array deck[]
        };
}
return deck;
} 
function getCardString(card){
return card.value+" of "+card.suit;
}
function getNextCard()   //  function for getting the next card in the deck
{
    return deck.shift();

}
let deck=createDeck();

/*for (let i=0; i<deck.length;i++){
    console.log(deck[i]);
}
*/
console.log("you are dealt");
let playerCard=[getNextCard(),getNextCard()];
console.log(getCardString(playerCard[0]));
console.log(getCardString(playerCard[1]));


