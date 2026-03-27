// write a node js progar. using a event module to demonstarte
// 1.registering multiple event lisners for different events(myevent1,myevent2)
// 2.removing a specific event listner for myevent2
// 3.removing all listners associated myevent1
// 4.trigering events and observe which listner are going to execute

const e=require('events')
const ee=new e()
var fun1=(msg)=>{console.log('Message from fun1:'+msg)};
var fun2=(msg)=>{console.log('Message from fun2:'+msg)};
ee.on('Myevent1',fun1)
ee.on('Myevent2',fun2)
ee.on('Myevent1',fun1)
ee.on('Myevent2',fun2)

ee.removeListener('Myevent2',fun2)
ee.removeAllListeners('Myevent1')
ee.emit('Myevent2','LJ University')
ee.emit('Myevent1','LJU')