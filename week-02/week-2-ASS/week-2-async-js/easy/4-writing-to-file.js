const fs = require('fs');

const data = 'This is the content to write to the file.';

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}

fs.writeFile("abc.txt", data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log(`Data written to a.txt`);

});

expensiveOperation();