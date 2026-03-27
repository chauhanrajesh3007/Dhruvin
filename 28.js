const e=require('events')
const ee=new e()
ee.on('start',(s,e)=>
    {
        console.log(`started from ${s} to ${e}`)
    })
ee.emit('start',1,100)