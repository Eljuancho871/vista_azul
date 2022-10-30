var express = require('express')
var router = express.Router()
var Model = require("../model/user")


router.get("/", (req, res) => {

    res.render("consultar", { data: null })
})


router.post("/", async(req, res) => {

    const { datoRecibido, tipo } = req.body
    let data

    switch (tipo.toLowerCase()) {
        case "cedula":
            
            data = await Model.find({ "cedula" : datoRecibido.toLowerCase() }).sort({$natural:-1})
            break;

        case "nombre":
            
            data = await Model.find({ "nombre" : datoRecibido.toLowerCase() }).sort({$natural:-1})
            break;

        case "apellido":
            
            data = await Model.find({ "apellido" : datoRecibido.toLowerCase() }).sort({$natural:-1})
            break;
 
        case "motivo":
            
            data = await Model.find({ "motivo" : datoRecibido.toLowerCase() }).sort({$natural:-1})
            break;
    
        case "oficina":
            
            data = await Model.find({ "oficina" : datoRecibido.toLowerCase() }).sort({$natural:-1})
            break;

        case "fechaIngreso":
            
            data = await Model.find({ "fechaIngreso" : datoRecibido.toString() }).sort({$natural:-1})
            break;

        case "horaEntrada":
            
            data = await Model.find({ "horaEntrada" : datoRecibido.toString() }).sort({$natural:-1})
            break;

        default:
            break;
    }

    res.render("consultar", { data: data })
})


router.get("/datos", async(req, res) => {

    let data = await Model.find().sort({$natural:-1})
    res.json(data)
})

module.exports = router
