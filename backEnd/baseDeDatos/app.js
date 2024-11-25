// app.js

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");


// Configuración CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5174', // Permitir solo el frontend de Vite
  methods: 'GET,POST,PUT,DELETE',  // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization' // Encabezados permitidos
}));

// Middleware para procesar JSON y formularios URL codificados
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura morgan para registrar solicitudes HTTP con formato personalizado
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// Cargar configuración desde el archivo config.json
const configuracion = require("./config/config.json");

// Importar controlador de alumnos
const alumnoController = require("./controllers/alumnoController.js");
app.use("/alumno", alumnoController);  // Usar el router de alumnoController


// Importar controlador de usuario
const usuarioController = require("./controllers/usuarioController.js");
app.use("/usuario", usuarioController);  // Usar el router de alumnoController

const docenteController = require("./controllers/docenteController.js");
app.use("/docente", docenteController);  // Usar el router de docenteController



// Página de inicio
app.get("/", (req, res) => {
  res.send("Hola soy la página de inicio");
});

// Iniciar servidor
app.listen(configuracion.server.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Servidor encendido y escuchando en el puerto " + configuracion.server.port);
  }
});
