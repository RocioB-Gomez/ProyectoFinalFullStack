const db = require('../config/config_database');
const bcrypt = require('bcrypt');


const Usuario = {

    //registrarse como usuario
    crear_usuario: async (mail, contraseña, nombre, apellido) => {
        const hashedPass = await bcrypt.hash(contraseña, 10); // Hasheamos la contraseña y reemplazamos pass por hashedPass
        //let textoHashed = bcrypt.hashSync("texto a encriptar",10);
        try {
            const params = [mail, hashedPass, nombre, apellido];
            const consulta = 'INSERT INTO usuario (mail, contraseña, nombre, apellido) VALUES (?, ?, ?, ?)';
            const result = await db.execute(consulta, params);
            return { message: `Usuario ${mail} creado con exito como ${rol}`, detail: result };
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new Error('Existe un usuario con los mismos datos: ' + error.message);
            } else if (error.code === 'ER_BAD_NULL_ERROR') {
                throw new Error('La columna no puede ser nula: ' + error.message);
            } else if (error.code === 'ER_NO_REFERENCED_ROW') {
                throw new Error(' Falla en la restricción de clave externa.: ' + error.message);
            } else {
                throw new Error('No se pudo registrar al usuario debido a: ' + error.message);
            }
        }
    },

    //LISTAR USUARIOS

    listar_usuarios: async () => {
        const query = 'SELECT * FROM usuario';
        try {
            const [rows] = await db.execute(query);
            return rows;
        } catch (error) {
            throw new Error('Error al obtener los usuarios: ' + error.message);
        }
    },

    //LISTAR POR ROL

    listar_rol: async () => {
        const query = 'SELECT * FROM usuario WHERE rol = ?';
        try {
            const [rows] = await db.execute(query);
            
            if (rows.length === 0) {
                throw new Error(`Usuarios no encontrados con rol: ${mail}`);
            }
            return rows;
            
        } catch (error) {
            throw new Error('Error al obtener usuarios por rol' + error.message);
        }
    },
    
    
    //un metodo que utiliza la funcion del login para saber si existe ese usuario o no

    buscarPorMail: async (mail) => {
        try {
            // Ejecuta la consulta
            const [rows] = await db.execute(
                 'SELECT u.nombre, u.apellido, u.rol, u.mail, u.contraseña FROM USUARIO u WHERE u.mail = ?', 
                [mail]
            );
    
            // Log para depuración
            console.log('Filas devueltas:', rows);
           // console.log('Resultado final que se devolverá:', rows[0]);
    
            // Verifica si se encontraron filas
            if (rows.length === 0) {
                throw new Error(`Usuario no encontrado con el mail: ${mail}`);
            }
    
            // Devuelve el primer registro encontrado
            return rows[0];
        } catch (error) {
            console.error('Error ejecutando la consulta:', error.message);
            throw new Error(error.message);
        }
    },
    
     
    //ACTUALIZAR USUARIO

    actualizar_usuario: async (id, contraseña, mail, nombre, apellido) => {
        const hashedPass = await bcrypt.hash(contraseña, 10);
        const query = 'UPDATE usuario SET contraseña = ?, mail = ?, nombre = ?, apellido = ? WHERE id_usuario = ?';
        try {
            await db.execute(query, [id, hashedPass, mail, nombre, apellido]);
        } catch (error) {
            throw new Error('Error al actualizar el usuario: ' + error.message);
        }
    },

    //BORRAR USUARIO

    eliminar_usuario: async (id) => {
        const query = 'DELETE FROM usuario WHERE id_usuario = ?';
        try {
            await db.execute(query, [id]);
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    }
};

module.exports = Usuario;


/*
const sql = 'SELECT * FROM persona WHERE dni = ?';
db.execute(sql, [dni], (err, results) => {
  if (err) throw err;
  console.log(results);
});
*/