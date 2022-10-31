var express = require('express')
var router = express.Router()
var Model = require("../model/user")
let date


router.post("/add", async(req, res) => {

   let body = req.body
   let horaPrint
   date = new Date()
   let hora = date.getHours() - 5
   
   if(hora >= 12 && hora <= 24){

      horaPrint = `${hora}:${date.getMinutes()}pm`
   }else{

      horaPrint = `${hora}:${date.getMinutes()}am`
   }

   body.fechaIngreso = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
   body.horaEntrada = `${horaPrint}`
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
