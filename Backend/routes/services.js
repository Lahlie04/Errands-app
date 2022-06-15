const {Router} = require('express');
const controller = require('../controllers/services')
const router = Router();




router.get('/services', controller.getServices);
//router.get('/services/:id', controller.getServiceById);
router.post('/services', controller.addServices);
router.delete('/services/:id',controller.deleteService)

module.exports =router;