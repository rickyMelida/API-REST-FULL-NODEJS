'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	name: String,
	picture: String,
	price: { type: Number, default: 0 },
	category: { type: String, enum:['computers', 'phone', 'accesories'] },
	description: String
});

// En el caso de la categoria solo se va a almacenar unos de los tres valores, en el caso de que no sea ninguno de ellos no se va a almacenar

module.exports = mongoose.model('Product', ProductSchema);
