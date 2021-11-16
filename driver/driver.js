'use strict'

// const events = require('../event-pool')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const driverConnection = io.connect(`${host}`);

driverConnection.on('driver', driverHandler);
driverConnection.on('pickup', pickup);

function driverHandler(payload) {
  console.log(`Driver is delivering order number ${payload.orderId}`);
}

function pickup(payload)
{
        console.log(`Driver: Picked up ${payload.orderId}`);
        driverConnection.emit('in-transit',payload)

        console.log(`Driver: delivered  ${payload.orderId}`);
        driverConnection.emit('delivered',payload)

        driverConnection.emit('get_all')
        driverConnection.on('message-delivered',message=>{
        console.log('The message is received');
        driverConnection.emit('received',message)
        })
}


module.exports={driverHandler,pickup}