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

module.exports=Salary;