// count  no of words in  file

const fs = require("fs");

function count(fileName){
  console.log(process.argv);
  
  fs.readFile(fileName, "utf-8", function(err, data){
    if(err){
      console.log("err");
      return;
    }

    const words  = data.trim().split(/\s+/);
    console.log(words.length);
  });
}

count(process.argv[2]);

