var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
const userController = require('../controllers/userController')
const upload = require('../middlewares/multer_midd')

/* GET home page. */

router.get('/', indexController.home);
router.get('/login', indexController.login);

//rota de teste
router.get('/login2', function(req, res, next) {
    res.render('login2');
  })

router.get('/precisaEstarLogado', indexController.precisaEstarLogado);

router.get('/oba', indexController.oba);
router.get('/obaOk', indexController.obaOk);

router.get('/operacoes', indexController.operacoes);
router.get('/pedidos', indexController.pedidos);

router.get('/adrp', indexController.adrp);
router.get('/adrpOk', indexController.adrpOk);

router.get('/leilao', indexController.leilao);
router.get('/leilaoOk', indexController.leilaoOk);


//rotas para processo de login

router.get('/profile', userController.profile);
router.get('/cadastroUsuario', userController.cadastroUsuario);
router.post('/cadastroUsuario',upload.single('foto_de_perfil', ), userController.processResgister);


module.exports = router;
