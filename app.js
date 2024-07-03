const fs = require('fs');

const dataToWrite = 'Hello, World! This is some text data.';

fs.writeFile("example.txt", dataToWrite, (err) => {
  if (err) {
    return console.error('Error writing to file:', err);
  }
  console.log('Data written to file successfully.');


fs.readFile("example.txt", 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading from file:', err);
    }
    console.log('Data read from file:', data);
  });
});
