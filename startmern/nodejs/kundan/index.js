const fs = require('fs');

// fs.writeFileSync('bio.txt', 'My name is kundan.'); // create a file and input some data.

// fs.appendFileSync('bio.txt' , 'I like tea'); //Add some data in file.

// const readData = fs.readFileSync('bio.txt' , 'utf-8');// Read and encode the data from another file.
// console.log(readData);

// fs.renameSync('bio.txt','myBio.txt'); // Rename the file.

// fs.unlinkSync('myBio.txt');//Delete the file.

fs.rmdirSync('folder');//Delete The Folder.