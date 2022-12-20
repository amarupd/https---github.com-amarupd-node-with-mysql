//routing all the modules for apis
const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employee.controller");

// creating routing for all employee

router.get("", employeeController.getEmployeeList);

//get employee by id routing

router.get("/:id", employeeController.getEmployeeByID);

//joining two tables

router.get("/join/:id", employeeController.getEmployeeByJoin);

//create new employee by routing

router.post("/", employeeController.createNewEmployee);

// update employee by id

router.put("/:id", employeeController.updateEmployee);

// delete employee by id

router.delete("/:id", employeeController.deleteEmployee);


module.exports = router;