class Card {
  constructor (points, suits, names) {
    this.points = points;
    this.suits = suits;
    this.names = names;
  }
}

//
// class Hand {
//   constructor(){
//     this.cards = [];
//   }
//
//   addCard(card) {
//     this.cards.push(card);
//     return this.cards;
//   }
//   points(card, points) {
//     var totalPoints = Number('');
//     this.cards.forEach(function (card) {
//       totalPoints = totalPoints + Number(card['points']);
//       console.log(totalPoints);
//     });
//   }
// }

// var myHand = new Hand();
// myHand.addCard(new Card(5, 'diamonds'));
// myHand.addCard(new Card(13, 'spades'));
//
// console.log(myHand.cards);
//
// myHand.points();

class Deck {
  constructor () {
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.cards = [];

    for (var s = 0; s < this.suits.length; s++) {
      for (var n = 0; n < this.names.length; n++) {
        this.cards.push( new Card( n + 1, this.suits[s], this.names[n]));
      }
    }
    this.cards = this.shuffle(this.cards);
  }
  shuffle(deckArray) {
    for (let i = deckArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
    }
    return deckArray;
  }
  draw() {
    var drawCard = myDeck.cards.pop();
    return drawCard;
  }
  numCardsLeft() {
    var cardsLeft = myDeck.cards.length;
    return cardsLeft;
  }
}

var myDeck = new Deck();

console.log(myDeck.cards);

console.log(myDeck.numCardsLeft());

console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());

console.log(myDeck.cards);
console.log(myDeck.numCardsLeft());
