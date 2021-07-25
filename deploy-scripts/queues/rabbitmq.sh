rabbitmqadmin declare exchange name='mock.course' type='direct' durable=true

rabbitmqadmin declare queue name='mock.pending.course' durable=true
rabbitmqadmin declare binding source='mock.course' destination_type='queue' destination='mock.pending.course' routing_key='pending'

rabbitmqadmin declare queue name='mock.completed.course' durable=true
rabbitmqadmin declare binding source='mock.course' destination_type='queue' destination='mock.completed.course' routing_key='completed'