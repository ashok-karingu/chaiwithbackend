require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("ashokkumar@gmail.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code </h1>");
  // req.send("login");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> CHAI AUR CODE </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
