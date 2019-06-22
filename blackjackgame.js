// this is my first project in javascript. Creating a blackjack game using a pluralsight tutorial.
let suits=["Hearts", "Clubs", "Diamonds", "Spades"];
let values=["Ace", "King", "Queen", "Jack",
"Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];  

function createDeck(){
    let deck=[];
    for (let suitIdx=0; suitIdx<suits.length; suitIdx++) //nested loop. Create a for loop withing our for loop
       { for (let valueIdx=0; valueIdx<values.length;valueIdx++){
           deck.push(values[valueIdx]+" of "+ suits[suitIdx] )
        };
}
return deck;
} 
function getNextCard()
{
    return deck.shift();

}
let deck=createDeck();

for (let i=0; i<deck.length;i++){
    console.log(deck[i]);
}

let playerCard=[getNextCard(),getNextCard()];
console.log(playerCard);



