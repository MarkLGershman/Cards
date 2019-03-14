const path = require("path");

const express = require("express");

const app = require("express")();
const server = require("http").Server(app);
// const io = require("socket.io")(server);
const bodyparser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use((req, res) => {
  res.status(404);
  res.end('Page not found');
});

server.listen(port, () => {
  console.log("Listening on port:", port);
});