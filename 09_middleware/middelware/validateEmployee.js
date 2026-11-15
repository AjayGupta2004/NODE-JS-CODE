function validateEmployee(req, res, next){
    const { name, department } = req.body

    if( !name || !department){
        const error = new Error("Name and Department are Required")
        error.status = 400;
        next(error)
    }

    next()
}

module.exports = validateEmployee