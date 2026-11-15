let employees = [
    { id: 101, name: 'ajay', department: 'IT'},
    { id: 102, name: 'alex', department: 'HR'}
]

const getAllEmployees = () =>{
    return employees
}

const getEmployeeByID = (id) =>{
    return employees.find( emp => emp.id === id)
}

const addEmployee = (employee) =>{
    employees.push(employee)
    return employee
}

module.exports = {
    getAllEmployees, 
    getEmployeeByID, 
    addEmployee
}
