import React, { useEffect, useState } from 'react';
import '../style/UserPage.css';
import modificar from '/update.png';
import eliminar from '/delete.png';

export default function ListaDocentesGeneral() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        id_docente: '',
        especialidad: '',
        nombre_completo: '',
        fk_usuario: '',
        fk_institucion: ''
    });
    const [id_docente, setIdocente] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/docente/') 
            .then(response => response.json())
            .then(data => {
                setPosts(data.detail);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching data: ' + err.message);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing
            ? `http://localhost:8080/docente/modificar/${formData.id_docente}`
            : 'http://localhost:8080/docente/crear';
        const method = isEditing ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (isEditing) {
                setPosts(posts.map(p => p.id_docente === formData.id_docente ? data : p));
            } else {
                setPosts([...posts, data]);
            }
            setFormData({ id_docente: '', especialidad: '', nombre_completo: '', fk_usuario: '', fk_institucion: '' });
            setIsEditing(false);
            setShowForm(false);
        })
        .catch((err) => console.error('Error saving data:', err));
    };

    const handleIdocenteChange = (e) => {
        setIdocente(e.target.value);
    };

    const handleFilterByIdocente = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/docente/${id_docente}`)
            .then(response => response.json())
            .then(data => setFilteredPosts(data))
            .catch(err => setError('Error fetching data: ' + err.message));
    };

    const handleDelete = (id_docente) => {
        fetch(`http://localhost:8080/docente/eliminar/${id_docente}`, { method: 'DELETE' })
            .then(response => response.json())
            .then((data) => {
                setPosts(posts.filter(p => p.id_docente !== id_docente));
            })
            .catch((err) => console.error('Error deleting data:', err));
    };

    const handleEdit = (p) => {
        setFormData(p);
        setIsEditing(true);
        setShowForm(true);
    };

    const handleAddDocente = () => {
        setFormData({
            id_docente: '',
            especialidad: '',
            nombre_completo: '',
            fk_usuario: '',
            fk_institucion: ''
        });
        setIsEditing(false);
        setShowForm(true);
    };

    if (loading) return <div>Cargando...</div>;

    return (
        <div className="container">
            <div className="search-bar">
                <input type="text" value={id_docente} onChange={handleIdocenteChange} placeholder="Buscar por ID Docente" />
                <button onClick={handleFilterByIdocente}>Buscar</button>
            </div>

            <button className='agregar_docente' onClick={handleAddDocente}>Agregar Docente</button>

            {error && <div>{error}</div>}
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredPosts.length > 0 ? filteredPosts : posts).map(post => (
                        <tr key={post.id_docente}>
                            <td>{post.id_docente}</td>
                            <td>{post.nombre_completo}</td>
                            <td>{post.especialidad}</td>
                            <td>
                                <button onClick={() => handleEdit(post)}><img src={modificar} alt="Modificar" width="25" height="25" /></button>
                                <button onClick={() => handleDelete(post.id_docente)}><img src={eliminar} alt="Eliminar" width="25" height="25" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>ID Docente</label>
                    <input type="text" name="id_docente" value={formData.id_docente} onChange={handleChange} required />
                    <label>Nombre Completo</label>
                    <input type="text" name="nombre_completo" value={formData.nombre_completo} onChange={handleChange} required />
                    <label>Especialidad</label>
                    <input type="text" name="especialidad" value={formData.especialidad} onChange={handleChange} required />
                    <label>Usuario</label>
                    <input type="text" name="fk_usuario" value={formData.fk_usuario} onChange={handleChange} required />
                    <label>Institución</label>
                    <input type="text" name="fk_institucion" value={formData.fk_institucion} onChange={handleChange} required />
                    <button type="submit">{isEditing ? 'Actualizar' : 'Agregar'}</button>
                </form>
            )}
        </div>
    );
}
