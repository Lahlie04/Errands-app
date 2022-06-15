const {Router} = require('express');
const controller = require('../controllers/review')
const router = Router();


router.get('/earnings/:runner_id', controller.getRunnerEarnings);
router.get('/total/:runner_id', controller.getTotal);

router.get('/getReviews/:runner_id', controller.getReviews);
router.get('/totalRating/:runner_id', controller.totalRating);
router.post('/rateServices', controller.rateServices);

module.exports =router;