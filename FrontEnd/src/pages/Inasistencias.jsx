import { Component } from "react";

class Inasistencias extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div className="card">
                    <div className="card-header">
                        Inasistencias a Clases
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Justificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">4</th>
                                <td>11/12/2024</td>
                                <td>Turno médico</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>11/12/2024</td>
                                <td>Turno médico</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>11/12/2024</td>
                                <td>Turno médico</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>11/12/2024</td>
                                <td>Turno médico</td>
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
 
export default Inasistencias;