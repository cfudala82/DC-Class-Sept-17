
function counter () {
  var count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

var count1 = counter();
var count2 = counter();
