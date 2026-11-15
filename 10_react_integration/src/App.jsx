import { useState,useEffect } from "react"

const App = () => {
  const [employees, setEmployees] = useState([])
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const fetchEmployees = () =>{
    fetch('http://localhost:3001/employees')
    .then(res => res.json())
    .then(result => { setEmployees(result.data)})
    .catch(err => console.log(err))
  }


  useEffect(()=>{
    fetchEmployees()
  }, [])

  const addEmployee = (e) =>{
    e.preventDefault()

    fetch('http://localhost:3001/employees',{
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name, department})
    })
    .then(res => res.json()) 
    .then(()=>{
      setName('')
      setDepartment('')
      fetchEmployees()
    
    }) 
    .catch(err => console.log(err))
    
  }
  

  return (
    <div>
      <h1>Employee Management Syatem</h1>
      <p>Welcome to our Employee Dashboard</p>
      <h2>Add Employee</h2>
      <form onSubmit={addEmployee}>
        <input type="text" placeholder="Employee Name" value={name} onChange={e => setName(e.target.value)} required/>
        <br /><br />
        <input type="text" placeholder="Employee Department" value={department} onChange={e => setDepartment(e.target.value)} required/>
        <br /><br />
        <button type="submit">Add Employees</button>
      </form>

      {employees.map(emp => (
        <div key={emp.id}>
          <h4>{emp.name} </h4>
          <h4>{emp.department}</h4>
        </div>
      ))}
    </div>
  )
}

export default App
