const express=require("express");

const bodyParser=require("body-parser");

const app=express();

const port=process.env.port || 5000;

//parsing the request data content type application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended:false}));

//parse request data json type data

app.use(bodyParser.json());

//response on the homepage

app.get("",(req,res)=>{
    res.send("hello world");
});

//import employee routes

const employeeRoutes=require("./src/routes/employee.route");

//import salary routes

const salaryRoutes=require("./src2/routes/salary.route");

//create a url using middle ware

app.use('/api/v1/salary',salaryRoutes);

//create a url using middle ware

app.use('/api/v1/employee',employeeRoutes);


//listening to port

app.listen(port,()=>
{
    console.log(`listening to port ${port}`);
})