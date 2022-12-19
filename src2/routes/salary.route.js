const express = require("express");
const router = express();
const salaryController = require("../controller/salary.controller");


// get salary

router.get("", salaryController.getSalary);

//get salary by id

router.get('/:id',salaryController.getSalaryById);

//creating salaries

router.post("",salaryController.createSalary);

//updating the salary table

router.put("/:id",salaryController.updateSalary);


module.exports = router;