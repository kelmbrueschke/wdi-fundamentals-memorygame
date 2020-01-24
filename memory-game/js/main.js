console.log("Up and running!");

let cardsInPlay = [];
let cardId = [];

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
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

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function flipCard() {

	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute(src, cards[cardId].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
};

cardsInPlay.length;

if (cardsInPlay.length === 2) {
	console.log("User flipped 2 cards.");
	}
	else {
	console.log("You must flip 2 cards.");
	};

createBoard();

checkForMatch();


//	flipCard(0);
//	flipCard(2);

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

//	function flipCard() {
//	let cardId = ;
//	console.log("User flipped " + cards[cardId].rank);
//	cardsInPlay.push(cards[cardId].rank);
//	console.log(cardImage);
//	console.log(suit);
//	checkForMatch();
//	};