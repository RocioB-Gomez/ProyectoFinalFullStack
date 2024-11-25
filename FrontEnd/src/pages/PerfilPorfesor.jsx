import { Component } from "react";

class PerfilProfesor extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <h2>Vista Profesor</h2>
            </>
         );
    }
}
 
export default PerfilProfesor;
import { useState, useEffect } from 'react';

export default function ListaAlumnosGeneral() {
    const [alumnos, setAlumnos] = useState([]);
    const [error, setError] = useState(null);

    // Función para traer los datos de la API
    const obtenerAlumnos = () => {
        fetch('http://localhost:8080/api/alumno/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Imprime los datos en la consola
                setAlumnos(data);  // Almacena los datos en el estado
                setError(null);     // Limpia cualquier error anterior
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
                setError('No se pudo obtener los datos de los alumnos');
            });

    };

    useEffect(() => {
        obtenerAlumnos();
    }, []);

    return (
        <div>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                <button onClick={obtenerAlumnos}>Traer Datos</button>
                    {alumnos.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>DNI</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Curso</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumnos.map((alumno) => (
                                    <tr key={alumno.id_alumno}>
                                        <td>{alumno.dni}</td>
                                        <td>{alumno.nombre}</td>
                                        <td>{alumno.apellido}</td>
                                        <td>{alumno.curso}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay alumnos disponibles.</p>
                    )}
                </>
            )}
        </div>
    );
}
