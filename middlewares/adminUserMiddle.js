function AdminUserMiddleware(req, res, next){

    if(!req.session.userLogged.acesso == 5){

        
        return res.redirect('/')
    }

    next()
}

module.exports = AdminUserMiddleware