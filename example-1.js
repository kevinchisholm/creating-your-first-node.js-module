// require the dateTools module.
var dateTools = require('dateTools');

// Call the getDays method.
console.log('TEST 1: ' + dateTools.getDay()); //TEST 1: ''

console.log('TEST 2: ' + dateTools.getMonth()); //TEST 2: ''

console.log('TEST 3: ' + dateTools.getDay(0)); //TEST 3: Monday

console.log('TEST 4: ' + dateTools.getMonth(0)); //TEST 4: January

console.log('TEST 5: ' + dateTools.getDay(6)); //TEST 5: Sunday

console.log('TEST 6: ' + dateTools.getMonth(11)); //TEST 6: December


