import logging
from kafka import KafkaConsumer

# To consume messages
consumer = KafkaConsumer('test',
                         group_id='my_group',
                         bootstrap_servers=['192.168.1.104:9092'])
for message in consumer:
    # message value is raw byte string -- decode if necessary!
    # e.g., for unicode: `message.value.decode('utf-8')`
    print("%s:%d:%d: key=%s value=%s" % (message.topic, message.partition,
                                         message.offset, message.key,
                                         message.value))
