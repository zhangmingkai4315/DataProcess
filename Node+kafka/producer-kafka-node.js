var kafkaesque = require('kafkaesque')({
  brokers: [{host: '192.168.1.104', port: 9092}],
  clientId: 'MrFlibble',
  maxBytes: 2000000
});

// tearup the client
kafkaesque.tearUp(function() {
  // send two messages to the testing topic
  kafkaesque.produce({topic: 'test', partition: 0},
                     ['wotcher mush', 'orwlight geezer'],
                     function(err, response) {
    // shutdown connection
    console.log(response);
    kafkaesque.tearDown();
  });
});
