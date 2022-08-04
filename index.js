//https://www.npmjs.com/package/express
const express = require ('express');
const app= express();
require("dotenv").config();

//https://expressjs.com/en/4x/api.html#app.get.method
app.get('/',(req, resp)=>{
 resp.send("Hello World From Express")
});

app.get('/api/courses',(req, resp)=>{
    resp.send([{ name: "Web", id: "1001" }, { name: "Rest", id: "1002" }, { name: "Angular", id: "1003" }, { name: "Micro Services", id: "1004" }]);
   });


   console.log ("env:");
   console.log(process.env.KUB);
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log (`listening port ${port}`);
})
// app.post();
// app.put();
// app.delete();