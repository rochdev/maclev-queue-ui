'use strict';

var kue = require('kue');

var REDIS_URL = process.env.REDIS_URL || 'redis://10.0.0.4:6379';
var PORT = process.env.PORT || 3000;

kue.createQueue({
  redis: REDIS_URL
});

kue.app.listen(PORT);

console.log("Running on http://127.0.0.1:" + PORT);
