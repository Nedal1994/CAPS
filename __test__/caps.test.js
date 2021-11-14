'use stict'

const { eventHandler } = require('../caps')
const events = require('../event-pool')

describe('Caps',()=>{
    require('../caps')
    it('Pickup must work',()=>{
       let test= eventHandler()
        expect(test).toEqual(true)
    })
    it('In transit must work',()=>{
        let test =events.emit('in-transit',payload)
        expect(test).toEqual(true)
    })
    it('Delivered must work',()=>{
        let test =events.emit('delivered',payload)
        expect(events.emit('delivered',payload)).toEqual(true)
    })

})