import React, { useEffect, useState } from 'react';
import '../style/admin.css';
import modificar from '/update.png';
import AgregarAlumno from './CRUDListaAlumno/AgregarAlumno';
import EliminarAlumno from './CRUDListaAlumno/EliminarAlumno';
import EditarAlumno from './CRUDListaAlumno/EditarAlumno';

export default function ListaAlumnosGeneral() {
    const [posts, setPosts] = useState([]); // Lista de alumnos
    const [filteredPosts, setFilteredPosts] = useState([]); // Alumnos filtrados por curso
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de errores
    const [curso, setCurso] = useState(''); // Curso para filtrado
    const [dni, setDni] = useState(''); // DNI para filtrado
    const [selectedAlumno, setSelectedAlumno] = useState(null); // Alumno seleccionado para editar

    // Cargar alumnos al inicio
    useEffect(() => {
        fetch('http://localhost:8080/alumno/')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data); // Asigna directamente el arreglo de alumnos
            })
            .catch((err) => setError('Error fetching data: ' + err.message))
            .finally(() => setLoading(false));
    }, []);

    // Filtrar alumnos por curso
    const handleFilterByCurso = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/alumno/${curso}`)
            .then((response) => response.json())
            .then((data) => {
                setFilteredPosts(data); // Asigna directamente el arreglo filtrado por curso
            })
            .catch((err) => setError('Error fetching data: ' + err.message));
    };

    const handleFilterByDNI = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/alumno/dni/${dni}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setFilteredPosts(data);
                }
            })
            .catch((err) => setError('Error fetching data: ' + err.message));
    };

    // Manejar la selección de un alumno para editar
    const handleEdit = (alumno) => {
        setSelectedAlumno(alumno);  // Establecer el alumno para editar
    };

    // Cerrar el formulario de edición
    const handleCloseEdit = () => {
        setSelectedAlumno(null); // Cerrar el formulario
    };

    // Función que se pasa como prop a EliminarAlumno
    const handleDelete = (id_alumno) => {
        // Eliminar el alumno de la lista local después de ser eliminado
        setPosts((prevPosts) =>
            prevPosts.filter((post) => post.id_alumno !== id_alumno)
        );
        // Realizar la eliminación en el backend
        fetch(`http://localhost:8080/alumno/${id_alumno}`, { method: 'DELETE' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al eliminar el alumno');
                }
            })
            .catch((err) => {
                setError('Error eliminando el alumno: ' + err.message);
            });
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {/* Filtro por curso y botón Agregar */}
            <div className="filter-and-add">
                <form onSubmit={handleFilterByCurso}>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        placeholder="Ingresa el curso"
                    />
                    <button type="submit">Filtrar</button>
                </form>
                <form onSubmit={handleFilterByDNI}>
                    <label>DNI:</label>
                    <input
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        placeholder="Ingresa el DNI"
                    />
                    <button type="submit">Filtrar</button>
                </form>
                <AgregarAlumno />
            </div>

            {/* Tabla de alumnos */}
            <h2>Lista de Alumnos</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DNI</th>
                        <th>Ingreso</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Curso</th>
                        <th>ID Tutor</th>
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
                            <td>{p.fk_tutor}</td>
                            <td>
                                {/* Botón de editar */}
                                <button onClick={() => handleEdit(p)}>
                                    <img src={modificar} alt="Modificar" width="25" height="25" />
                                </button>

                                {/* Botón de eliminar */}
                                <EliminarAlumno
                                    id_alumno={p.id_alumno}
                                    onDelete={handleDelete}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mostrar formulario de edición si se seleccionó un alumno */}
            {selectedAlumno && (
                <EditarAlumno
                    alumno={selectedAlumno}  // Pasa el alumno seleccionado
                    onClose={handleCloseEdit}  // Función para cerrar el formulario
                    onUpdate={(updatedAlumno) =>
                        setPosts((prevPosts) =>
                            prevPosts.map((post) =>
                                post.id_alumno === updatedAlumno.id_alumno
                                    ? updatedAlumno
                                    : post
                            )
                        )
                    }
                />
            )}
        </div>
    );
}
