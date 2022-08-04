//https://www.npmjs.com/package/express
const { response } = require('express');
const express = require ('express');
const app= express();
app.use(express.json());
require("dotenv").config();

const courses=[{ name: "Web", id: 1001 }, { name: "Rest", id: 1002 }, { name: "Angular", id: 1003 }, 
{ name: "Micro Services", id: 1004 }];

//https://expressjs.com/en/4x/api.html#app.get.method
app.get('/',(req, resp)=>{
 resp.send("Hello World From Express")
});

app.get('/api/courses',(req, resp)=>{
    resp.send(courses);
   });  

app.put('/api/courses',(req, resp)=>{
    resp.send(courses);
   });  
app.post('/api/courses', (req, resp) => { 
    // console.log("post course body")
    // console.log(req.body);
    const course={
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    resp.send(course);
   });

app.get('/api/course/:id', (req, resp) => {
    console.log(`id:${req.params.id}`);
    // console.log(`name:${req.params.name}`);
    console.log(req.query);
    // const res= courses.filter((c)=> {return c.id===req.params.id;});
    // console.log(`result:${res.toString()}`);
    // resp.send(res[0]);

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        resp.status(404).send("Böyle bir kurs yok gülüm");
    else{
        resp.send(course);
        console.log(` course: ${course.name}`);
    }
   });


   console.log ("env:");
   console.log(process.env.KUB);
   const port = process.env.PORT || 3000
   app.listen(port, ()=>{
       console.log(`listening port ${port}`);
    })
// app.post();
// app.put();
// app.delete();