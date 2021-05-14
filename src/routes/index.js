const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.get('/', async (req, res) => {
  // console.log(productos);
  res.render('index');
});

router.post("/", async (req, res)=>{
  const { nombre, precio } = req.body;
  const newProduct = new Producto({ nombre, precio});
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
})
  
router.get('/about', async (req, res)=>{
  res.render('about')
});

router.get('/contact', async (req, res)=>{
  res.render('contact')
});

router.get('/jsonProducts', async (req, res)=>{
  const productos = await Producto.find();
  res.status(201).json(productos);
});

router.get('/result', async (req, res)=>{
  const productos = await Producto.find();
  res.render('result', {
    productos
  });
});

router.get('/products', async (req, res)=>{
  const productos = await Producto.find();
  res.render('products', {
    productos
  });
});


module.exports = router;