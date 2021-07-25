# MOCK SERVICE 

`Mocked microservice for testing purpose`

## To consume,
* Install postgres@12 in your local machine
* Install rabbitmq@3.8 in your local machine
* Clone this repository to your local machine
* Run `sh init.sh true`. The `true` param will install all the node dependencies freshly. This will setup the db schema and queue for the service and start the service.
After the first time, you need not pass `true` param. 