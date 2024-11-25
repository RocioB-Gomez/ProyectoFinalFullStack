import { Component } from "react";
import { NavLink } from "react-router-dom";
import './style/NavbarStyle.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <nav className="allNav navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Educatio<img src="public/silhouette-of-a-purple-graduation-cap-editable-flat-icon-design-in-eps10-format-simple-unique-elegant-and-cute-free-vector-fotor-bg-remover-20240924164229.png" width="50px" height="50px"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutUs">QUIÉNES SOMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#benefits">BENEFICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#product">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacta">CONTACTA</a>
                        </li>
                        <NavLink className="btn btn-primary" to="/acceder">Acceder</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
         );
    }
}
 
export default Navbar;