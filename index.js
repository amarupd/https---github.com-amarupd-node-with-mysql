const express=require("express");

const app=express();

const port=process.env.port || 500;

app.get("",(req,res)=>{
    res.send("hello world");
});

//import employee routes

const employeeRoutes=require("./src/routes/employee.route");

//create a url using middle ware

app.use('/api/v1/employee',employeeRoutes);


//listening to port

app.listen(port,()=>
{
    console.log(`listening to port ${port}`);
})