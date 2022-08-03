const http = require("http");
const server = http.createServer((req, resp) => {
    console.log("request recieved");
    console.log(req);
    if (req.url === '/') {
        resp.write("hello world");
        resp.end();
    } else if (req.url==="api/courses"){
        resp.write("hello api");
        resp.end();
    }


    resp.write("hello");
    resp.end();
});

server.on("connection", (soket) => {
    console.log(`connection ${soket}`);
});

server.listen(3000);
console.log("started to listen");
//test