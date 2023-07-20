const addTwoNumber = (a,b)=>{
    return a+b;
};

// const a= addTwoNumber(1,5);
// console.log(a);

const name = 'This is nodejs';

// module.exports.addTwoNumber = addTwoNumber;
// module.exports.name = name;

module.exports = {addTwoNumber,name};
