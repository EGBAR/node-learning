var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("Successfully Connected!\n");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
    console.log("Data has been received\n");
});

eventEmitter.emit('connection');

console.error('Program Done\n');
