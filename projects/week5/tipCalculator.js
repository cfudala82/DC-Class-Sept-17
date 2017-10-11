// Calculates the tip amount according to service.

function TipAmount (billAmount, levelOfServ) {

  if (levelOfServ === 'good') {
    var levelOfService = .2;
  } else if (levelOfServ === 'fair') {
    var levelOfService = .15;
  } else if (levelOfServ === 'bad') {
    var levelOfService = .1;
  }
  var tipAmnt = billAmount * levelOfService
return tipAmnt

}

var tipAmoun1 = TipAmount(100, 'good')
var tipAmoun2 = TipAmount(40, 'fair')
var tipAmoun3 = TipAmount(100, 'bad')

console.log(tipAmoun1);
console.log(tipAmoun2);
console.log(tipAmoun3);
