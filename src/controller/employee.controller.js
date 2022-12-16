const Employee = require("../models/employee.model");
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