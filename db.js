var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://juan:echidna0@cluster0.jm0kfw5.mongodb.net/?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

module.exports = mongoose;