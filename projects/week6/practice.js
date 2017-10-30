// video 1 LearnCode.acaedemy What makes javascropt weird

function add(first, second, callback) {
  console.log(first + second);
  callback();
}

// add(2, 3, function() {
//   console.log('done');
// });
//
// add(4, 5, function () {
//   console.log('done again');
// });
//
//         OR


function logDone () {
  console.log('done');
}


add(2, 3, logDone);
// add(4, 5);

function handleClick() {
  // something
}

$('myDiv').click(handleClick)

// video 2

$(document).ready(function() {
  $('button').on('click', function() {
    alert('yay!');
  });
});
