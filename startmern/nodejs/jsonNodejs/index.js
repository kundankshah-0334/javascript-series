// const fs = require('fs');

const ff = require("fs");

const user =  {
    name : 'Raja',
    age : 56,
    area : 'Magadh'
};

// console.log(user.area);

const jsonData = JSON.stringify(user);

// console.log(jsonData);

const objData = JSON.parse(jsonData);

// console.log(objData.age);

// ff.writeFile('Json1.json',jsonData, (err) => {
//     console.log('File Created');
// }
// );


ff.readFile('json1.json' , 'utf-8' ,(err , data)=>{
    console.log(data);

    const orgData = JSON.parse(jsonData);
    console.log(orgData.name);
});