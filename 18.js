//write a node js script and json to perform the task 
//1.write object in text file name s2.txt read data of the same file and perform the below task
//a.addition of a and b 
//b.subtraction of second element of c[1] and b(must be positive value)
//c.multiplication element of c
//3.add the output of addition,subtraction and multiplication in s2.txt file
var fs=require("fs")
const a={d:{a:10,b:20,c:[30,10]}}
const b=JSON.stringify(a)
fs.writeFileSync('s2.txt',b)
const c=a.d.a+a.d.b
console.log(c)
const d=Math.abs(a.d.c[1]-a.d.b)
console.log(d)
const e=a.d.c[0]*a.d.c[1]
console.log(e)
fs.appendFileSync('s2.txt','\n add:'+c)
fs.appendFileSync('s2.txt','\n sub:'+d)
fs.appendFileSync('s2.txt','\n multi:'+e)
const f=c+d+e
fs.appendFileSync('s2.txt','\n add all element:'+f)