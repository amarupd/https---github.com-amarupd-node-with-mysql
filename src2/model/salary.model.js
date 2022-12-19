var dbConn=require('../../config/db.config');

var Salary=function(salary){
    this.basesal=salary.basesal;
    this.pf=salary.pf;
    this.gross=salary.gross;
}

//get all salary details here

Salary.getSalary=(res)=>{
    dbConn.query('SELECT * FROM salary',(err, data)=>{
        if(err){
            console.log('error fetching the data',err);
            res(null,err);
        }
        console.log('salary details are fetched succesfully');
        res(null,data);
    });
}

//get salary by id

Salary.getSalaryById=(id,res)=>{
    dbConn.query('SELECT * FROM salary WHERE ID=?',id,(err, data)=>{
        if(err){
            console.log('error fetching the data by id',err);
            res(null,err);
        }
        console.log('salary by id details are fetched succesfully');
        res(null,data);
    });
}

//inserting salaries inside the table

Salary.createSalary=(salaryreq,res)=>{
    dbConn.query('INSERT INTO SALARY SET?',salaryreq,(err,data)=>{
        if(err)
        {
            console.log('error inserting data into the table');
            res(null,err);
        }
        console.log('data inserted into the table');
        res(null,data);
    });
}

//updating the salary table

Salary.updateSalary=(id,salaryReqData,res)=>{
    dbConn.query('UPDATE SALARY SET basesal=?,pf=?,gross=? where id=?',[salaryReqData.basesal,salaryReqData.pf,salaryReqData.gross,id],(err,data)=>{
        if(err)
        {
            console.log("error while updating the records");
            res(null,err);
        }
        else{
            console.log('salary updated succesfullyy');
            res(null,data);
        }
    });
}

// Employee.updateEmployee = (id,employeeReqData,res)=>{
//     dbConn.query(`UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? WHERE id = ?`,
//     [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary,employeeReqData.status, id],(err,data)=>{
//                 if(err)
//                 {
//                     console.log("error while updating the records");
//                     res(null,err);
//                 }
//                 else{
//                     console.log('employeee updated succesfullyy');
//                     res(null,data);
//                 }
//         });
//}

module.exports=Salary;