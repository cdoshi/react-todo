var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1503928622;

var currentMoment = moment.unix(timestamp);

console.log('Current Moment',currentMoment.format('MMMM Do, YYYY @ h:mm A'));
