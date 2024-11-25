//codigo encargado de gestionar los datos con la base de datos de los alumnos
require('rootpath')();
const db = require('../config/config_database');


const Alumno = {

    crearAlumno: async (dni, anio_ingreso, nombre, apellido, curso) => {
        const query = 'INSERT INTO alumno (dni, anio_ingreso, nombre, apellido, curso) VALUES (?, ?, ?, ? ,?)';
        try {
            await db.execute(query, [dni, anio_ingreso, nombre, apellido, curso]);
        } catch (error) {
            throw new Error('Ha ocurrido un error al intentar ingresar los datos del alumno nuevo: ' + error.message);
        }
    },
   
    listarTodo: async () => {
        try {
            const query = 'SELECT * FROM alumno';
            const [rows] = await db.execute(query);
            return rows;
        } catch (error) {
            throw new Error('Error al obtener la lista de alumnos: ' + error.message);
        }
    },
    
    obtenerPorCurso: async (curso) => {
        const query = 'SELECT * FROM alumno WHERE curso = ?';
        try {
            const [rows] = await db.execute(query, [curso]);
            return rows;
        } catch (error) {
            throw new Error('Parece que no hay alumnos en ese curso: ' + error.message);
        }
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
            const result = await db.execute(query, [dni, anio_ingreso, nombre, apellido, curso]);
            if (result.affectedRows === 0) {
                const error = new Error(`No se pudieron modificar los datos del alumno con el DNI: ${dni}`);
                error.statusCode = 404;
                throw error;
            }
            return { message: "Alumno actualizado con exito", detail: result };
        } catch (error) {
            throw new Error('Error al actualizar al alumno: ' + error.message);
        }
    },

    eliminarAlumno: async (dni) => {
        try {
            const query = 'DELETE FROM alumno WHERE dni = ?';
            const result = await db.execute(query, [dni]);

            if (result.affectedRows === 0) {
                const error = new Error(`No se encontro al alumno con el DNI: ${dni}`);
                error.statusCode = 404;
                throw error;
            }

            return { message: "Alumno eliminado con exito", detail: result }

        } catch (error) {
            throw new Error('Error al eliminar al alumno: ' + error.message);
        }
    }
};

module.exports = Alumno;
