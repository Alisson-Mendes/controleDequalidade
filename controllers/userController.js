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

    

    profile: (req, res) => {
        res.render('profile')
    },
    cadastroUsuario: (req, res) => {
        res.render('cadastroDeUsuario')
    },

    processResgister: (req, res) => {

        
        console.log(req.body.email)
       
        let userExists = User.findUserByField('email', req.body.email) 

        console.log(userExists)

        if(userExists){
            return res.render('cadastroDeUsuario', {falhaUsuario:'este usuario ja existe'})
         }

       let userToCreate = {
           ...req.body,
           senha: bcrypt.hashSync(req.body.senha, 10),
           
       }

       let usercreated =  User.create(userToCreate)


        res.send("funcionou")
    },


}



  
  module.exports = controlador; 