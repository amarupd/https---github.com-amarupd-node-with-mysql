var dbConn = require("../../config/db.config");
var Employee = (employee) => {
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
    dbConn.query('SELECT*FROM EMPLOYEES', (err, data) => {
        if (err) {
            console.log("error fetching the data from sql", err);
            res(null, err);
        }
        console.log("employees details fetched succesfully");
        res(null, data);
    });
}


module.exports=Employee;