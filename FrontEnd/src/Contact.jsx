import { Component } from "react";
import { Link } from "react-router-dom";
import './style/ContactStyle.css'

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div id="contacta" className="home contacta">
                    <div className="container text-center">
                        <div className="cont_contacta"></div>
                            <h5>CONTACTA</h5>
                            <div className="color-line color-line-left"></div>
                            <h1>Contactá con nosotros</h1>
                            <Link to="/contactanos" className="btn btn-primary" role="button" aria-disabled="true">CONTACTAR</Link>
                    </div>
                </div>
                    <div className="extra">
                        <div className="container text-center">
                        <h2>Atención Comercial</h2>
                        <div className="mail">
                            <img src="public/mail_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                            <a href="info@educatio.com.ar">info@educatio.com.ar</a>
                        </div>
                        <div className="phone"></div>
                            <img src="public/ad_units_24dp_783992_FILL0_wght400_GRAD0_opsz24.png"/>
                            <a href="#">376-4123456</a>
                        </div>
                    </div>
            </>
         );
    }
}
 
export default Contact;