const express = require('express');
const path = require('path');
const QueueEvents = require('./queueEvents');


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


// Event handler instance
const queue = new QueueEvents();


// Get current queue number
app.get('/queue', (req, res) => {
res.json({ current: queue.currentNumber });
});


// Staff updates the queue number
app.post('/queue/update', (req, res) => {
const { number } = req.body;
queue.updateNumber(number);
res.json({ message: 'Queue updated', current: number });
});


app.listen(PORT, () => console.log(`SmartQueue server running on port ${PORT}`));
