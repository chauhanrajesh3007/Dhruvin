// write a node js script to hendale events as asked below 
// 1.check the redius wheter it is negateive or not if negative then display msg redius must be positive else calculate parameter of circle.
// 2.check the side is negative or not if negative then display msg side be positive else calculate parameter of squre.
var eventemitter =require("events")
var ee=new eventemitter()
var a=fun1=(msg)=>
    {
    if(msg<0)
    {
        ee.emit('negr')
    }
    else
    {
        var s=2*3.14*msg
        console.log('circle redius:'+s)
    }
    }
var b=fun2=(msg)=>
    {
     if(msg<0)
    {
        ee.emit('negs')
    }
    else
    {
        var s=4*msg
        console.log('squre redius:'+s)
    }
    }
ee.on('circle',fun1)
ee.on('squre',fun2)
ee.on('negr',()=>{console.log("redius is must be positive")})
ee.on('negs',()=>{console.log("side is must be positive")})
ee.emit('circle',5)
ee.emit('squre',5)