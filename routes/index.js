var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */

router.get('/', indexController.home);
router.get('/login', indexController.login);
router.get('/precisaEstarLogado', indexController.precisaEstarLogado);

router.get('/oba', indexController.oba);
router.get('/obaOk', indexController.obaOk);

router.get('/operacoes', indexController.operacoes);
router.get('/pedidos', indexController.pedidos);

router.get('/adrp', indexController.adrp);




module.exports = router;
