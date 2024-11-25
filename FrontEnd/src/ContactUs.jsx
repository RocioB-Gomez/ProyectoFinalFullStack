import { Component } from "react";
import './style/ContactUs.css'


class ContactUs extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div className="InfoUs">
                    <h1>Obtené Información</h1>   
                    <form className="contUs">
                        <input placeholder="Nombre" />
                        <input placeholder="Email" />
                        <input placeholder="Teléfono de Contacto" />
                        <input placeholder="Asunto" />
                        <textarea placeholder="Mensaje"></textarea>
                    </form> 
                </div>        
            </>
         );
    }
}
 
export default ContactUs;