const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {	
	res.send(200, {products: []});
});

app.get('/api/product/:productId', (req, res) => {
	
});

app.post('/api/product', (req, res) => {
	console.log(req.body);
	res.send(200, {message: 'El producto ha sido recibido'});
});

app.put('/api/product/:productId', (req, res)=> {

});

app.delete('/api/product/:productId', (req, res) => {

});


app.listen(PORT, ()=>{
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
