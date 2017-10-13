// A function that takes and array and outputs a new array with the positive
// numbers of the previous arrray only.

var array = [1, 5, 4, 6, 13, 64, 20, 34, 99, 12, 53, 33];

function evenNumbers (nums) {
  var arrayEven = [];

  nums.forEach(function (num) {
    if (num % 2 === 0) {
      arrayEven.push(num);
    }
  });
return arrayEven
}

console.log(evenNumbers(array));
