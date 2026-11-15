const express = require('express')
const validateEmployee = require('../middelware/validateEmployee')


const {
    getEmployees,
    getEmployeeByID,
    addEmployee
} = require('../controllers/employeeController')

const router = express.Router()

router.use((req, res, next) =>{
    console.log("Router-level Middleware");
    next()
})

router.get('/', getEmployees)

router.post('/', validateEmployee, addEmployee)

router.get('/:id', getEmployeeByID)

module.exports = router