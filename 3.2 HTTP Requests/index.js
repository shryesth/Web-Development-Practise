import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.post("/register", (req, res) => {
    console.log("hello sir")
    res.sendStatus(201);
})

app.put("/user/shryesth", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/shryesth", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/shryesth", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`server running on ${port}`);
})