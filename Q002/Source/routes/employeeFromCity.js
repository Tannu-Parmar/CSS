const express = require('express');
const findEmployeeFromCity = require('../controllers/employeeCity');
const sameDate = require('../controllers/sameDate.js');
const employeeFromCity = express.Router();

employeeFromCity.get('/employeeFromCity', findEmployeeFromCity)
employeeFromCity.get('/date', sameDate)



module.exports = employeeFromCity;