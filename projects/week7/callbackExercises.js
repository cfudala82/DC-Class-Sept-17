function add(x, y, callback) {
  setTimeout(function () {
    var result = x + y;
    callback(result);
  }, 1000);
}

function subtract(x, y, callback) {
  setTimeout(function () {
    callback(x - y);
  }, 1500);
}

function greeting(person, callback) {
  setTimeout(function () {
    callback('Hola, ' + person + '!');
  }, 2000);
}

function product(numbers, callback) {
  setTimeout(function () {
    var x = numbers.reduce(function(a, b) {
      return a * b;
    }, 2);
    callback(x);
  }, 2500);
}

add(1, 2, function (result) { console.log(result); });
subtract(10, 3, function (result) { console.log(result); });
greeting('Chris', function (result) { console.log(result); });

var nums = [5, 6];
product(nums, function (result) { console.log(result); });
