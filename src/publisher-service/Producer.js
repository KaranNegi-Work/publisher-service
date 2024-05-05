const amqp = require("amqplib");
const config = require("../../configs/config");


/**
 * Steps to produce message
 * step 1 : connect to rabbitmq server 
 * step 2 : create a channel on that connection
 * step 3 : create exchange
 * step 4 : publish the message to exchange with routing key
 * 
 */

class Producer{
    channel;
    async createChannel(){
        const connection = await amqp.connect(config.rabbitMQ.url);
        this.channel = await connection.createChannel();
    }

    async callPublisher(req, res){
      await this.publishMessage(req.body.routingKey, req.body.message);
      return;
    }

    async publishMessage(routingKey, message){
         if(!this.channel){
           await this.createChannel()
         }
         const exchangeName = config.rabbitMQ.exchangeName;
         await this.channel.assertExchange(exchangeName, "direct");

         const transectionDetails = {
            logType: routingKey,
            message: message
         }
         await this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(transectionDetails)));

         console.log(`the Message ${message} is set to exchange ${exchangeName}.`)

    }
}

module.exports = Producer;