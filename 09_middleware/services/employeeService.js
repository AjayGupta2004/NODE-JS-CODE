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

const updateEmployee = (id, updatedData) =>{
    const index = employees.findIndex(employee => employee.id === Number(id))

    if (index === -1){
        return null
    }

    employees[index] = {
        ...employees[index],
        ...updatedData
    }

    return employees[index]
}

const deleteEmployee = (id) =>{
    const index = employees.findIndex(employees => employees.id === Number(id))
    if (index === -1){
        return null
    }
    return employees.splice(index , 1)[0]
}

module.exports = {
    getAllEmployees, 
    getEmployeeByID, 
    addEmployee,
    updateEmployee,
    deleteEmployee
}
