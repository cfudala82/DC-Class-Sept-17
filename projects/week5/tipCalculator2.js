// Calculates the tip amount according to service.
// Then it takes the tip amount and adds it to bill amount returning
// The total amount.

function totalAmount (billAmount, levelOfServ) {

  if (levelOfServ === 'good') {
    var levelOfService = .2;
  } else if (levelOfServ === 'fair') {
    var levelOfService = .15;
  } else if (levelOfServ === 'bad') {
    var levelOfService = .1;
  }
  var tipAmnt = billAmount * levelOfService
  var total = tipAmnt + billAmount
return total

}

var totalAmoun1 = totalAmount(100, 'good')
var totalAmoun2 = totalAmount(40, 'fair')
var totalAmoun3 = totalAmount(100, 'bad')

console.log(totalAmoun1);
console.log(totalAmoun2);
console.log(totalAmoun3);
