var bleed = require('bleed');

bleed({
  bytes: bleed.ONE_GIGABYTE, 
  time: 30000,
  increments: 15,
  debug: true },
  function() { console.log('done!'); });