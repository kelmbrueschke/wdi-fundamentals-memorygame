console.log("Up and running!");

let cardsInPlay = [];
let cardId = [];

const cards = [
	{
		rank; "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank; "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank; "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank; "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
		} 
			else {
  				console.log("Sorry, try again.");
				}
};


function flipCard() {

	let cardId = ;
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cardImage);
	console.log(suit);
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

//	let cards = ["queen", "queen", "king", "king"];
