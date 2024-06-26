# RabbitMQ Event Publishing Guide
# Introduction
This guide aims to provide a comprehensive overview of how to publish events using RabbitMQ. RabbitMQ is a powerful message broker that enables efficient and reliable communication between different components of a distributed system.

# Getting Started
To begin publishing events using RabbitMQ, follow these steps:

**Install RabbitMQ:** If you haven't already, install RabbitMQ on your system. You can download it from the official website or use a package manager for your operating system.

**Setup RabbitMQ:** After installation, configure RabbitMQ according to your requirements. You may need to set up users, virtual hosts, and permissions using the RabbitMQ management interface or command-line tools.

**Choose a Programming Language:** RabbitMQ offers client libraries for various programming languages, including Python, Java, JavaScript, and more. Choose the one that best suits your project's requirements.(we are using JS in this Project)


# Publishing Events
Once you have RabbitMQ installed and configured, you can start publishing events. Here's a basic outline of the process:

**1. Establish Connection:**
Connect to RabbitMQ from your application using the appropriate client library.

**2. Create Channel:**
Create a channel on the connection you established in the last step.

**3. Declare Exchange:**
Declare an exchange on RabbitMQ. Exchanges receive messages from producers and route them to queues based on routing rules.

**4. Create Message:**
Create a message containing the event data you want to publish. Messages can be in various formats, such as JSON, XML, or plain text.

**5. Publish Message:** 
Publish the message to the exchange with a specified routing key. The routing key determines which queues receive the message.

## Run Locally

**Run the cmds**
- git clone https://github.com/KaranNegi-Work/publisher-service.git
- npm start

**Now Open Postman and hit following the API**

Method - POST

API URL - {{local-service-url}}/createEvent (localhost:3000/createEvent)

Request Body -

{
    "routingKey": "info",
    "message": "Publish Event!!"
}


# Contributing
Contributions to this guide are welcome! If you have suggestions, improvements, or additional examples, feel free to open an issue or pull request on GitHub.