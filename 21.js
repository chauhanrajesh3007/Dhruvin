var fs=require("fs")
fs.writeFile('test.txt','Hello world',function(err)
{
    if(err)
        console.log('error Genreat err')
    else
        console.log(err)
        console.log('Async write opreation done')
})