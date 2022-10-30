var express = require('express')
var router = express.Router()
var Model = require("../model/user")
const xl = require("excel4node");
const path = require('path');


router.get("/", async(req, res) => {

    var data = await Model.find()

    var contador = 1
    let wb = new xl.Workbook()
    let ws = wb.addWorksheet("Datos de registros - Vista Azul")

    let style = wb.createStyle({

        font: {
            color: "red",
        }
    })

    ws.cell(1,1).string("Id").style(style)
    ws.cell(1,2).string("Nombre").style(style)
    ws.cell(1,3).string("Apellido").style(style)
    ws.cell(1,4).string("Cedula").style(style)
    ws.cell(1,5).string("Autorizacion").style(style)
    ws.cell(1,6).string("Motivo").style(style)
    ws.cell(1,7).string("Fecha Ingreso").style(style)
    ws.cell(1,8).string("Hora Ingreso").style(style)

    data.forEach((el) => {

        contador += 1
        ws.cell( contador , 1 ).string(el.id.toString())
        ws.cell( contador , 2 ).string(el.nombre)
        ws.cell( contador , 3 ).string(el.apellido)
        ws.cell( contador , 4 ).string(el.cedula)
        ws.cell( contador , 5 ).string(el.oficina)
        ws.cell( contador , 6 ).string(el.motivo)
        ws.cell( contador , 7 ).string(el.fechaIngreso)
        ws.cell( contador , 8 ).string(el.horaEntrada)
    })


    //Descargando excel

    const pathExcel = path.join(__dirname, 'registros_vista_azul.xlsx')
    
    wb.write(pathExcel, function(err, stats) {
    
        if(err){
            console.log(err);
        }else{
    
            function downloadFile(){
    
                res.download(pathExcel)
            }
            downloadFile()
            return false
        }
    })

})


module.exports = router