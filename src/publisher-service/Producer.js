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
      // connect to rabbitmq server 
        const connection = await amqp.connect(config.rabbitMQ.url);
        // create a channel on that connection
        this.channel = await connection.createChannel();
    }

    async callPublisher(req, res){
      await this.publishMessage(req.body.routingKey, req.body.message);
      return;
    }

    async publishMessage(routingKey, message){
      //checking if channel exist or not 
      //if already existing then we will not create channel again and again
         if(!this.channel){
           await this.createChannel()
         }
         const exchangeName = config.rabbitMQ.exchangeName;
        //  create exchange
         await this.channel.assertExchange(exchangeName, "direct");

         const transectionDetails = {
            logType: routingKey,
            message: message
         }
        //  publish the message to exchange with routing key
         await this.channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(transectionDetails)));

         console.log(`The Message ${message} is sent to exchange ${exchangeName}.`)

    }
}

module.exports = Producer;