function addNumbers (x, y) {
  var p = new Promise(function (resolve, reject) {
    if (typeof(x) === 'number' && typeof(y) === 'number') {
      var total = x + y;
      console.log(total);
      resolve(total);
    } else {
      reject("Input is not a number!");
    }
  });
  return p;
};

addNumbers(1, 2);
