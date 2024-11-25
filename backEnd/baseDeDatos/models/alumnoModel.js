//codigo encargado de gestionar los datos con la base de datos de los alumnos
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

const Alumno = {

    crearAlumno: async (dni, anio_ingreso, nombre, apellido, curso, fk_tutor) => {
        const query = 'INSERT INTO alumno (dni, anio_ingreso, nombre, apellido, curso, fk_tutor) VALUES (?, ?, ?, ?, ?, ?)';
        try {
            const [result] = await db.execute(query, [dni, anio_ingreso, nombre, apellido, curso, fk_tutor]);
            return { message: 'Alumno creado correctamente', alumnoId: result.insertId };  // Devolvemos el ID del nuevo alumno
        } catch (error) {
            throw new Error('Ha ocurrido un error al intentar ingresar los datos del alumno nuevo: ' + error.message);
        }
    },
   
   
    listarTodo: async (page = 1, pageSize = 10) => {
        const offset = (page - 1) * pageSize;
        const query = 'SELECT * FROM alumno LIMIT ? OFFSET ?';
        return await ejecutarQuery(query, [pageSize, offset]);
   },
    
    obtenerPorCurso: async (curso) => {
        const query = 'SELECT * FROM alumno WHERE curso = ?';
        return await ejecutarQuery(query, [curso]);
   },


    obtenerPorDni: async (dni) => {
    const query = 'SELECT * FROM alumno WHERE dni = ?';
    return await ejecutarQuery(query, [dni]);
    },
    
    obtenerAlumno: async (dni) => {
        const query = 'SELECT * FROM alumno WHERE dni = ?';
        try {
            const [rows] = await db.execute(query, [dni]);
            return rows;
        } catch (error) {
            throw new Error('No existe ningun alumno con ese DNI: ' + error.message);
        }
    },
    modificarAlumno: async (dni, anio_ingreso, nombre, apellido, curso) => {
        const query = 'UPDATE alumno SET anio_ingreso = ?, nombre = ?, apellido = ?, curso = ? WHERE dni = ?';
        try {
            const result = await db.execute(query, [anio_ingreso, nombre, apellido, curso, dni]);
            if (result.affectedRows === 0) {
                const error = new Error(`No se encontraron cambios para el alumno con el DNI: ${dni}`);
                error.statusCode = 404;
                throw error;
            }
            return { message: "Alumno actualizado con éxito", detail: result };
        } catch (error) {
            if (!error.statusCode) error.statusCode = 500;  // Aseguramos que siempre haya un código de estado
            throw error;
        }
    },
   
    eliminarAlumno: async (dni) => {
        try {
            const query = 'DELETE FROM alumno WHERE dni = ?';
            const result = await db.execute(query, [dni]);
   
            if (result.affectedRows === 0) {
                const error = new Error(`No se encontró el alumno con el DNI: ${dni}`);
                error.statusCode = 404;
                throw error;
            }
   
            return { message: "Alumno eliminado con éxito", detail: result };
   
        } catch (error) {
            if (!error.statusCode) error.statusCode = 500;  // Aseguramos que siempre haya un código de estado
            throw error;
        }
    }
   
};

module.exports = Alumno;
