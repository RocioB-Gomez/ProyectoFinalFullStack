const express = require('express');
const router = express.Router();
const Docente = require('../models/docenteModel');

// Crear un docente
router.post('/crear', async (req, res) => {
    const { id_docente, nombre_completo, especialidad, fk_usuario, fk_institucion } = req.body;
    try {
        const result = await Docente.crearDocente(id_docente, nombre_completo, especialidad, fk_usuario, fk_institucion);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todos los docentes (paginado)
router.get('/', async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    try {
        const docentes = await Docente.listarTodo(page, pageSize);
        res.json({ detail: docentes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un docente por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const docente = await Docente.obtenerDocente(id);
        if (docente.length === 0) {
            return res.status(404).json({ message: 'Docente no encontrado' });
        }
        res.json(docente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Modificar un docente
router.put('/modificar/:id', async (req, res) => {
    const { id } = req.params;
    const { especialidad,nombre_completo,  fk_usuario, fk_institucion } = req.body;
    try {
        const result = await Docente.modificarDocente(id, nombre_completo, especialidad, fk_usuario, fk_institucion);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminar un docente
router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Docente.eliminarDocente(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
