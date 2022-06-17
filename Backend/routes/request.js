const {Router} = require('express');
const controller = require('../controllers/request')
const router = Router();

router.put('/updateStatus/:id', controller.updateStatus);
router.post('/requests', controller.addRequest);
router.get('/requests', controller.getRequest);
// router.get('/requests/client/:id', controller.getRequestByClientId);
router.get('/requests/runner/:runner_id', controller.getRequestByRunnerId);
router.put('/acceptRequest', controller.acceptRequest)
// router.get('/pending/:client_id',controller.getPendingRequests)

module.exports =router;