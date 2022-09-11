
function pegarDataBR(){
    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0') 
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    return [dia, mes, ano]
}

function pegarDataBRAtual(){
    let data = new Date().toLocaleDateString()
    //let hora = String(data.geth  ).padStart(2, '0') 
    // let minito = data.getMonth() + 1
    // let segundo = data.getFullYear()

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

    

const controlador = {
    home: (req, res) => {
        res.render('home',{usuariologado: req.session.userLogged})
    },

    oba: (req, res) => {
         let dataAtual =  pegarDataBR()
         let horaAtual = pegarHoraBR()


 

        res.render('oba', {data: dataAtual, hora: horaAtual,usuariologado: req.session.userLogged})
    },
    obaOk: (req, res) => {
        res.render('obaOk',{usuariologado: req.session.userLogged})
    },
    operacoes: (req, res) => {
        console.log(req.cookies.matricula)
        res.render('operacoes',{usuariologado: req.session.userLogged})
    },
    precisaEstarLogado: (req, res) => {
        res.render('precisaEstarLogado',{usuariologado: req.session.userLogged})
    },
    pedidos:(req, res) => {

        res.render('pedidos',{usuariologado: req.session.userLogged})
    },
    adrp:(req, res) =>{
        let dataAtual =  pegarDataBR()
        let horaAtual = pegarHoraBR()
        res.render('adrp', {data: dataAtual, hora: horaAtual, usuariologado: req.session.userLogged})
    },
    adrpOk:(req, res) =>{

        res.render('adrpOk',{usuariologado: req.session.userLogged})
    },

    leilao:(req, res) =>{
        let dataAtual =  pegarDataBR()
        let horaAtual = pegarHoraBR()
        res.render('leilao', {data: dataAtual, hora: horaAtual, usuariologado: req.session.userLogged})
    },
    leilaoOk:(req, res) =>{

        res.render('leilaoOk',{usuariologado: req.session.userLogged})
    },

    estoque:(req, res) =>{

        res.render('login',{usuariologado: req.session.userLogged})
    },
    administrativo:(req, res) =>{

        res.render('login',{usuariologado: req.session.userLogged})
    }
    
  }
  
  module.exports = controlador; 