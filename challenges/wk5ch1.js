var array = [1];
for (var x = 2; x < 20; x++) {
  for (var i = 2; i < x; i++) {
    if (x % i !== 0) {
      array.push(x);
    }
  }
}
console.log(array);
