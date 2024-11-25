import { Component } from "react";
import { Link } from "react-router-dom";
import './style/PrincipalStyle.css'

class Principal extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <>
            <div className="principal">
                <div className="container text-center">
                <section className="description">
                    <h1>Educatio<img src="public/silhouette-of-a-purple-graduation-cap-editable-flat-icon-design-in-eps10-format-simple-unique-elegant-and-cute-free-vector-fotor-bg-remover-20240924164229.png" width="100px" height="100px"/></h1>
                    <h2>Plataforma para la gestión y la comunicación de establecimientos educativos</h2>
                    <Link to="/contactanos" className="btn btn-primary" role="button" aria-disabled="true">CONTACTANOS</Link>
                </section>
                </div>
            </div>
            </>
        );
    }
}
 
export default Principal;