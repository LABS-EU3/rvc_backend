const db = require("../../../database/dbConfig");

function validator(email){
    const lowerCaseEmail = String(email).toLowerCase()
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(lowerCaseEmail);
}

function validateEmail(req, res, next){
    if(!req.body.email || validator(req.body.email)){
        next();
    } else {
        res.status(400).json({error: `${req.body.email} is not a valid email`})
    }
}

module.exports = { validateEmail };
