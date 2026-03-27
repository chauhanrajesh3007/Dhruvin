// write a node js script to create two listners for a comman event.print no. of event assciated 
// remove one of the listners and call removing llistners agalin.also print no.of remening listners comman event
var eventemitter =require("events")
var ee=new eventemitter()
var fun1=(msg)=>
    {
        console.log("no. of event :"+msg)

    }
var fun2=(msg)=>{console.log("no. of event :"+msg)}
ee.on('myevent1',fun1)
ee.on('myevent1',fun2)
let count=ee.listenerCount("myevent1")
console.log("count 1:"+count)
ee.emit("myevent1",'LJU')
ee.removeListener('myevent1',fun1)
let count1=ee.listenerCount("myevent1")
console.log("count 2:"+count1)
ee.emit("myevent1",'LJU')

