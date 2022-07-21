const http= require("http");
const server =http.createServer((req,resp)=>{
    console.log("request recieved");
    console.log(req);

    resp.write("hello");
    resp.end();
});

server.on("connection", (soket)=>{
    console.log(`connection ${soket}`);
});

server.listen(3000);
console.log("started to listen");