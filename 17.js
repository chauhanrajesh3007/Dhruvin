// Create json object which contens array of object name,shape.Calculate parameter of squre and circle by using side value and dayameter value respectly.write object as well as parameter values of squre and circle in shape.txt file.
var fs=require("fs")
const a=[{name:"Squre",sides:4},{name:'Circle',d:40}]
let c=JSON.stringify(a)
fs.writeFileSync("Shape.txt",c)
const x=JSON.parse(c)
const b=fs.readFileSync('Shape.txt','utf-8')
console.log(b)
const z=x[0].sides*4
const g=(x[1].d/2)*2*3.14
console.log(z)
console.log(g)
fs.appendFileSync('Shape.txt','\n parameter of Squre:'+z)
fs.appendFileSync('Shape.txt','\n parameter of Circle:'+g)
