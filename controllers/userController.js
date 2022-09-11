const User = require('../models/User')
const fs = require("fs")
const usuariosJson = require('../database/user.json')
const bcrypt = require('bcrypt')


function pegarDataBR(){
    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0') 
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    return [dia, mes, ano]
}
console.log(pegarDataBR())

function pegarDataBRAtual(){
    let data = new Date().toLocaleDateString()
    return [data]
}
console.log(pegarDataBRAtual())


function pegarHoraBR(){
    let data = new Date() 
    let hora =  String(data.getHours()).padStart(2, '0') 
    let minuto =  String(data.getMinutes()).padStart(2, '0') 
    let segundo =  String(data.getSeconds()).padStart(2, '0') 

    return [hora, minuto, segundo]
}
console.log(pegarHoraBR())



//inicio dos controladores
const controlador = {

    cadastroUsuario: (req, res) => {
        //res.cookie('teste', 'ola gente', {maxAge:10000}) //1000=1segundo /10000=10segundo
        res.render('cadastroDeUsuario')
    },

    processResgister: (req, res) => {
       
        let userExists = User.findUserByField('email', req.body.email) 
        let MatriculaExists = User.findUserByField('matricula', req.body.matricula)

        console.log(userExists)

        if(userExists != undefined || MatriculaExists != undefined){
            return res.render('cadastroDeUsuario', {falhaUsuario:'Este usuario ja existe'})
         }

       let userToCreate = {
           ...req.body,
           senha: bcrypt.hashSync(req.body.senha, 10),
       }

       let usercreated =  User.create(userToCreate)

       return res.redirect("/login")
    },

    perfil: (req, res) => {
        res.render('perfil',{usuariologado: req.session.userLogged})
    },

    login: (req, res) => {
      //console.log(req.cookies.teste)

       res.render('login')
    }, 

    loginProcess: (req, res) => {

      

        let userTologin = User.findUserByField('matricula', req.body.matricula)
        if(userTologin){
          let isPasswordVerified =  bcrypt.compareSync(req.body.senha, userTologin.senha)

            if(isPasswordVerified){
                delete userTologin.senha
                req.session.userLogged = userTologin

                if(req.body.lembrarUsuario){
                    //res.cookie('matricula', req.body.matricula, {maxAge: (1000 * 60) * 30  })//(1000 * 60) é igual a 1 minuto \\ e  60 * 30 é igual a 30 minutos
                    res.cookie('matricula', req.body.matricula, {maxAge: (1000 * 60) * 30 })
                }


                return res.redirect('/operacoes')
            }          
        } 
        res.render('login',{falhaLogin:'Usuario ou senha incorreta', })
    },
    logout: (req, res) => {
        res.clearCookie('matricula')
        req.session.destroy()
        
        return res.redirect('/')
     }, 
 
    


    






}



  
  module.exports = controlador; 