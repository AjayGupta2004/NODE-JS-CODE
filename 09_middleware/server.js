const express = require("express")
const logger = require("./middelware/logger")
const employeeRoutes = require('./routes/employeeRoutes')
const errorHandler = require('./middelware/errorHandler')
const helmet = require('helmet')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// app.use(logger)

// app.get('/', (req, res) =>{
//     console.log("Welcome to Employee Management API");
//     res.send("Welcome to Employee Management API")
// })

// app.get('/employees', (req, res) =>{
//     res.send('Employee List')
// })


// multiple Middlewares
// app.use((req, res, next) =>{
//     console.log("Middleware 1");
//     next()
// })
// app.use((req, res, next) =>{
//     console.log("Middleware 2");
//     next()
// })

// app.use((req, res, next) =>{
//     console.log("Middleware 3");
//     next()
// })
// app.use((req, res, next) =>{
//     console.log("Middleware 4");
//     next()
// })

//application level middleware

app.use((req, res, next) =>{
    console.log("Application Level Middleware");
    next()
})

//path level middeware

app.use('/employees', (req, res, next) =>{
    console.log("Path level middleware");
    next()
})

//mounting my router
app.use('/employees', employeeRoutes)

app.get('/', (req, res)=>{
    // console.log("All Middlewares Executed");
    res.send("Welcome to Employee Management API")
})

app.use(errorHandler)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

