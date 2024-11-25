import { Component } from "react";

class Perfil1 extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="car-group perfil-al">
            <div className="card border-primary mb-3 desc-perfil">
              <div className="card-header">Imagen del Alumno<button>Editar</button></div>
              <img src="public/png-clipart-time-student-recruitment-learning-professional-others-service-vector-icons-fotor-bg-remover-2024103019209.png>" id="imgPreview" width="250px" height="250px"/>
              <div className="card-body text-primary">
                  <form action="#" method="POST" enctype="multipart/form-data">
      
                      <input type="file" accept="image/*" onchange="previewImage(event, '#imgPreview')"/>
                      
                      <button type="submit" className="btn btn-primary">Subir Imagen</button>
                      <button type="button" className="btn btn-danger">Cancelar</button>
                  </form>
              </div>
            </div>
          <div className="card border-primary mb-3 desc-perfil">
              <div className="card-header">Datos Personales<button>Editar</button></div><button>Cambiar Contraseña</button>
              <div className="card-body text-primary">
                    <div className="datos">
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
            <div className="card border-primary mb-3 desc-perfil">
              <div className="card-header">Datos de Inscripción<button>Editar</button></div>
              <div className="card-body text-primary">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            
        </div>
        <script src="/FrontEnd/script.js"></script>
            </>
        );
    }
}
 
export default Perfil1;