/* NODE */
const path = require('path');

/* EXPRESS */
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = require('./config').PORT;

/* LOGGING */
const log = require('./config').log;

app.use(bodyparser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// API endpoints would go here

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port);
log.info('[Express] App is listening on port ' + port);
