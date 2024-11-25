import React, { useState, useEffect } from 'react';

export default function EditarAlumno({ alumno, onClose, onUpdate }) {
    const [formData, setFormData] = useState(alumno);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        fetch(`http://localhost:8080/alumno/${formData.dni}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((updatedAlumno) => {
                onUpdate(updatedAlumno); // Pasa el alumno actualizado
                onClose(); // Cierra el formulario de edición
            })
            .catch((err) => {
                console.error('Error al actualizar alumno:', err);
                alert('Error al actualizar el alumno');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div>
            <h3>Editar Alumno</h3>
            <form onSubmit={handleSubmit}>
                <label>ID Alumno</label>
                <input
                    type="text"
                    name="id_alumno"
                    value={formData.id_alumno}
                    onChange={handleChange}
                    disabled
                />
                <label>DNI</label>
                <input
                    type="text"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    disabled
                />
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                <label>Curso</label>
                <input
                    type="text"
                    name="curso"
                    value={formData.curso}
                    onChange={handleChange}
                />
                {/* Agregar otros campos según sea necesario */}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Guardando...' : 'Actualizar'}
                </button>
            </form>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}
