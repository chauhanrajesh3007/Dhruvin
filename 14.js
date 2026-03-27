
//write a code using file system by sync. method(curd opt.)
//1.create one folder
//2.create one file inside that folder
//3.Append some data to taht file 
//4.Read data from that file
var fs=require("fs")
//fs.mkdirSync('C6')
//console.log("folder Created")
fs.writeFileSync("C6/182.txt","Hello C6")
console.log('file creted inside folder')
fs.appendFileSync('C6/182.txt','\nNew Content Added')
console.log('Append content in file ')
const a=fs.readFileSync('C6/182.txt','utf-8')
console.log(a)
fs.renameSync('C6/182.txt','C6/adc.txt')
console.log('Rename this file')