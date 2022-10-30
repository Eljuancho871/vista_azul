var express = require('express')
var router = express.Router()
var Model = require("../model/user")


router.post("/add", async(req, res) => {

   let body = req.body
   let date = new Date()
   body.fechaIngreso = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
   body.horaEntrada = `${date.getHours()}:${date.getMinutes()}`
   let data = await Model.find()
   body.id = data.length + 1

   const { nombre, apellido, cedula, oficina, motivo, fechaIngreso, horaEntrada, id } = req.body;

   const user = new Model({ nombre: nombre.toLowerCase(), apellido: apellido.toLowerCase(), cedula, oficina: oficina.toLowerCase(), motivo: motivo.toLowerCase(), fechaIngreso, horaEntrada, id });
   await user.save();
  
   res.render("registrar", { exito: true })
})

router.get("/", async(req, res) => {

   res.render("registrar", { exito: false })
})



module.exports = router
