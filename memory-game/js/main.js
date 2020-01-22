console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardId = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
		} 
			else {
  				console.log("Sorry, try again.");
				}
};


function flipCard([cardId]) {


	let flipCard = cardsInPlay[];
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
};

flipCard(0);
flipCard(2);

cardsInPlay.length;
if (cardsInPlay.length === 2) {
	console.log("User flipped 2 cards.");
}
	else {
		console.log("You must flip 2 cards.");
	}
}


//	let cardOne = cards[0];
//	cardsInPlay.push(cardOne);
//	console.log("User flipped " + cardOne + " .");

//	let cardTwo = cards[2];
//	cardsInPlay.push(cardTwo);
//	console.log("User flipped " + cardTwo + " .");



//	if (cardsInPlay[0] === cardsInPlay[1]) {
//		alert("You found a match!");
//	} 
//	else { 
//		alert("Sorry, try again.");


