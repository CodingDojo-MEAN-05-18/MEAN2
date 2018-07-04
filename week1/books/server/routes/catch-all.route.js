const router = require('express').Router();
const path = require('path');

router.all('*', function(_request, response) {
  response.sendFile(path.resolve('dist/index.html'));
  // response.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;
