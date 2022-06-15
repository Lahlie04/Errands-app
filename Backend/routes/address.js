const {Router} = require('express');
const controller = require('../controllers/address')
const router = Router();

router.post('/address', controller.addAddress);
router.get('/address', controller.getAddress);

module.exports =router;