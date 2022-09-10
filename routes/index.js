var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */

router.get('/', indexController.home);
router.get('/login', indexController.login);
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




module.exports = router;
