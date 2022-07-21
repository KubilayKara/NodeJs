// function sayHello(){
//     global.console.log("hello world 3");
// }

// sayHello();

// console.log(module);

//  const lgr= require("./logger.js");
// lgr("module test");

// const pth=require("path");
// console.log(pth);

// const fs= require("fs");
// files= fs.readdirSync(".")

// function readdirCallBack(error,file)
// {
//     if(error)
//     console.log(`Error: ${err}`);
//     else 
//     console.log(`success: ${files}`);
// }

// fs.readdir(".",readdirCallBack)
// console.log(files);

const EventEmitter=require("events");
const emitter= new EventEmitter();
emitter.on("LogGeldi",(args)=>{
    console.log(`Vallaha da geldi. name:${args.evenName} id:${args.eventId}`);
});

emitter.emit("LogGeldi",{evenName:"balam", eventId:"1"});