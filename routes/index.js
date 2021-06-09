const express = require('express');
const productController = require('../controllers/product');
const userController = require('../controllers/user');
const auth = require('../middlewares/auth');
const user = require('../models/user');
const api = express.Router();


api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.post('/product', productController.saveProduct)	
api.put('/product/:productId', productController.updateProduct);
api.delete('/product/:productId', productController.deleteProduct);
api.post('/sigup', userController.signUp);
api.post('/siging', userController.signIn);
//Prueba de autenticacion con token
api.get('/private', auth, (req,res) =>{
    res.status(200).send({message: 'Tienes acceso'});
})

module.exports = api;