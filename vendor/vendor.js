'use strict';

const events = require('../event-pool');
const faker = require('faker')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const vendorConnection = io.connect(host);

const storeName = '1-206-flowers'
vendorConnection.on('delivered',deliveredOrder)

function deliveredOrder(payload)
{
    console.log(`Vendor: Thank you for ordering ${payload.orderId}`);
}
// emit means alert or notification
setInterval(() => {
    let order={
        Store: storeName,
        orderId: faker.datatype.uuid(),
        Customer: faker.name.findName(),
        Address: faker.address.streetAddress()
    }
    events.emit('pickup' ,order)
    vendorConnection.emit('pickup' ,order)
}, 10000);

module.exports=deliveredOrder