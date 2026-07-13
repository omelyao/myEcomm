
const { Router } = require('express');
const router = new Router();
const brandControler = require('../controllers/brandController')
router.post('/', brandControler.create);

router.get('/', brandControler.getAll);

module.exports = router;