import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT
const server = http.createServer(app);


const io = new Server(server,{ cors: {origin: "http://localhost:3001"}})

io.on("connection", (socket)=>{
    console.log("client connected")
})

server.listen(port, () =>{console.log("Server running on port" + port)} )