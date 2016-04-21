var kafka = require('kafka');

new kafka.Consumer({
     host:         '192.168.1.104',
     port:          9092,
     pollInterval:  2000,
     maxSize:       1048576
}).connect().subscribeTopic('test').on('message', function(topic, message) {
    console.log("Consumed message:", message);
});
