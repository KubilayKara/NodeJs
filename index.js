//https://www.npmjs.com/package/express
const express = require ('express');
const app= express();

//https://expressjs.com/en/4x/api.html#app.get.method
app.get('/',(req, resp)=>{
 resp.send("Hello World From Express")
});

app.get('/api/courses',(req, resp)=>{
    resp.send([{ name: "Web", id: "1001" }, { name: "Rest", id: "1002" }, { name: "Angular", id: "1003" }, { name: "Micro Services", id: "1004" }])
   });

app.listen(3000, ()=>{
    console.log ("listening port 3000");
})
// app.post();
// app.put();
// app.delete();