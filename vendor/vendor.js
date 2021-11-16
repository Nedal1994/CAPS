'use strict';

// const events = require('../event-pool');
const faker = require('faker')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
// const vendorConnection = io.connect(host);  // lab 12

const socket = io.connect(host)

// const storeName = '1-206-flowers'
socket.on('delivered',deliveredOrder)

function deliveredOrder(payload)
{
    console.log(`Vendor: Thank you for ordering ${payload.orderId}`);
}
// emit means alert or notification

// lab 12
// setInterval(() => {
//     let order={
//         Store: storeName,
//         orderId: faker.datatype.uuid(),
//         Customer: faker.name.findName(),
//         Address: faker.address.streetAddress()
//     }
//     events.emit('pickup' ,order)
//     vendorConnection.emit('pickup' ,order)
// }, 10000);

// lab 13
setTimeout(() => {
    let store1={
        Store: 'acme-widgets',
        orderId: faker.datatype.uuid(),
        Customer: faker.name.findName(),
        Address: faker.address.streetAddress()
    }
    socket.emit('pickup' ,store1)
    socket.emit('new_message' ,store1)
 
    socket.on('message',payload=>{
        console.log('Received an order', payload);
        socket.emit('received',payload)
    })   
    socket.on('added',payload=>{
        console.log('Thank you for adding the order to the queue ',payload);
        socket.disconnect();
    })
}, 1000);

setInterval(() => {
    let store2={
        Store: '1-800 flowers',
        orderId: faker.datatype.uuid(),
        Customer: faker.name.findName(),
        Address: faker.address.streetAddress()
    }
    socket.emit('pickup' ,store2)
    socket.emit('new_message' ,store2)

    socket.on('message',payload=>{
        console.log('Received an order', payload);
        socket.emit('received',payload)
    })   
    socket.on('added',payload=>{
        console.log('Thank you for adding the order to the queue ',payload);
        socket.disconnect();
    })
}, 1000);

module.exports=deliveredOrder