//routing all the modules for apis
const express=require("express");
const router=express.Router();
const employeeController=require("../controller/employee.controller");

// creating routing for all employee

router.get("",employeeController);
module.exports=router;