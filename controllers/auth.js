const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services');

//Funcion de registro
function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
    });

    user.save((err)=>{
        if(err) return res.status(500).send({message: `Error al crear usuario`});

        return res.status(200).send({ token: service.createToken(user) })
    })
}

function signIn(req, res) {

}

module.exports = {
    signUp, 
    signIn
}
