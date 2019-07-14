const log = require('loglevel');
let PORT;

if (process.env.NODE_ENV === 'production') {
  log.setLevel(log.levels.INFO);
  PORT = process.env.PORT;
} else {
  log.setLevel(log.levels.TRACE);
  PORT = 3001;
}

module.exports = { log, PORT };
