import { Link, useNavigate } from "react-router-dom";
import './style/LogIn.css';
import { useState } from "react";

export default function Login() {
    let navegar = useNavigate();

    let [isLogin, setLogin] = useState(false);
    let [userRole, setUserRole] = useState(''); // Guardamos el rol del usuario

    // Array de usuarios simulados con sus roles
    const usuariosSimulados = [
        { username: "tutor1", password: "tutor123", role: "tutor" },
        { username: "docente1", password: "docente123", role: "docente" },
        { username: "admin1", password: "admin123", role: "administrador" }
    ];

    // Función para manejar el inicio de sesión
    function sesionIn(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Buscar al usuario en el array de usuarios simulados
        const usuario = usuariosSimulados.find(
            (usuario) => usuario.username === username && usuario.password === password
        );

        if (usuario) {
            setUserRole(usuario.role);
            setLogin(true);

            // Redirigir según el rol del usuario
            if (usuario.role === "administrador") {
                navegar("/administrador");
            } else if (usuario.role === "docente") {
                navegar("/docente");
            } else if (usuario.role === "tutor") {
                navegar("/tutor");
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    // Si el usuario ya está logueado y tiene un rol, redirigir automáticamente
    if (isLogin) {
        if (userRole === "administrador") {
            return <h1>Bienvenido, Administrador</h1>; // O tu componente de Admin
        } else if (userRole === "docente") {
            return <h1>Bienvenido, Docente</h1>; // O tu componente de Docente
        } else if (userRole === "tutor") {
            return <h1>Bienvenido, Tutor</h1>; // O tu componente de Tutor
        }
    } else {
        return (
            <>
                <div className="log">
                    <Link to="/"><h1>Educatio<img src="public/silhouette-of-a-purple-graduation-cap-editable-flat-icon-design-in-eps10-format-simple-unique-elegant-and-cute-free-vector-fotor-bg-remover-20240924164229.png" width="70px" height="70px" /></h1></Link>
                    <form onSubmit={sesionIn}>
                        <p>
                            <input type="text" name="username" placeholder="Introduzca su usuario" required />
                        </p>

                        <p>
                            <input type="password" name="password" placeholder="Contraseña" required />
                        </p>
                        <button type="submit">Ingresar</button>
                        <a className="in" href="#">¿Te olvidaste tu contraseña?</a>
                        <p className="quest">¿No tenés cuenta?<a href="registro.html"> Crear Cuenta</a></p>
                        <button type="submit">Iniciar sesión con Gmail</button>
                        <button type="submit">Iniciar sesión con Facebook</button>
                    </form>
                </div>
            </>
        );
    }
}
