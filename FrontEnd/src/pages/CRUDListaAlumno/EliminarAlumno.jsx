import React, { useState } from 'react';
import eliminar from '/delete.png';

export default function EliminarAlumno({ id_alumno, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado de error

    const handleDelete = () => {
        setIsDeleting(true); // Indicador de carga
        setError(null); // Limpiar errores previos
    
        fetch(`http://localhost:8080/alumno/${id_alumno}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(text);
                });
            }
            return response.json(); // Procesa el JSON si la respuesta es válida
        })
        .then(() => {
            // Actualiza el estado para eliminar el alumno localmente
            onDelete(id_alumno);  // Llama a la función del componente padre para actualizar la lista de alumnos
            alert('Alumno eliminado exitosamente');
        })
        .catch((err) => {
            console.error('Error eliminando alumno:', err.message);
            setError(`Error eliminando alumno: ${err.message}`); // Actualiza el estado de error
        })
        .finally(() => {
            setIsDeleting(false); // Finaliza el estado de carga
        });
    };
    

    return (
        <div>
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? (
                    <span>Eliminando...</span> // Muestra un mensaje mientras se procesa
                ) : (
                    <img src={eliminar} alt="Eliminar" width="25" height="25" />
                )}
            </button>

            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>} {/* Mostrar el error en la UI */}
        </div>
    );
}
