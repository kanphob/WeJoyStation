const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    allowEIO3: true,
    cors: {
        origin: "*",        // allow all origins (for testing)
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("player connected");
});

server.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});