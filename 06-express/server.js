import express from 'express'

const app = express()

// middeleware
// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next() // pass the control
// })

const accessCheck = (req, res, next) =>{
    const isAllowed = true

    if(isAllowed){
        next()
    }else{
        res.status(403).send('Forbidden')
    }
}
app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/contact',accessCheck,(req,res)=>{
    res.send('Contact Page')
})




app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})