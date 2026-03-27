// write a node Js Script to write the text "you are creating a file"to help.txt file.
//append the txt"you are appending data" to help.txt read the file and print file content on console
// After finishing the read opretion,print the line"Thanks for using my program" on console.
// write,append,read must be in sequence.perform all opretion using Async.
var fs=require("fs")
fs.writeFile('help.txt','Hello',(err)=>{if(err) throw err;})
fs.appendFile('help.txt','\nyou are appending data',(err)=>{if(err) throw err})
fs.readFile('help.txt',(err,help)=>{if(err) throw err;console.log(help.toString());console.log('Thanks for using my program')})
