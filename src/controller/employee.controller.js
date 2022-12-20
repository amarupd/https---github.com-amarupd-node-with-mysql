const EmployeeModel = require("../models/employee.model");

//get all the employee list
exports.getEmployeeList = (req, res) => {
    // console.log("here all employee list");
    EmployeeModel.getAllEmployees((err, employee) => {
        console.log("we are here");
        if (err) { res.send(err); }
        console.log("Employee details are here ", employee);
        res.send(employee);
    })
}

//get employee by id

exports.getEmployeeByID = (req, res) => {
    //console.log("get employee by id");
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        console.log("single employee details", employee);
        res.send(employee);

    })
}

//create new employee


exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: 'please fill all the fields' });
    }
    else {
        console.log("valid data");
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json({ status: true, message: "Employee created succesfully", data: employee });

        })
    }
}

//update employee details in employee table

exports.updateEmployee = (req, res) => {
    const employeeReqData = new Employee(req.body)
    console.log('employeeReqData update', employeeReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: 'please fill all the fields' });
    }
    else {
        console.log("valid data");
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json({ status: true, message: "Employee updated succesfully"});

        })
    }
}

//delete data from employee table

exports.deleteEmployee = (req, res) => {
    //console.log("get employee by id");
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ status: true, message: "Employee deleted succesfully"});

    })
}