
const controlador = {
    home: (req, res) => {
        res.render('home')
    },

    login: (req, res) => {
        res.render('login')
    },
    oba: (req, res) => {
        res.render('oba')
    },
    obaOk: (req, res) => {
        res.render('obaOk')
    },
    operacoes: (req, res) => {
        res.render('operacoes')
    }
  }
  
  module.exports = controlador;