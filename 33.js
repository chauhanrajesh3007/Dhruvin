// write a node js script to handle event to write event to file append the data to the same file then read data from then file and dispaly the data on console.
var eventemitter =require("events")
var ee=new eventemitter()
var fs=require('fs')
ee.on('write',()=>{fs.writeFileSync("D6.txt","Hello")
ee.emit("append")

})
ee.on('append',()=>{fs.appendFileSync("D6.txt","C6")

})
ee.on('read',()=>{fs.readFileSync("D6.txt",utf-8)})
ee.emit('write')
ee.emit('append')