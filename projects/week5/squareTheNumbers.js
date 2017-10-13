// A function that takes an array of numbers, squares all the numbers, and
// returns a new array with the new squared numbers.

function squareTheNumbers (nums) {
  var squaredArray = [];

  nums.forEach(function (num) {
    var sqNum = num * num
    squaredArray.push(sqNum);
  });
  return squaredArray;
}

console.log(squareTheNumbers([1, 2, 3, 4, 5, 6]));
