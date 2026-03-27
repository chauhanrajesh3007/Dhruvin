// write a node js script to write an array of object with property name and age in a file name Student.txt.then read the file and display the object on console.
var fs=require("fs")
const a=[{'name':'Dhruvin','Age':19}]
let c=JSON.stringify(a)
fs.writeFileSync("Student.txt",c)
const x=JSON.parse(c)
const b=fs.readFileSync('Student.txt','utf-8')
console.log(b)
