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

const updateEmployee = (req,res, next) =>{
    try{
        const updatedEmployee = employeeService.updateEmployee(
            req.params.id,
            req.body
        )

        if(!updatedEmployee){
            return res.status(404).json({
                success : false,
                message : 'Employee Not Found'
            })
        }
        sendSuccess(res, "Employee Updated Successfully", updatedEmployee)

    } catch(error){
        next(error)
    }
}
const deleteEmployee = (req,res,next) =>{
    try{
        const deletedEmployee = employeeService.deleteEmployee(req.params.id)

        if(!deletedEmployee){
            return res.status(404).json({
                    success: false,
                    message: "Employee Not Found"
            })
        }

        sendSuccess(res, 'Employee Deleted Successfully', deletedEmployee)
    }catch(error){
        next(error)
    }
}


module.exports = {
    getEmployees, 
    getEmployeeByID, 
    addEmployee,
    updateEmployee,
    deleteEmployee
}
