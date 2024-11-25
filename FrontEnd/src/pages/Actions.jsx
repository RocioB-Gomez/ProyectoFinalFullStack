import { Link, useParams } from 'react-router-dom';
import '../style/UserPage.css'
import modificar from '/update.png'
import eliminar from '/delete.png'



export default function Actions({ alumno_id }) {

    return (
        <>
            <div className="bottoms">

                <Link onClick={mostrarFormulario} className='bot bot2'>
                    <img src={modificar} alt="Modificar" width="25" height="25" />
                    <span className="material-symbols-outlined"></span>
                </Link>

                <Link to={`/alumno/delete/${alumno_id}`} className='bot bot2'>
                    <img src={eliminar} alt="Modificar" width="25" height="25" />
                    <span className="material-symbols-outlined"></span>
                </Link>
            </div>

            <div id='formulario-modal' className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={cerrarFormulario}>&times;</span>
                    <h2>Modificar Alumno</h2>
                    <form id='reserva-form'>
                        <p><label>Nombre Completo</label>
                        <input type='text' id='nombre' name='nombre' required></input></p>
                        <p><label>DNI</label><input type='text' id='dni' name='fecha' required></input></p>
                        <p>
                            <label>Nota 1</label><input className='short' type='text' id='nota1' name='nota1' required></input>
                            <label className='short'>Nota 2</label><input className='short' type='text' id='nota2' name='nota2' required></input>
                        </p>
                        <p>
                            <label>Nota 3</label><input className='short' type='text' id='nota3' name='nota3' required></input>
                            <label className='short'>Nota 4</label><input className='short' type='text' id='nota4' name='nota4' required></input>
                        </p>
                        
                        <p>
                            <label>Promedio</label><input className='short' type='text' id='promedio' name='promedio' required></input>
                            <label className='middle'>Recuperatorio</label><input className='short' type='text' id='recuperatorio' name='recuperatorio' required></input>
                        </p>
                        
                        <button type='submit'>Confirmar</button>
                    </form>
                </div>

            </div>
        </>
    );

}


export function AlumnoEdit() {

    const { alumno_id } = useParams();

    return (
        <>
            <h1>Fromulario para editar el alumno con ID: {alumno_id}</h1>
        </>
    );



}

