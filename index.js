const express = require("express")
const app = express()
const cors = require("cors");
const path = require("path")

require('./db');

//SETTING

app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views") )
app.set("view engine", "ejs")


//MIDEWLARES

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


//ROUTES

app.use("/", require("./routes/inicio.js"))
app.use("/registrar", require("./routes/index.js"))
app.use("/consultar",  require("./routes/consultar.js"))
app.use("/excel",  require("./routes/excel.js"))

app.use("*", (req, res) => res.render("404"))

//LANZAMIENTO SERVIDOR

app.listen(app.get("port"), () => console.log("Servidor corriendo en puerto", app.get("port")))

module.exports = app;