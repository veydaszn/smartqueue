SmartQueue 🚦

A simple event-driven queue notification system designed to help users avoid long waiting times in offices such as hospitals, banks, and university service desks.

SmartQueue listens for queue number updates and instantly notifies users when their turn is near.
📌 Features

🔔 Real-time event notifications when queue number changes

👥 Dual interface: Staff panel + User view

⏱ Estimated waiting time

🚀 Lightweight Node.js event-driven architecture

📡 Optional WebSocket support for instant updates

🧩 Tech Stack

Node.js (EventEmitter)

Express.js

HTML/CSS/JS (basic frontend)

Optionally: Socket.io for live updates

🔧 How It Works

Staff updates the current queue number.

An event is emitted.

All connected users receive the update instantly.

The UI highlights: “You're next!” or “2 people ahead”.


🚀 Getting Started
1. Clone the repo
    git clone https://github.com/veydaszn/smartqueue.git
2. Install dependencies
    cd smartqueue
    npm install
3. Run the server
    node server/index.js


