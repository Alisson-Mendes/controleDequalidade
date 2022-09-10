
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
        res.render('home')
    },

    login: (req, res) => {
        res.render('login')
    },
    oba: (req, res) => {
         let dataAtual =  pegarDataBR()
         let horaAtual = pegarHoraBR()

        res.render('oba', {data: dataAtual, hora: horaAtual})
    },
    obaOk: (req, res) => {
        res.render('obaOk')
    },
    operacoes: (req, res) => {
        res.render('operacoes')
    },
    precisaEstarLogado: (req, res) => {
        res.render('precisaEstarLogado')
    },
    pedidos:(req, res) => {
        res.render('pedidos')
    },
    adrp:(req, res) =>{
        let dataAtual =  pegarDataBR()
        res.render('adrp', {data: dataAtual})
    },
    leilao:(req, res) =>{
        let dataAtual =  pegarDataBR()
        res.render('leilao', {data: dataAtual})
    }
    
  }
  
  module.exports = controlador;