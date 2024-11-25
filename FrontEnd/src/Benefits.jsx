import { Component } from "react";
import './style/BenefitsStyle.css'

class Benefits extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div id="benefits" className="home benefits">
                <div className="container text-center">
                    <h5>BENEFICIOS</h5>
                    <h2>Una <span>solución profesional </span> para su institución</h2>
                    <div className="color-line color-line-left"></div>
                    <section>
                    <div className="col-md-4 wow fadeInLeft animated">
                    <div className="box">
                        <div className="icon-container">
                            <span className="icon-basic"><img src="public/sync_saved_locally_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/></span>
                        </div>
                        <div className="box-desc">
                            <h4>Mejora la imagen del establecimiento</h4>
                        <div className="grey-line"></div>
                            <p>Al ampliar los servicios de calidad que presta a sus alumnos y familias</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-container">
                        <span className="icon-basic"><img src="public/recenter_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/></span>
                        </div>
                        <div className="box-desc">
                        <h4>Seguridad, centralización y coherencia</h4>
                        <div className="grey-line"></div>
                        <p>De la información al trabajar con un único sistema.</p>  
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-container">
                        <span className="icon-basic"><img src="public/cloud_upload_24dp_783992_FILL0_wght400_GRAD0_opsz24.png" alt="Imagen con efecto"/></span>
                        </div>
                        <div className="box-desc">
                        <h4>Intercambio de información</h4>
                        <div className="grey-line"></div>
                        <p>Y contenidos didácticos entre los usuarios de la plataforma.</p> 
                        </div>
                    </div>
                </div>
                <div className="col-md-4 container_ben" id="seccion-imagen">
                    <img src="public/tablet2.png" alt="Imagen" className="imagen"/>
                </div>
                <div className="col-md-4 wow fadeInRight animated">
                    <div className="box">
                        <div className="icon-container">
                            <span className="icon-basic"><img src="public/domain_verification_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/></span>
                        </div>
                        <div className="box-desc">
                            <h4>100% Online</h4>
                            <div className="grey-line"></div>
                            <p>Disponible en cualquier dispositivo en el momento que lo necesites.</p> 
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-container">
                            <span className="icon-basic"><img src="public/sync_saved_locally_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/></span>
                        </div>
                        <div className="box-desc">
                            <h4>Eficacia y calidad</h4>
                            <div className="grey-line"></div>
                            <p>Mejora la productividad del profesorado y el rendimiento del alumno</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-container">
                            <span className="icon-basic"><img src="public/psychology_alt_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/></span>
                        </div>
                        <div className="box-desc">
                            <h4>Ayuda a a toma de decisiones</h4>
                            <div className="grey-line"></div>
                            <p>Disponibilidad fácil y rápida de la información.</p>
                        </div>
                    </div>
                </div>
          </section>
        </div>
      </div>
      <script src="script.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
            </>
         );
    }
}
 
export default Benefits;