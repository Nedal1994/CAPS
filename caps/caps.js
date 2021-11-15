'use strict';

const PORT = process.env.PORT || 3000;
require('dotenv').config()
const server = require('socket.io')(PORT);
const events = require('../event-pool')

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

// We are declaring a new namespace under the caps server
// Namespaces are parts of the server, just like routes

const driver = server.of('/driver');
const vendor = server.of('/vendor');

// Global Hub ('/') -- all connection and all events goes here and every other client
server.on('connection', (socket) => {

  console.log('CONNECTED', socket.id);

  console.log('VENDOR CONNECTED', socket.id);
  socket.on('pickup', (payload) => {
    console.log('ok',payload);
    server.emit('pickup',payload)
    server.emit('delivered',payload)
  });

});
module.exports={eventHandler}