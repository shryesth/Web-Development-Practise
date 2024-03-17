import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let title = "Enter your name below 👇"

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: title })
});

app.post("/submit", (req, res) => {
  const numLetter = req.body['fName'].length + req.body['lName'].length
  res.render("index.ejs", { numberOfLetters: numLetter })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
