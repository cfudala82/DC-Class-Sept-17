function counter (x) {
  var count = x;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

var count1 = counter(4);
