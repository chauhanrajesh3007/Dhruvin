var fs=require("fs")
fs.writeFileSync('test.txt','Hello world')
console.log('Sync write opretion done');
console.log('outside')