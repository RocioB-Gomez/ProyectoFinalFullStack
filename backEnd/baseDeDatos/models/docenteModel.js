require('rootpath')();
const db = require('../config/config_database');

const ejecutarQuery = async (query, params) => {
    try {
        const [rows] = await db.execute(query, params);
        return rows;
    } catch (error) {
        throw new Error('Error al ejecutar la consulta: ' + error.message);
    }
};

const Docente = {
    crearDocente: async (id_docente, nombre_completo, especialidad, fk_usuario, fk_institucion) => {
        const query = 'INSERT INTO docente (id_docente, especialidad, fk_usuario, fk_institucion) VALUES (?, ?, ?, ?)';
        try {
            const [result] = await db.execute(query, [id_docente, nombre_completo, especialidad, fk_usuario, fk_institucion]);
            return { message: 'Docente creado correctamente', docenteId: result.insertId };
        } catch (error) {
            throw new Error('Error al crear docente: ' + error.message);
        }
    },

    listarTodo: async (page = 1, pageSize = 10) => {
        const offset = (page - 1) * pageSize;
        const query = 'SELECT * FROM docente LIMIT ? OFFSET ?';
        return await ejecutarQuery(query, [pageSize, offset]);
    },

    obtenerDocente: async (id) => {
        const query = 'SELECT * FROM docente WHERE id_docente = ?';
        return await ejecutarQuery(query, [id]);
    },

    modificarDocente: async (id_docente, nombre_completo, especialidad, fk_usuario, fk_institucion) => {
        const query = 'UPDATE docente SET nombre_completo = ?, especialidad = ?, fk_usuario = ?, fk_institucion = ? WHERE id_docente = ?';
        try {
            const result = await db.execute(query, [nombre_completo, especialidad, fk_usuario, fk_institucion, id_docente]);
            if (result.affectedRows === 0) {
                throw new Error(`Docente con ID ${id_docente} no encontrado`);
            }
            return { message: "Docente actualizado correctamente" };
        } catch (error) {
            throw new Error('Error al actualizar docente: ' + error.message);
        }
    },

    eliminarDocente: async (id_docente) => {
        const query = 'DELETE FROM docente WHERE id_docente = ?';
        try {
            const result = await db.execute(query, [id_docente]);
            if (result.affectedRows === 0) {
                throw new Error(`Docente con ID ${id_docente} no encontrado`);
            }
            return { message: "Docente eliminado correctamente" };
        } catch (error) {
            throw new Error('Error al eliminar docente: ' + error.message);
        }
    }
};

module.exports = Docente;
