const cron = require('node-cron');
const Line = require('./Line')

Line.initial()
cron.schedule('* * * * *', () => {
        console.log('running on Sundays of January and September');
        Line.notify('Check In work')
});