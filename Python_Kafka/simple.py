#encoding: utf-8
from kafka import SimpleProducer, KafkaClient

# To send messages synchronously
kafka = KafkaClient('192.168.1.104:9092')
producer = SimpleProducer(kafka)

# Note that the application is responsible for encoding messages to type bytes
producer.send_messages(b'test', b'some message')
producer.send_messages(b'test', b'this method', b'is variadic')

# Send unicode message
producer.send_messages(b'test', u'你怎么样?'.encode('utf-8'))
