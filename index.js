const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
  console.log("Running app on port 8080");
});
