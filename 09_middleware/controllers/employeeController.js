const employeeService = require('../services/employeeService')
const { 
    sendSuccess,
    sendError
} = require('../utils/responseHandler')

const getEmployees = (req, res) =>{
    const employees = employeeService.getAllEmployees()
    sendSuccess(res, "Employees Fetched Successfully", employees)
}

const getEmployeeByID = (req, res) =>{
    const id = Number(req.params.id)

    const employee = employeeService.getEmployeeByID(id)

    if(!employee){
        return sendError(res, "Employee Not Found", 404)
    }

    sendSuccess(res, "Employee Fetched Successfully", employee)
}

const addEmployee = (req, res) =>{
    const newEmployee = {
        id: Date.now(),
        name: req.body.name,
        department: req.body.department
    }

    const employee = employeeService.addEmployee(newEmployee)
    sendSuccess(res, "Employee Created Successfully", employee, 201)
}

module.exports = {
    getEmployees, 
    getEmployeeByID, 
    addEmployee
}
