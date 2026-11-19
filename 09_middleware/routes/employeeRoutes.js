const express = require('express')
const validateEmployee = require('../middelware/validateEmployee')


const {
    getEmployees,
    getEmployeeByID,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController')

const router = express.Router()

router.use((req, res, next) =>{
    console.log("Router-level Middleware");
    next()
})

router.get('/', getEmployees)

router.post('/', validateEmployee, addEmployee)

router.put('/:id', validateEmployee, updateEmployee)

router.delete('/:id', deleteEmployee)

router.get('/:id', getEmployeeByID)

module.exports = router