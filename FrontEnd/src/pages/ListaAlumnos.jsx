import Actions from "./Actions";

export default function ListaAlumnos({ alumnos }) {


    
    //debugger
    //const { alumnos } = useParams();


    /*
                                                <th scope="col">Alumno</th>
                                                <th scope="col">Usuario</th>
                                                <th scope="col">Nota 1</th>
                                                <th scope="col">Nota 2</th>
                                                <th scope="col">Nota 3</th>
                                                <th scope="col">Nota 4</th>
                                                <th scope="col">Promedio</th>
                                                <th scope="col">Recuperatorio</th>
                                                <th scope="col">Acciones</th>
    */

    /*
            nombreCompleto: "Pepito",
            nombreCompletoTutor: "Tutor de Pepito",
            notas: [8, 9, 7, 10],
            promedio: 8.50,
    */


    const filas = alumnos.map((alumno, index) => {
        return (
            <tr key={index}>
                <td>{alumno.nombreCompleto}</td>
                <td>{alumno.nombreCompletoTutor}</td>
                <td>{alumno.notas[0] ? alumno.notas[0] : null}</td>
                <td>{alumno.notas[1] ? alumno.notas[1] : null}</td>
                <td>{alumno.notas[2] ? alumno.notas[2] : null}</td>
                <td>{alumno.notas[3] ? alumno.notas[3] : null}</td>
                <td>{alumno.promedio}</td>
                <td>{alumno.promedio > 6 ? "NO" : "SI"}</td>
                <td><Actions alumno_id={alumno.alumno_id} /></td>
            </tr>
        )
    });


    return (
        <>

            <>
                <div className="listaAlumnos">
                    <h4>4 "B" Humanidades</h4>
                    <h5>Matemática</h5>
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Alumno</th>
                                            <th scope="col">DNI</th>
                                            <th scope="col">Nota 1</th>
                                            <th scope="col">Nota 2</th>
                                            <th scope="col">Nota 3</th>
                                            <th scope="col">Nota 4</th>
                                            <th scope="col">Promedio</th>
                                            <th scope="col">Recuperatorio</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filas}
                                    </tbody>
                                </table>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </>

        </>
    );

}

