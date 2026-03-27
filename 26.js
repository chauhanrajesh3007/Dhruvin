var os=require('path')

p1=os.dirname('D:/path/path.txt')
console.log(p1)

p2=os.basename('D:/path/path.txt')
console.log(p2)

p3=os.extname('D:/path/path.txt')
console.log(p3)

p4=os.parse('D:/path/path.txt')
console.log(p4)

if(p4.ext==".txt")
{
    console.log("Text Document")
}
else
{
    console.log("not a text document")
}