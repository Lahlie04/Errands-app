const {Router} = require('express');
const controller = require('../controllers/request')
const router = Router();

router.put('/updateStatus/:id', controller.updateStatus);
router.post('/requests', controller.addRequest);
router.get('/requests', controller.getRequest);
router.get('/requests/client/:client_id', controller.getRequestByClientId);
router.get('/requests/runner/:runner_id', controller.getRequestByRunnerId);
// router.get('/pending/:client_id',controller.getPendingRequests)

module.exports =router;