import { useParams } from "react-router-dom"
import GoOut from "../GoOut"
import '../style/UserPage.css'
import ListaAlumnos from "./ListaAlumnos"
import Temario from "./Temario"
import { useEffect, useState } from "react"



export default function UserPage() {

    const params = useParams();
    const [alumnos, setAlumnos] = useState([]);
    const [temarios, setTemarios] = useState([]);
    const [actividades, setActividades] = useState([]);

    const alumnos_list = [
        {
            alumno_id: 1,
            nombreCompleto: "Luciano Benitez",
            nombreCompletoTutor: "35685963",
            notas: [8, 9, 7, 10],
            promedio: 8.50,
        },
        {
            alumno_id: 2,
            nombreCompleto: "Marta Salazar",
            nombreCompletoTutor: "35685456",
            notas: [5, 9, 7, 4],
            promedio: 6.25,
        },
        {
            alumno_id: 3,
            nombreCompleto: "Jorge Ramirez",
            nombreCompletoTutor: "45685963",
            notas: [9, 2, null, 3],
            promedio: 5.50,
        }
    ]

    useEffect(() => {
        async function obtenerAlumnos() {
            try {
                const parametros = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': sessionStorage.getItem('token')
                    }
                }
                const url = "http://localhost:8080/alumnos";

                setAlumnos(alumnos_list);

                // let response = await fetch(url, parametros)
                // let body = await response.json();

                // if (response.ok) {
                //     //setAlumnos(body);
                // } else {
                //     toast.error(body.message, toastConf);
                // }
            } catch (error) {
                toast.error(error.message, toastConf);
            }
        }


        async function obtenerTemario() {
            try {
                const parametros = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': sessionStorage.getItem('token')
                    }
                }
                const url = "http://localhost:8080/temario";

                // let response = await fetch(url, parametros)
                // let body = await response.json();

                // if (response.ok) {
                //     //setTemarios(body);
                // } else {
                //     toast.error(body.message, toastConf);
                // }
            } catch (error) {
                toast.error(error.message, toastConf);
            }
        }


        async function obtenerActividades() {
            try {
                const parametros = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': sessionStorage.getItem('token')
                    }
                }
                const url = "http://localhost:8080/actividades";

                // let response = await fetch(url, parametros)
                // let body = await response.json();

                // if (response.ok) {
                //     //setActividades(body);
                // } else {
                //     toast.error(body.message, toastConf);
                // }
            } catch (error) {
                toast.error(error.message, toastConf);
            }
        }


        obtenerAlumnos();
        obtenerTemario();
        obtenerActividades();

    }, []);

    return (
        <>
            <div className="MenLeft">
                <h3>VISTA PROFESOR</h3>
                <div className="out">
                    <GoOut />
                </div>
                <div className="row view-perfil">
                    <div className="col-4 cont-perfil">
                        <div className="list-group list-perfil" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Lista de Alumnos</a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Temario</a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Actividades</a>
                        </div>
                        <div className="col-8 desc-perfil">
                            <div className="tab-content content-perfil" id="nav-tabContent">

                                <div className="tab-perfil tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                    <ListaAlumnos alumnos={alumnos} />
                                </div>

                                <div className="tab-perfil tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                    <Temario temario={temarios} />
                                </div>

                                <div className="tab-perfil tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Actividades</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
