//https://www.npmjs.com/package/express
const express = require ('express');
const app= express();

//https://expressjs.com/en/4x/api.html#app.get.method
app.get('/',(req, resp)=>{
 resp.send("Hello World From Express")
});

app.listen(3000, ()=>{
    console.log ("listening port 3000");
})
// app.post();
// app.put();
// app.delete();