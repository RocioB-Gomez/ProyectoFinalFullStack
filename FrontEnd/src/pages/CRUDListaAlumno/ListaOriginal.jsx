import React, { useEffect, useState } from 'react';
import '../style/UserPage.css';
import modificar from '/update.png';
import eliminar from '/delete.png';

export default function ListaAlumnosGeneral() {
    const [posts, setPosts] = useState([]); // Alumnos
    const [filteredPosts, setFilteredPosts] = useState([]); // Alumnos filtrados por curso
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
    const [curso, setCurso] = useState(''); // Curso para filtrado
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando un alumno
    const [showForm, setShowForm] = useState(false); // Controla la visibilidad del formulario de agregar

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
                if (isEditing) {
                    // Si es una actualización, actualiza el alumno en la lista
                    setPosts(posts.map(p => p.dni === formData.dni ? data : p));
                } else {
                    // Si es una creación, agrega el nuevo alumno
                    setPosts((prevPosts) => [...prevPosts, data]);
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
            .catch((err) => console.error('Error saving data:', err));
    };

    // Filtrar por curso
    const handleCursoChange = (e) => {
        setCurso(e.target.value);
    };

    const handleFilterByCurso = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/alumno/${curso}`) // Ruta para filtrar por curso
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.detail)) {
                    setFilteredPosts(data.detail);
                } else {
                    setError("La propiedad 'detail' no contiene un arreglo.");
                }
            })
            .catch(err => setError('Error fetching data: ' + err.message));
    };

    // Eliminar un alumno
    const handleDelete = (id_alumno) => {
        fetch(`http://localhost:8080/alumno/${id_alumno}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    // Si la respuesta no es "ok", maneja el error aquí
                    return response.text(); // Leemos el texto de la respuesta
                }
                return response.json(); // Si es una respuesta JSON, la procesamos normalmente
            })
            .then((data) => {
                if (typeof data === 'string') {
                    // Si la respuesta es un mensaje de error en texto, manejarlo
                    console.error('Error:', data);
                } else {
                    // Si es una respuesta JSON, realiza las acciones necesarias
                    setPosts(posts.filter(p => p.id_alumno !== id_alumno)); // Elimina el alumno de la lista
                }
            })
            .catch((err) => console.error('Error deleting data:', err));
    };
    

    // Editar un alumno
    const handleEdit = (p) => {
        setFormData(p); // Rellena el formulario con los datos del alumno
        setIsEditing(true); // Cambia el estado para que sea un formulario de edición
        setShowForm(true); // Abre el formulario en modo edición
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
            {/* Filtro por curso y botón Agregar */}
            <div className="filter-and-add">
                <form onSubmit={handleFilterByCurso}>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={handleCursoChange}
                        placeholder="Ingresa el curso"
                    />
                    <button type="submit">Filtrar</button>
                </form>

                {/* Botón Agregar Alumno */}
                <button onClick={handleAddAlumno}>Agregar Alumno</button>
            </div>

            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>dni</th>
                        <th>ingreso</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>curso</th>
                        <th>id usuario</th>
                        <th>id tutor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredPosts.length > 0 ? filteredPosts : posts).map((p) => (
                        <tr key={`${p.id_alumno}-${p.dni}`}>
                            <td>{p.id_alumno}</td>
                            <td>{p.dni}</td>
                            <td>{p.anio_ingreso}</td>
                            <td>{p.nombre}</td>
                            <td>{p.apellido}</td>
                            <td>{p.curso}</td>
                            <td>{p.fk_usuario}</td>
                            <td>{p.fk_tutor}</td>
                            <td>
                                <button onClick={() => handleEdit(p)}>
                                    <img src={modificar} alt="Modificar" width="25" height="25" />
                                </button> 
                                <button onClick={() => handleDelete(p.id_alumno)}>
                                    <img src={eliminar} alt="Eliminar" width="25" height="25" />
                                </button>
                            </td>  
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulario para agregar o editar alumno */}
            {showForm && (
                <div class="mb-3">
                    <h3>{isEditing ? 'Editar Alumno' : 'Agregar Nuevo Alumno'}</h3>
                    <form class="form-floating" onSubmit={handleSubmit}>
                        <div>
                            <label>ID Alumno</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="id_alumno"
                                value={formData.id_alumno}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div>
                            <label>DNI</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="dni"
                                value={formData.dni}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Año Ingreso</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="anio_ingreso"
                                value={formData.anio_ingreso}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Nombre</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Curso</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="curso"
                                value={formData.curso}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>ID Usuario</label>
                            <input class="form-control" id="floatingInputValue"
                                type="text"
                                name="fk_usuario"
                                value={formData.fk_usuario}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>ID Tutor</label>
                            <input class="form-control" id="floatingInputValue"
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
