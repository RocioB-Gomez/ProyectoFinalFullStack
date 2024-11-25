// alumnoController.js

const express = require('express');
const router = express.Router();
const model = require('../models/alumnoModel.js').default;

const { alumnoRules, validate } = require('../middleware/validations.js');
// -------------------------------------------------------- 
// --rutas de escucha (endpoint) disponibles para ALUMNO --- 
// --------------------------------------------------------

router.post('/', alumnoRules(), validate, crearAlumno);
router.get("/", listarTodo);
router.get("/:curso", obtenerPorCurso);
router.get('/:dni', obtenerAlumno);
router.put("/:dni", modificarAlumno);
router.delete("/:dni", eliminarAlumno);


// --------------------------------------------------------
// --------- FUNCIONES UTILIZADAS EN ENDPOINTS -------------
// --------------------------------------------------------

async function crearAlumno(req, res) {
    const { dni, anio_ingreso, nombre, apellido, curso } = req.body;
    try {
        await model.crearAlumno(dni, anio_ingreso, nombre, apellido, curso);
        res.status(201).json({ message: 'Alumno creado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function listarTodo(req, res) {
    try {
        const results = await model.listarTodo();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function obtenerPorCurso(req, res) {
    const { curso } = req.params;
    try {
        const results = await model.obtenerPorCurso(curso);
        if (results.length === 0) {
            return res.status(404).json({ message: 'No hay alumnos en este curso' });
        }
        res.status(200).json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function obtenerAlumno(req, res) {
    const { dni } = req.params;
    try {
        const results = await model.obtenerAlumno(dni);
        if (results.length === 0) {
            return res.status(404).json({ message: 'No hay ningun alumno con ese DNI' });
        }
        res.status(200).json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function modificarAlumno(req, res) {
    const { dni } = req.params;
    const { anio_ingreso, nombre, apellido, curso} = req.body;
    try {
        await model.modificarAlumno(dni, anio_ingreso, nombre, apellido, curso);
        res.status(200).json({ message: 'Alumno actualizado correctamente' });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).send(error.message);
    }
}

async function eliminarAlumno(req, res) {
    const { dni } = req.params;
    try {
        const result = await model.eliminarAlumno(dni);

        res.status(200).json({ message: 'Alumno eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = router;
