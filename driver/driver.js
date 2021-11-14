'use strict'

const events = require('../event-pool')


function pickup(payload)
{
    setTimeout(()=>{
        console.log(`Driver: Picked up ${payload.orderId}`);
        events.emit('in-transit',payload)
    },2000)

    setTimeout(()=>{
        console.log(`Driver: delivered  ${payload.orderId}`);
        events.emit('delivered',payload)
    },2000)
}
module.exports=pickup