const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', ()=>{console.log('Even fired')})

//Init event
myEmitter.emit('event');