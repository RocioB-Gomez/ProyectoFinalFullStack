import { Component } from "react";
import { NavLink } from "react-router-dom";
import './style/NotFound.css'

class NotFound extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div className="Nfound">
                <img src="public/1729300095250.png" width="250px" height="250px"/>
                <h1>Error 404</h1>
                <hr />
                <NavLink className="btn btn-primary" to="/">Volver al Home</NavLink>
            </div>
            </>
         );
    }
}
 
export default NotFound;