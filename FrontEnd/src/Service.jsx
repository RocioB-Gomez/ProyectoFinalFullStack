import { Component } from "react";
import './style/ServiceStyle.css'

class Services extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div id="services" className="home services">
                    <div className="container text-center">
                    <h5>SERVICIOS</h5>
                    <h2><span>Implantación</span></h2>
                    <div className="color-line color-line-left"></div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 line-grey">
                            <div id="paso 1" className="col paso col-md-3 section-pasos">
                                <div className="desc">
                                    <div className="num-paso">
                                    <span>1</span>
                                    </div>
                                    <h5>Organización y Planificación</h5>
                                    <div className="line"></div>
                                    <p>Intercambio de documentación y definición del plan de implantación.</p>
                                </div>
                            </div>
                            <div id="paso 2" className="col paso col-md-3 section-pasos">
                                <div className="desc">
                                    <div className="num-paso">
                                    <span>2</span>
                                    </div>
                                    <h5>Migración de datos</h5>
                                    <div className="line"></div>
                                    <p>Extracción y cesión de datos, análisis, simulación, verificación y migración.</p>
                                </div>
                            </div>
                            <div id="paso 3" className="col paso col-md-3 section-pasos">
                                <div className="desc">
                                    <div className="num-paso">
                                    <span>3</span>
                                    </div>
                                    <h5>Puesta en marcha</h5>
                                    <div className="line"></div>
                                    <p>Alta de usuarios, adaptación a imagen corporativa y preparación de formularios. Formación y consultoría personalizada.</p>
                                </div>
                            </div>
                            <div id="paso 4" className="col paso col-md-3 section-pasos">
                                <div className="desc">
                                    <div className="num-paso">
                                    <span>4</span>
                                    </div>
                                    <h5>Seguimiento y evolución</h5>
                                    <div className="line"></div>
                                    <p>Relación directa y continuada con nuestros clientes y mantenimiento evolutivo de la plataforma.</p>
                                </div>
                            </div>
                        </div>
                        <div className="image-producto col-md-offset-3 col-md-6 wow fadeIn animated">
                            <img src="public/51e4fdfd-d5e3-4556-8859-b4b067f124c1-fotor-bg-remover-2024092518433.png"/>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Services;