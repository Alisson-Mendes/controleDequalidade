const session = require("express-session")
const User = require('../models/User')



function loggerUserDataMiddle(req, res, next){

   const matriculalIncookie = req.cookies.matricula
   const userFromCookie = User.findUserByField('matricula', matriculalIncookie)
    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }

    if(req.session.userLogged){
        res.locals.isLogged = true
        res.locals.nome = req.session.userLogged

    }else{
        res.locals.isLogged = false
        res.locals.nome = req.session.userLogged
    }



next()

}

module.exports = loggerUserDataMiddle