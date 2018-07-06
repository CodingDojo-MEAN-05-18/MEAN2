const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  },
};

require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger('dev'))
  .use(express.static(path.join(__dirname, 'dist')))
  .use(session(sessionConfig))
  .use(cookieParser('zlkfjnbsdlkjfalskjgflaksdjf'))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
