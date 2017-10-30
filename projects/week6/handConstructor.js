class Card {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

class Hand {
  constructor(){
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
    return this.cards;
  }
  points(card, point) {
    var totalPoints = Number('');
    this.cards.forEach(function (card) {
      totalPoints = totalPoints + Number(card['point']);
      console.log(totalPoints);
    });
  }
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));

console.log(myHand.cards);

myHand.points();
