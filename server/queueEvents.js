const EventEmitter = require('events');


class QueueEvents extends EventEmitter {
constructor() {
super();
this.currentNumber = 0;
}


updateNumber(newNumber) {
this.currentNumber = newNumber;
this.emit('queueUpdated', newNumber);
console.log(`Queue updated to: ${newNumber}`);
}
}


module.exports = QueueEvents;
