// write a node js script to copy conents of one file to anothor file.data should be fatch from source.txt and insert to destintion.txt.read data from destination file the end.perform all this task asyn.
var fs=require("fs")
fs.writeFile('Source.txt','Hello',(err)=>{if(err) throw err;console.log("make source file")})
fs.readFile('Source.txt',(err,Source)=>{if(err) throw err;console.log(Source.toString())})
fs.appendFile('Source.txt','/n New Data Added',(err)=>{if(err) throw err;console.log("append source file")})