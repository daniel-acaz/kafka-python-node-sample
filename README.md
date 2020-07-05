# Apache Kafka with sample consumer in Node.js and producer in Python

## Running Apache Kafka

The project privde a docker-compose to running a kafka application. This docker-compose was take of <https://github.com/confluentinc/cp-docker-images>.

More expecifically in examples/kafka-single-node

To running docker-compose, in terminal on the package product type this command:

```bash
    $ docker-compose up -d

    to verify status of kafka and zookeeper:

    $ docker ps
    $ docker-compose logs zookeeper | grep -i binding
    $ docker-compose logs kafka | grep -i started
```

## Explain producer and running

The project has a kafka-producer folder with producer.py file. This producer will create randomic messages with a value between 1 and 999. To stop send message, you need type CTRL + C as log say.

To running producer type this:

```bash
    $ python kafka-producer/producer.py
```

## Explain consumer and running

The project has a kafka-consumer folder with consumer.js file. This consumer is simple, basically this will take the message has sending for producer.

To running consumer type this:

```bash
    $ python kafka-consumer/consumer.js
```