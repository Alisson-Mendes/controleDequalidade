var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
const userController = require('../controllers/userController')
const upload = require('../middlewares/multer_midd')
const loggedUserMiddleware = require('../middlewares/loggedUserMiddle')
const AdminUserMiddleware = require('../middlewares/adminUserMiddle')
const notLoggerUserMiddle = require('../middlewares/notLoggerUserMiddle')


/* GET home page. */

router.get('/', indexController.home);


//rota de operações
router.get('/1', function(req, res, next) {
    res.render('2');
  })

router.get('/precisaEstarLogado', indexController.precisaEstarLogado);
router.get('/acessoNegado', indexController.acessoNegado);

router.get('/oba',notLoggerUserMiddle, indexController.oba);
router.get('/obaOk',notLoggerUserMiddle, indexController.obaOk);

router.get('/operacoes',notLoggerUserMiddle, indexController.operacoes);
router.get('/pedidos',notLoggerUserMiddle, indexController.pedidos);

router.get('/adrp',notLoggerUserMiddle, indexController.adrp);
router.get('/adrpOk',notLoggerUserMiddle, indexController.adrpOk);

router.get('/leilao',notLoggerUserMiddle, indexController.leilao);
router.get('/leilaoOk',notLoggerUserMiddle, indexController.leilaoOk);

router.get('/vistoria',notLoggerUserMiddle, indexController.vistoria);


router.get('/vistoriaMonitor',notLoggerUserMiddle, indexController.vistoriaMonitor);
router.get('/vistoriaMonitorOK',notLoggerUserMiddle, indexController.vistoriaMonitorOK);

//rotas do estoque
router.get('/estoque',notLoggerUserMiddle, indexController.estoque);

//rotas do administrativo
router.get('/administrativo',notLoggerUserMiddle, indexController.administrativo);


//rotas para processo de login
router.get('/cadastroUsuario',loggedUserMiddleware, userController.cadastroUsuario);
router.post('/cadastroUsuario',upload.single('foto_de_perfil', ), userController.processResgister);
router.get('/perfil', userController.perfil);
router.get('/login',loggedUserMiddleware, userController.login); 
router.post('/login', userController.loginProcess); 
router.get('/logout', userController.logout);

module.exports = router; 
