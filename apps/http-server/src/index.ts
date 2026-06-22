import express from "express";
import { client } from "@repo/db/client"


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const user = await client.user.create({
        data : {
            username : username,
            email : email,
            password : password
        }
    })
    res.json({
        message : "Signup Successful!",
        id : user.id
    });
})

app.listen(3000);