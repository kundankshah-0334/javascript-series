const addTwoNumber = (a,b)=>{
    return a+b;
};
const subTwoNumber = (a,b)=>{
    return a-b;
};
const multTwoNumber = (a,b)=>{
    return a*b;
};

// const a= addTwoNumber(1,5);
// console.log(a);

const name = 'This is nodejs';

// module.exports.addTwoNumber = addTwoNumber;
// module.exports.name = name;

module.exports = {addTwoNumber,subTwoNumber,multTwoNumber,name};
