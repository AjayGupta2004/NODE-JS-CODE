import express from 'express'
import studentRouter from './Router/studentsRouter.js'


const app = express()

app.use('/',studentRouter)

// app.get('/',(req,res) =>{
//     res.send('Welcome to the Home Page')
// })

// app.get('/about',(req,res) =>{
//     res.send('This is About Page')
// })

// app.get('/students',(req,res)=>{
//     res.send('Student List')
// })

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})