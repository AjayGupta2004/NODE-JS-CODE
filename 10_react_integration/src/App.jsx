import { useState,useEffect } from "react"

const App = () => {
  const [employees, setEmployees] = useState([])
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [editingId, setEditingID] = useState(null)


  const fetchEmployees = () =>{
    fetch('http://localhost:3001/employees')
    .then(res => res.json())
    .then(result => { setEmployees(result.data)})
    .catch(err => console.log(err))
  }


  useEffect(()=>{
    fetchEmployees()
  }, [])

  // const addEmployee = (e) =>{
  //   e.preventDefault()

  //   fetch('http://localhost:3001/employees',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({name, department})
  //   })
  //   .then(res => res.json()) 
  //   .then(()=>{
  //     setName('')
  //     setDepartment('')
  //     fetchEmployees()
    
  //   }) 
  //   .catch(err => console.log(err))
    
  // }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const url = editingId
    ? `http://localhost:3001/employees/${editingId}`
    : `http://localhost:3001/employees`

    const method = editingId ? "PUT":"POST"

    fetch(url,{
      method,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name, department})
    }).then(res=>res.json())
    .then(result =>{
      if(!result.success){
        throw new Error(result.message) 
      }

      setName('')
      setDepartment('')
      setEditingID(null)
      fetchEmployees()
    })
  }
  
  const handleEdit = (employee)=>{
    setEditingID(employee.id),
    setName(employee.name),
    setDepartment(employee.department)
  }

  

  return (
    <div>
      <h1>Employee Management Syatem</h1>
      <p>Welcome to our Employee Dashboard</p>
      <h2>{editingId? 'Update Employee':'Add Employees'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={name} onChange={e => setName(e.target.value)} required/>
        <br /><br />
        <input type="text" placeholder="Employee Department" value={department} onChange={e => setDepartment(e.target.value)} required/>
        <br /><br />
        <button type="submit">{editingId? 'Update Employee':'Add Employees'}</button>
      </form>

      {employees.map(emp => (
        <div key={emp.id}>
          <h4>{emp.name} </h4>
          <h4>{emp.department}</h4>
          <button onClick={()=>{
            handleEdit(emp)
          }}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default App
