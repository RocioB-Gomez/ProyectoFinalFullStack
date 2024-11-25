import React, { useEffect, useState } from 'react';

export default function AgregarAlumno() {
    const [posts, setPosts] = useState([]); // Alumnos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Manejo de errores
    const [formData, setFormData] = useState({
        id_alumno: '',
        dni: '',
        anio_ingreso: '',
        nombre: '',
        apellido: '',
        curso: '',
        fk_usuario: '',
        fk_tutor: ''
    }); // Estado para guardar los datos del formulario
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando un alumno
    const [showForm, setShowForm] = useState(false); // Controla la visibilidad del formulario de agregar
    const [successMessage, setSuccessMessage] = useState(null); // Mensaje de éxito

    useEffect(() => {
        fetch('http://localhost:8080/alumno/') // Obtener todos los alumnos
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.detail)) {
                    setPosts(data.detail);
                } else {
                    setError("La propiedad 'detail' no contiene un arreglo.");
                }
            })
            .catch(err => setError('Error fetching data: ' + err.message))
            .finally(() => setLoading(false)); // Termina el proceso de carga
    }, []);

    // Editar un alumno
    const handleEdit = (p) => {
        setFormData(p); // Rellena el formulario con los datos del alumno
        setIsEditing(true); // Cambia el estado para que sea un formulario de edición
        setShowForm(true); // Abre el formulario en modo edición
    };

    // Manejo del cambio en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Manejo del formulario para agregar un nuevo alumno
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing
            ? `http://localhost:8080/alumno/${formData.dni}` // Ruta PUT
            : 'http://localhost:8080/alumno/create'; // Ruta POST
        const method = isEditing ? 'PUT' : 'POST';
    
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            // Ahora 'data.alumno' contiene los datos completos del nuevo alumno
            if (data.alumno) {
                if (isEditing) {
                    // Si es una actualización, actualiza el alumno en la lista
                    setPosts(posts.map(p => p.dni === formData.dni ? data.alumno : p));
                } else {
                    // Si es una creación, agrega el nuevo alumno con los datos completos
                    setPosts((prevPosts) => [...prevPosts, data.alumno]);
                }
                setSuccessMessage(isEditing ? 'Alumno actualizado correctamente' : 'Alumno agregado correctamente');
            }
            
            // Limpia el formulario
            setFormData({
                id_alumno: '',
                dni: '',
                anio_ingreso: '',
                nombre: '',
                apellido: '',
                curso: '',
                fk_usuario: '',
                fk_tutor: ''
            });
            setIsEditing(false); // Resetea el estado de edición
            setShowForm(false); // Cierra el formulario después de guardar
        })
        .catch((err) => {
            setError('Error saving data: ' + err.message);
        });
    };
    
    

    // Función para mostrar el formulario para agregar un nuevo alumno
    const handleAddAlumno = () => {
        setFormData({
            id_alumno: '',
            dni: '',
            anio_ingreso: '',
            nombre: '',
            apellido: '',
            curso: '',
            fk_usuario: '',
            fk_tutor: ''
        });
        setIsEditing(false); // Asegura que no esté en modo de edición
        setShowForm(true); // Muestra el formulario para agregar
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className="filter-and-add">
                {/* Botón Agregar Alumno */}
                <button onClick={handleAddAlumno}>Agregar Alumno</button>
            </div>

            {/* Mensaje de éxito */}
            {successMessage && <div className="success-message">{successMessage}</div>}

            {/* Formulario para agregar o editar alumno */}
            {showForm && (
                <div className="mb-3">
                    <h3>{isEditing ? 'Editar Alumno' : 'Agregar Nuevo Alumno'}</h3>
                    <form className="form-floating" onSubmit={handleSubmit}>
                        <div>
                            <label>ID Alumno</label>
                            <input className="form-control"
                                type="text"
                                name="id_alumno"
                                value={formData.id_alumno}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div>
                            <label>DNI</label>
                            <input className="form-control"
                                type="text"
                                name="dni"
                                value={formData.dni}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Año Ingreso</label>
                            <input className="form-control"
                                type="text"
                                name="anio_ingreso"
                                value={formData.anio_ingreso}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Nombre</label>
                            <input className="form-control"
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input className="form-control"
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Curso</label>
                            <input className="form-control"
                                type="text"
                                name="curso"
                                value={formData.curso}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>ID Usuario</label>
                            <input className="form-control"
                                type="text"
                                name="fk_usuario"
                                value={formData.fk_usuario}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>ID Tutor</label>
                            <input className="form-control"
                                type="text"
                                name="fk_tutor"
                                value={formData.fk_tutor}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">{isEditing ? 'Actualizar Alumno' : 'Agregar Alumno'}</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
