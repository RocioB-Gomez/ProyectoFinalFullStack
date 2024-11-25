import React from 'react'
import GoOut from '../GoOut'
import ListaAlumnosGeneral from './ListaAlumnosGeneral'
import ListaDocentesGeneral from './ListaDocentesGeneral'
import PerfilAdmin from './PerfilAdmin'

export default function UserAdmin() {
  return (
    <div className="MenLeft">
            <h3>VISTA ADMINISTRADOR</h3>
            <div className="out">
                <GoOut/>
            </div>
                    <div className="row view-perfil">
                        <div className="col-4 cont-perfil">
                            <div className="list-group list-perfil" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Mi Perfil</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Lista de Alumnos</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Lista de Profesores</a>
                            </div>
                            <div className="col-8 desc-perfil">
                                <div className="tab-content content-perfil" id="nav-tabContent">
                                    <div className="tab-perfil tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><PerfilAdmin/></div>
                                    <div className="tab-perfil tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><ListaAlumnosGeneral/></div>
                                    <div className="tab-perfil tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><ListaDocentesGeneral/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
