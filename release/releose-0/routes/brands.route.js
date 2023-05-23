
const { Router } = require('express');
const { brandsController } = require('../controlles/brands.contoller');
const router = Router();

router.get('/brands', (req, res) => {
	res.send('dfgdfdgf1')
});
router.post('/brands', (req, res) => {
	res.send('sdsdggfsfg2')
});
router.delete('/brands', (req, res) => {
	res.send('fgdfdgfdgd3')
});
router.get('/brands', brandsController.getBrands);
router.post('/brands', brandsController.createBrands);
router.delete('/brands/:id', brandsController.deleteBrands);
module.exports = router;