import { Component } from "react";
import './style/ProductStyle.css'

class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div id="product" className="home product">
                <div className="container text-center">
                <h5>PRODUCTOS</h5>
                <h2><span>Gestión </span>y comunicación</h2>
                <div className="color-line color-line-left"></div>
                <div className="product-img"><img src="public/png-transparent-smartphone-mobile-phones-tablet-computers-handheld-devices-workplace-wellness-smartphone-gadget-electronics-netbook-fotor-bg-remover-20240924165114.png"/></div>
                <ul className="nav nav-tabs col-md-8 col-md-offset-2 col-sm-12 ul-product" role="tablist">
                    <li role="presentation" className="productos-centro col-md-4 col-sm-4 col-xs-12 active">
                        <a href="#centro" aria-controls="centro" role="tab" data-bs-toggle="tab" aria-expanded="true">Gestión del Centro</a>
                    </li>
                    <li role="presentation" className="productos-centro col-md-4 col-sm-4 col-xs-12">
                        <a href="#centro" aria-controls="centro" role="tab" data-bs-toggle="tab" aria-expanded="true">Gestión Académica</a>
                    </li>
                    <li role="presentation" className="productos-centro col-md-4 col-sm-4 col-xs-12">
                        <a href="#centro" aria-controls="centro" role="tab" data-bs-toggle="tab" aria-expanded="true">Comunicación</a>
                    </li>
                </ul> 
                <div className="tab-content">
                <div role="tabpanel" className="tab-panel-active" id="centro">
                <div className="col-md-3 caracteristica">
                    <img src="public/folder_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                    <h5>Gestión Administrativa</h5>
                    <p>Secretaría virtual con funciones que agilizan las labores administrativas del centro.</p>
                </div>
                <div className="col-md-3 caracteristica">
                    <img src="public/paid_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                    <h5>Gestión Económica</h5>
                    <p>Herramienta de facturación eficiente, ágil y segura de los servicios prestados por el centro. Permite gestionar diferentes sociedades de manera segura.</p>
                </div>
                <div className="col-md-3 caracteristica">
                    <img src="public/flag_2_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                    <h5>Calidad</h5>
                    <p>Favorece la optimización de procesos reduciendo la carga administrativa y ayuda al equipo pedagógico del centro a tomar importantes decisiones para conseguir un alto grado de satisfacción del alumno y familias.</p>
                </div>
                <div className="col-md-3 caracteristica">
                    <img src="public/domain_verification_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                    <h5>Integración</h5>
                    <p>Servicio de intercambio de información con otras plataformas sin necesidad de cambiar de entorno de trabajo.</p>
                </div>
            </div>
          </div> 
        </div>
      </div>
            </>
         );
    }
}
 
export default Product;