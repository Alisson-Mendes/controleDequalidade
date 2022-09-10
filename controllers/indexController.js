
        function pegarDataBR(){
            let data = new Date()
            let dia = String(data.getDate()).padStart(2, '0') 
            let mes = data.getMonth() + 1
            let ano = data.getFullYear()
            return [dia, mes, ano]
        }

const controlador = {
    home: (req, res) => {
        res.render('home')
    },

    login: (req, res) => {
        res.render('login')
    },
    oba: (req, res) => {
         let dataAtual =  pegarDataBR()
        res.render('oba', {data: dataAtual})
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
    }
    
  }
  
  module.exports = controlador;