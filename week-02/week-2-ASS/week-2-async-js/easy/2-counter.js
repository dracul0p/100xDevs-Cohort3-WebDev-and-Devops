let counter = 0;
function callback () {
 
  console.log(counter);
  counter = counter + 1;
  setTimeout(callback, 1000)
}
setTimeout(callback, 1000)

