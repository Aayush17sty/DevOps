import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const server = new WebSocketServer({
    port : 3001
});
client.user.create({
    data:{
        username: "Aayushman Jain",
        email: "aayush17sty@gmail.com",
        password: "astyrex7"
    }
})
server.on("connection", (socket) => {
    socket.send("Hi there you are connected")
})