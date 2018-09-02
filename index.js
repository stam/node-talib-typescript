const talib = require('talib');

talib.execute({
    name: 'EMA',
    startIdx: 0,
    endIdx: 5,
    inReal: [1, 2, 3, 4, 5],
    optInTimePeriod: 5,
}, function(err, result) {
    console.log('ema result', err, result);
});