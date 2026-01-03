// function to return length of the string
function getLength(name) {
    return name.length;
}

// call getLength() function with argument "Bharat"
const ans1 = getLength("Bharat");

// print ans1 to console
console.log(ans1);



/*
// call getLength() function without argument
const ans2 = getLength();  //undefined

// print ans2 to console
console.log(ans2); // This will throw an error
// console.log(getLength()); stops execution
*/

// try block to handle error
try {
    // call getLength() function without argument
    const ans3 = getLength();

    // print ans3 to console
    console.log(ans3);
} catch (error) {
    // print error message to console
    console.log(error.message);
}


//use try catch with jwt.verify()



// try block to handle error
try {
    // declare variable a without assigning value
    let a;
    // print length of a to console
    console.log(a.length);

    // print message to console
    console.log("Hi I am inside try block");
} catch (error) {
    // print error message to console
    console.log("Hi I am inside catch block");
}

// print message to console
console.log("Hi I am outside try-catch block");