const express = require("express");
const router = express();
const salaryController = require("../controller/salary.controller");


// get salary

router.get("/", salaryController.getSalary);


module.exports = router;