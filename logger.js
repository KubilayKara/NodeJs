url = "";
const EventEmitter = require("events");
// const emitter = new EventEmitter();

class Logger extends EventEmitter
{
    
    constructor()
    {
        super();
        
    }
    log(message){

        console.log(message);
        this.emit("LogBitti",{evenName:"log işi tamamdır", eventId:"1"});
    }
}
module.exports = Logger;
