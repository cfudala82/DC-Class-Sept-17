var rp = require('request-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var promise_array = []

urls.forEach((url)=>{
  var p = rp(url)
  promise_array.push(p)
})

Promise.all(promise_array)
  .then(values=> {
    console.log(values[0]);
});
