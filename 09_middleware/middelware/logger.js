function logger(req, res, next){
    console.log("Logger Executed");
    console.log("Request Method: ", req.method);
    console.log("Request Url: ", req.url);

    next()
    //checkpoint
}

module.exports = logger