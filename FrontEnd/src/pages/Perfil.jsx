import { Component } from "react";
import '../style/UserPage.css'

class Perfil extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="car-group perfil-al">
                <div className="card border-primary mb-3 descrip-perfil">
                    <div className="card-header">Imagen del Alumno</div>
                    <img src="/alumno1.jpg" id="imgPreview" width="250px" height="250px"/>
                    <div className="card-body text-primary">
                        <form action="#" method="POST" encType="multipart/form-data">
            
                            <input type="file" accept="image/*" onChange="previewImage(event, '#imgPreview')"/>
                            
                            <button type="submit" className="btn btn-primary">Subir Imagen</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </form>
                    </div>
                </div>
                <div className="card border-primary mb-3 descrip-perfil">
                    <div className="card-header">Datos Personales<button>Editar</button></div><button>Cambiar Contraseña</button>
                        <div className="card-body text-primary">
                            <div className="body-date">
                                <p className="card-text">Usuario</p>
                                <p className="card-text">Nombre</p>
                                <p className="card-text">Apellidos</p>
                                <p className="card-text">Dirección</p>
                                <p className="card-text">Correo</p>
                                <p className="card-text">Teléfono</p>
                                <p className="card-text">Nacimiento</p>
                            </div>
                            <div className="autocompl">
                                <p className="info">...</p>
                                <p className="info">...</p>
                                <p className="info">...</p>
                                <p className="info">...</p>
                                <p className="info">...</p>
                                <p className="info">...</p>
                                <p className="info">...</p>
                            </div>
                        </div>
                    </div>
                <div className="card border-primary mb-3 descrip-perfil">
                    <div className="card-header">Datos de Inscripción</div>
                        <div className="card-body text-primary">
                        <div className="body-date">
                            <p className="card-text">Código</p>
                            <p className="card-text">Turno</p>
                            <p className="card-text">Nivel</p>
                            <p className="card-text">Grado</p>
                            <p className="card-text">División</p>
                            <p className="card-text">Fecha de ingreso</p>
                        </div>
                        <div className="autocompl">
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                        </div>
                    </div>
                </div>

                <div className="card border-primary mb-3 descrip-perfil">
                    <div className="card-header">Tutor</div>
                    <div className="card-body text-primary">
                        <div className="body-date">
                            <p className="card-text">Parentezco</p>
                            <p className="card-text">Nombre</p>
                            <p className="card-text">Apellido</p>
                            <p className="card-text">Dirección</p>
                            <p className="card-text">Teléfono</p>
                            <p className="card-text">Correo</p>
                        </div>
                        <div className="autocompl">
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                            <p className="info">...</p>
                        </div>
                    </div>
                </div>

            <div className="card border-primary mb-3 descrip-perfil">
              <div className="card-header">Tutor Alternativo</div>
              <div className="card-body text-primary">
              <div className="body-date">
                        <p className="card-text">Código</p>
                        <p className="card-text">Turno</p>
                        <p className="card-text">Nivel</p>
                        <p className="card-text">Grado</p>
                        <p className="card-text">División</p>
                        <p className="card-text">Fecha de ingreso</p>
                    </div>
                    <div className="autocompl">
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                    </div>
              </div>
            </div>

            <div className="card border-primary mb-3 descrip-perfil">
              <div className="card-header">Referencias</div>
              <div className="card-body text-primary">
              <div className="body-date">
                        <p className="card-text">Código</p>
                        <p className="card-text">Turno</p>
                        <p className="card-text">Nivel</p>
                        <p className="card-text">Grado</p>
                        <p className="card-text">División</p>
                        <p className="card-text">Fecha de ingreso</p>
                    </div>
                    <div className="autocompl">
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                        <p className="info">...</p>
                    </div>
              </div>
            </div>
            
        </div>
        <script src="/FrontEnd/script.js"></script>
            </>
        );
    }
}
 
export default Perfil;