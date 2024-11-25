const express = require('express');
const router = express.Router();
const model = require('../models/usuarioModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { rulesUser, validate } = require('../middleware/validations.js');

// ----------------------------------------------------------
// -- Rutas de escucha (endpoint) disponibles para USUARIO --
// ----------------------------------------------------------

router.post('/login', login);
router.post('/', rulesUser(), validate, crear_usuario);
router.get('/', listar_usuarios);
router.get('/rol', listar_rol);
router.get('/:usuario_id', buscarPorID);
router.put('/:usuario_id', actualizar_usuario);
router.delete('/:usuario_id', eliminar_usuario);

// -------------------------------------------------------------- 
// -- funciones utilizadas por el router  ----------------------- 
// --------------------------------------------------------------


async function login(req, res) {
    try {
        const { mail, contraseña } = req.body;
        const result = await model.buscarPorMail(mail);
        const iguales = bcrypt.compare(contraseña, result.contraseña);
        if (iguales) {
            let user = {
                nombre: result.nombre,
                apellido: result.apellido,
                mail: result.mail,
                rol: result.rol
            }
            jwt.sign(user, 'secretPass', { expiresIn: '10000s' }, (err, token) => {
                if (err) {
                    res.status(500).send({ message: err });
                } else {
                    res.status(200).json({ datos: user, token: token });
                }
            })
        } else {
            res.status(403).send({ message: 'Contraseña Incorrecta' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function crear_usuario(req, res) {
    const { mail, pass, persona_id } = req.body;
    try {
        const result = await model.crear_usuario(mail, pass, persona_id);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function listar_usuarios(req, res) {
    try {
        const results = await model.listar_usuarios();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function listar_rol(req, res) {
    try {
        const results = await model.listar_rol();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function buscarPorID(req, res) {
    const { usuario_id } = req.params;
    try {
        const result = await model.buscarPorID(usuario_id);
        if (result.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function actualizar_usuario(req, res) {
    const { usuario_id } = req.params;
    const { mail, pass, persona_id } = req.body;
    try {
        await model.actualizar_usuario(usuario_id, mail, pass, persona_id);
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function eliminar_usuario(req, res) {
    const { usuario_id } = req.params;
    try {
        await model.eliminar_usuario(usuario_id);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = router;