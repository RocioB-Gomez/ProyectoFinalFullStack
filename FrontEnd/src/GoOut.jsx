import { useState } from "react";
import { useNavigate } from "react-router-dom"



export default function GoOut() {

    const Navigate = useNavigate()

    const HandleClick = () => {
        Navigate('/acceder')
    }
    let navegar = useNavigate();

    let [isLogin, setLogin] = useState(false);

   function sesionIn() {
        setLogin(true);
        navegar('/profesor/:id')
   }

   function sesionOut() {
        setLogin(false);
        navegar('/acceder');
   }
    return(
        <>
        <button onClick={sesionOut}>Cerrar Sesión</button>
    </>
    )
}