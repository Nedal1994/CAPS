'use strict'

const events = require('./event-pool')

require('./driver/driver')
require('./vendor/vendor')

events.on('pickup',(payload)=>{
    eventHandler('pickup',payload)
})
events.on('in-transit',(payload)=>{
    eventHandler('transit',payload)
})
events.on('delivered',(payload)=>{
    eventHandler('delivered',payload)
})

function eventHandler(event,payload)
{
    console.log('Event',(event,payload));
}

module.exports={eventHandler}