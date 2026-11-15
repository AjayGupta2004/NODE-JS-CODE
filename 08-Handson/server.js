import express from 'express'

const app = express()

app.use(express.json())
const port = 3001

const employees = [
    {id:1, name:'John', department:'IT'},
    {id:2, name:'Adam', department:'HR'}
]

app.get('/employees',(req,res)=>{
    res.status(200).json(employees)
})

app.get('/employees/:id',(req,res)=>{
    const id = Number(req.params.id)

    const employee = employees.find(emp => emp.id === id)

    if (!employee){
        return res.status(404).json({
            message:'Employee Not Found'
        })
    }

    res.status(200).json(
        employee
    )
})

app.post('/employees',(req,res) =>{
    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        department : req.body.department

    }

    employees.push(newEmployee)

    res.status(201).json(
        {
            message:'Employee Created Successfully',
            employee: newEmployee
        }

    )
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port} `)
})