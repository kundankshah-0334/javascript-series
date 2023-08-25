const fs = require('fs');

// fs.writeFile('bio.txt', 'My name is kundan.',(err)=>{
//  console.log('File Created');
// }); // create a file and input some data.



// fs.appendFile('bio.txt' , 'I like tea' , (err)=>{
//     console.log('data added');
// }); //Add some data in file.


const readData = fs.readFile('bio.txt' , 'utf-8', (err, data)=>{
    console.log('Data are Showing Below');
});// Read and encode the data from another file.
console.log(readData);
