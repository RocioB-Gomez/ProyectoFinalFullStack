import { Component } from "react";

class Calificaciones extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div className="card">
                    <div className="card-header">
                        Calificaciones
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <table className="table table-striped">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="42359595329.pdf">Calificaciones 1 Bimestre</a></td>
                                    <td><a href="877255101976.pdf">Calificaciones 2 Bimestre</a></td>
                                    <td><a href="6559867019484.pdf">Calificaciones 3 Bimestre</a></td>
                                    <td><a href="#">Calificaciones 4 Bimestre</a></td>
                                </tr>
                            </tbody>
                        </table>
                        </blockquote>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Calificaciones;