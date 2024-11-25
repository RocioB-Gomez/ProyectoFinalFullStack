import { Component } from "react";
import './style/AboutUsStyle.css'

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div id="aboutUs" className="home aboutUs">
                <div className="container container-left text-center pull-left">
                    <div className="desc-about">
                        <h5>QUIÉNES SOMOS</h5>
                        <h2><span>Nuestra</span> Función</h2>
                        <div className="color-line-left"></div>
                            <p>Educatio es un grupo dedicado al desarrollo de 
                            software y sistemas de gestión orientados al ámbito educativo.<br/><br/>
                            Nuestros principios se establecen en la gestión de centros educativos, optimización de recursos 
                            y la aplicación de tecnología.<br/><br/>
                            Esto nos permite ofrecer al personal docente y no docente de distitntas instituciones,
                            a los alumnos y a las familias de una plataforma educativa sencilla, eficaz e intuitiva.</p>
                    </div>
                    <div className="image_cont">
                        <img src="public/istockphoto-1388649939-612x612-fotor-bg-remover-202409270400.png"/>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default AboutUs;