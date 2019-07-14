const express = require('express');
const path = require('path');
const app = express();
// const io = require("socket.io")(server);
const bodyparser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// API endpoints would go here

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port);
console.log('App is listening on port ' + port);
