import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to the Home Page')
})

router.get('/about',(req,res)=>{
    res.send('This is About Page')
})

router.get('/students',(req,res)=>{
    res.send('Students List')
})

router.get('/students/:id',(req,res)=>{
    res.send(`Student id: ${req.params.id}`)
})

export default router