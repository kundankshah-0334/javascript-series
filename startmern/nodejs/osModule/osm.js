const os = require('os');


const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);