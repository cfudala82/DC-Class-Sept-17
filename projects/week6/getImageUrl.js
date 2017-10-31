class Card {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

var myCard = new Card(5, 'diamonds');
console.log(myCard.point);
console.log(myCard.suit);

Card.prototype.getImageUrl = function (image) {
  var png = 'images/' + myCard.point +  '_of_' + myCard.suit + '.png';
  return png;
}

console.log(Card.prototype.getImageUrl());
