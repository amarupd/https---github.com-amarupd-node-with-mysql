var dbConn = require("../../config/db.config");
var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organisation = employee.organisation;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}


//get all the employee

Employee.getAllEmployees = (res) => {
    dbConn.query('SELECT * FROM EMPLOYEES ', (err, data) => {
        if (err) {
            console.log("error fetching the data from sql", err);
            res(null, err);
        }
        console.log("employees details fetched succesfully");
        res(null, data);
    });
}

//get employee by id from database


Employee.getEmployeeByID = (id, res) => {
    dbConn.query('SELECT*FROM EMPLOYEES WHERE ID=?', id, (err, data) => {
        if (err) {
            console.log("error fetching the data by id from sql", err);
            res(null, err);
        }
        console.log("employees details fetched succesfully");
        res(null,data);
    });
}


// inserting data into the table or new employee details


Employee.createEmployee=(employeeReqData,res)=>{
    dbConn.query('INSERT INTO EMPLOYEES SET ?',employeeReqData,(err,data)=>{
        if(err){
            console.log("error putting the data");
            res(null,err);
        }
        console.log("data inserted succesfully 👍");
        res(null, data);
    });

}

module.exports = Employee;