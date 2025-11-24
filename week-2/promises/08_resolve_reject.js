function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();

const fs = require("fs");
//defining async fn
function readFileAsync() {
  return new Promise(function (resolve , reject) {
    fs.readFile("abc.txt", "utf-8", function (err,
       data) {
        //err
        if(err){
         reject("file not found")
        }else{
          resolve(data);
        }
      
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("file has been read : " + x);
  })
  .catch(function (e) {  //needed to catch error if file not exist 
    console.log(e);   //file not found
    
  });


