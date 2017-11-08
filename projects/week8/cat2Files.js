var fs = require('fs-promise');
var readline = require('readline');

var outputFileName = "fileCat3.txt"
var Filename1 = "fileCat1.txt"
var Filename2 = "fileCat2.txt"

function Cat2(copyFile1, copyFile2, saveFile) {
  var file1;
  var file2;

  fs.readFile(copyFile1)
  .then(function(buffer){
    // console.log(file1.toString());
    file1 = buffer.toString();
    return fs.readFile(copyFile2);
  })
  .then(function (buffer) {
    // console.log(file2.toString());
    file2 = buffer.toString();

    var cat2file = (file1 + file2);
    console.log(cat2file);
    return cat2file;
  })
  .then((cat2file)=> {
    return fs.writeFile(saveFile, cat2file);
  })
  .then(function () {
    console.log('done\n\n');
  })
  .catch(error=> {
    console.error(error.message);
  })
};

Cat2(Filename1, Filename2, outputFileName)
