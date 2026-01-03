const fs = require("fs");

function callback(err, data) {
  if(err){
    console.log("error occurred" + err);
    return;
  }else{
      console.log('File content:', data);
  }
  
}

fs.readFile("abc.txt" , "utf-8" ,callback)

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}

expensiveOperation();