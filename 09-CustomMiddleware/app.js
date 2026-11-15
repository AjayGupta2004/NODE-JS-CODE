import express from 'express'
import requestLogger from './middleware.js'

const app = express()

app.use(requestLogger);

app.get('/',(req,res) =>{
    res.send('Home');
})

app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})