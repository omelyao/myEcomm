const { Router } = require('express');
const router = new Router();
const typeControler = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeControler.create);
router.get('/', typeControler.getAll);

module.exports = router;