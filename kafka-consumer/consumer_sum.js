const Kafka = require( 'no-kafka')

var valueSum = 0;

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({ "connectionString":"localhost:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var value = parseInt(m.message.value.toString('utf8'));
        valueSum = valueSum + value;
        console.log(valueSum);
    });
};

return consumer.init().then(function() {
    return consumer.subscribe('kafka-python-topic', data)
})