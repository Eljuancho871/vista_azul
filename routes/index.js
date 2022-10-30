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

   const { cedula, motivo, fechaIngreso, horaEntrada, id } = req.body;
   let nombre = toString().req.body.nombre
   let apellido = toString().req.body.apellido
   let oficina = toString().req.body.oficina
   
   const user = new Model({ nombre, apellido, cedula, oficina, motivo, fechaIngreso, horaEntrada, id });
   await user.save();
  
   res.render("registrar", { exito: true })
})

router.get("/", async(req, res) => {

   res.render("registrar", { exito: false })
})



module.exports = router
