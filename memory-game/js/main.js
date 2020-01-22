console.log("Up and running!");

let cards = ["queen", "queen", "queen", "queen"];
let cardsInPlay = [];
let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped queen");

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped king");

cardsInPlay.length;

if (cardsInPlay.length === 2) {
	console.log("User flipped 2 cards");
}
	else {
		console.log("You must flip 2 cards");
	}

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else { 
		alert("Sorry, try again.");
}
