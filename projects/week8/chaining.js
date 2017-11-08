var fs = require('fs-promise');
var rp = require('request-promise');

var myUrl = "http://www.github.com"
var myFilename = "fileHtml4.txt"

function saveWebPage(url, filename) {
  rp(url)
  .then(function(resultsOfFS){
    console.log(resultsOfFS);
    return fs.writeFile(filename, resultsOfFS);
  })
  .then(function () {
    console.log('File written successfully');
  })
  .catch(error=> {
    console.error(error.message);
  })
};

saveWebPage(myUrl, myFilename)
