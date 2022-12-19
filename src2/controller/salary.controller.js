const Salary=require("../model/salary.model");
exports.getSalary=(req,res)=>{
    console.log('here are the details of salary table');
    Salary.getSalary((err,salary)=>{
        if(err)
        res.send(err);
        console.log("salary details are",salary);
        res.send(salary);
    });
}

exports.getSalaryById=(req,res)=>{
    Salary.getSalaryById(req.params.id,(err,salary)=>{
        if(err)
        res.send(err);
        console.log("salary by id",salary);
        res.send(salary);
    });
}


exports.createSalary=(req,res)=>{
    const salaryReq=new Salary(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: 'please fill all the fields' });
    }
    else{
        console.log('valid data');
        Salary.createSalary(salaryReq,(err,salary)=>{
            if(err)
            console.log(err);
            console.log('salary added successfully');
            res.json({ status: true, message: "salary created succesfully", data: salary });
        });
    }
}

// salary update

exports.updateSalary = (req, res) => {
    const salaryReqData = new Salary(req.body)
    console.log('salaryReqData update', salaryReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: 'please fill all the fields' });
    }
    else {
        console.log("valid data");
        Salary.updateSalary(req.params.id, salaryReqData, (err, salary) => {
            if (err) {
                res.send(err);
            }
            res.json({ status: true, message: "salary updated succesfully"});

        });
    }
}

//salary deletion

exports.deleteSalary = (req, res) => {
    //console.log("get employee by id");
    Salary.deleteSalary(req.params.id, (err, salary) => {
        if (err)
            res.send(err);
        res.json({ status: true, message: "salary deleted succesfully"});

    })
}



