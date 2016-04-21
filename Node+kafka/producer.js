var kafka = require('kafka')

// new kafka.Consumer().connect().subscribeTopic('test').on('message', function(topic, message) {
//     console.log("Consumed message:", message)
// })

var producer = new kafka.Producer({
        host:         '192.168.1.104',
        port:         9092,
        topic:        'test',
        partition:    0}).connect().on('connect', function() {
    producer.send("hey!")
    producer.close()
});
