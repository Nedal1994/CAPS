'use strict';

const events = require('../event-pool');
const faker = require('faker')

const storeName = '1-206-flowers'
events.on('delivered',deliveredOrder)

function deliveredOrder()
{
    console.log(`Vendor: Thank you for ordering ${payload.orderId}`);
}


setInterval(() => {
    let order={
        Store: storeName,
        orderId: faker.datatype.uuid(),
        Customer: faker.name.findName(),
        Address: faker.address.streetAddress()
    }
    events.emit('pickup' ,order)
}, 2000);

module.exports=deliveredOrder