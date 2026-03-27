var fs=require("fs")
fs.writeFile('desti.txt','Hii',(err)=>{
    fs.readFile('desti.txt',(err,D2)=>{console.log(D2.toString())})
})