function sayHello(){
    global.console.log("hello world 3");
}

sayHello();

console.log(module);

 const lgr= require("./logger.js");
lgr("module test");

const pth=require("path");
console.log(pth);

const fs= require("fs");
files= fs.readdirSync(".")

function readdirCallBack(error,file)
{
    if(error)
    console.log(`Error: ${err}`);
    else 
    console.log(`success: ${files}`);
}

fs.readdir(".",readdirCallBack)
console.log(files);