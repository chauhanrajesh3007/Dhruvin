// Async Programing
var fs=require("fs")
fs.writeFile('D2.txt','Hello',(err)=>{if(err) throw err;console.log("Write opretion perform")})
fs.readFile('D2.txt',(err,D2)=>{if(err) throw err;console.log(D2.toString(Source))})
fs.appendFile('D2.txt','/n New Data Added',(err)=>{if(err) throw err;console.log("append opretion perform")})
fs.rename('D2.txt','d2.txt',(err)=>{if(err) throw err;console.log("rename opretion perform")})
fs.unlink('d2.txt',(err)=>{if(err) throw err;console.log("unlink opretion perform")})
// fs.mkdir('c6-1',(err)=>{if(err) throw err;console.log("unlink opretion perform")})