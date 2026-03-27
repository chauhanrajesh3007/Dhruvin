// write a node js progaram using the event module to simulet a squince of event
// 1.when a "connection" event occurs,print "connection" succesfuly and trigar a "data-received" event.
// 2.when the data event occurs,print "data-received" succesfully.
// 3.finally print "thanks" end of execution.

const e=require('events')
const ee=new e()
ee.on('connection',()=>
    {
        console.log("connection succesfully")
        ee.emit("data-received")
        console.log('thanks')
    })
ee.on('data-received',()=>
    {
        console.log("data-received succesfully")
    
    })
ee.emit('connection')