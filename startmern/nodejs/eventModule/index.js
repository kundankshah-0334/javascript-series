const EventEmitter = require('events');

const event = new EventEmitter();


event.on('SayYourStatus' , () =>{
    console.log('I am good Right now !!');
});
event.on('SayYourStatus' , () =>{
    console.log('I am really good Right now !!');
});

// event.on('SayYourStatus' , (sc, mes) =>{
//     console.log(`status code id ${sc} and status is ${mes}`);
// });



event.emit("SayYourStatus");
// event.emit("SayYourStatus" , 345 , 'ok');
