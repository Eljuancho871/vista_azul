const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    id: Number,
    fechaIngreso: String,
    horaEntrada: String,
    nombre: String,
    apellido: String,
    cedula: String,
    oficina: String,
    motivo: String
}, {
        versionKey: false
})

const User = mongoose.model('User', userSchema);

module.exports = User;