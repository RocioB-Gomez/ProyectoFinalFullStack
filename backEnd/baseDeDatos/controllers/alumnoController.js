// alumnoController.js

const express = require('express');
const router = express.Router();
const model = require('../models/alumnoModel.js');

const { alumnoRules, validate } = require('../middleware/validations.js');
// -------------------------------------------------------- 
// --rutas de escucha (endpoint) disponibles para ALUMNO --- 
// --------------------------------------------------------

router.post('/crear', alumnoRules(), validate, crearAlumno);
router.get("/", listarTodo);
router.get("/:curso", obtenerPorCurso);
router.get("/alumno/dni/:dni", obtenerPorDni); 
router.get('/:dni', obtenerAlumno);
router.put("/:dni", modificarAlumno);
router.delete("/:dni", eliminarAlumno);


// --------------------------------------------------------
// --------- FUNCIONES UTILIZADAS EN ENDPOINTS -------------
// --------------------------------------------------------

async function crearAlumno(req, res) {
    const { dni, anio_ingreso, nombre, apellido, curso, fk_tutor } = req.body;
    try {
        const result = await model.crearAlumno(dni, anio_ingreso, nombre, apellido, curso, fk_tutor);
        
        // Crear una respuesta con el mensaje y los datos del nuevo alumno
        const newAlumno = {
            id_alumno: result.alumnoId,  // ID generado al insertar el alumno
            dni: dni,
            anio_ingreso: anio_ingreso,
            nombre: nombre,
            apellido: apellido,
            curso: curso,
            fk_tutor: fk_tutor
        };

        // Responder con el mensaje y los datos del nuevo alumno
        res.status(201).json({
            message: 'Alumno creado correctamente',
            alumno: newAlumno  // Aquí devolvemos todos los datos del alumno creado
        });
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
        res.status(200).json(results);  // Devuelve todos los resultados
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function obtenerPorDni(req, res) {
    const { dni } = req.params;
    try {
        const results = await model.obtenerPorDni(dni);
        if (results.length === 0) {
            return res.status(404).json({ message: 'No hay alumnos con este DNI' });
        }
        res.status(200).json(results);  // Asegúrate de que los resultados sean devueltos en formato JSON
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
        res.status(200).json(results);  // Devuelve todos los resultados
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function modificarAlumno(req, res) {
    const { dni } = req.params;
    const { anio_ingreso, nombre, apellido, curso } = req.body;
    try {
        const result = await model.modificarAlumno(dni, anio_ingreso, nombre, apellido, curso);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No se encontró un alumno con ese DNI para actualizar' });
        }
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
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No se encontró un alumno con ese DNI para eliminar' });
        }
        res.status(200).json({ message: 'Alumno eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}




module.exports = router;
