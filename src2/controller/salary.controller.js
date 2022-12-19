const Salary=require("../model/salary.model");
exports.getSalary=(req,res)=>{
    console.log('here are the details of salary table');
    Salary.getSalary((err,salary)=>{
        if(err)
        res.send(err);
        console.log("salary details are",salary);
        res.send(salary);
    })
}



