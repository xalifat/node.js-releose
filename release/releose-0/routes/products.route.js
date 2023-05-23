
const { Router } = require("express");

const router = Router();
const { productsController } = require('../controlles/products.controller');

router.get("/products", (req, res) => {
  res.send('MacBook')
});
router.get("/products/:id", (req, res) => {
  res.send(`Apple ${req.params.id}`)
});

router.delete("/products/:id", (req, res) => {
  res.send(`Apple-Mac ${req.params.id}`)
})

router.get('/products', productsController.getProducts);
router.post('/products', productsController.createProducts);
module.exports = router;