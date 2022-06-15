const {Router} = require('express');
const controller = require('../controllers/users')
const router = Router();



    router.post('/clients', controller.addClient);
router.post('/runner', controller.addRunner);

router.get('/clients', controller.getClient);
router.post('/clients/login', controller.clientLogin);
router.get('/clients/:id', controller.getClientById);
router.delete('/clients/:id', controller.removeClient);
router.get('/clients/login/:email', controller.getClientByEmail);

module.exports =router;