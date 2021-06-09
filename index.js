const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log('Error al conectar a la base de datos');
	}
	console.log('Conexion a la BD exitosa');
	app.listen(config.port, () => {
		console.log(`Servidor corriendo en puerto ${config.port}`);
	});
});
