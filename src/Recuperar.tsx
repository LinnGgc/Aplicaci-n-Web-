import { useState } from "react";
import logotipo from "./assets/logo.jpeg";
import "./estilos/recuperar.css";

const Recuperar = () => {
    const [correo, setCorreo] = useState("");

    const onIngresar = async () => {{
        const url = "http://localhost:4000/Usuario/Contrasena";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                CorreoElectronico: correo
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.text();
            alert(mensaje);
        }
        else{
            alert ("Correo enviado");
        }
    }}

    return(
        <div className="contenedor-rec">

        <div className="titulo">Enseña.Me LSM</div>

        <div>
            <img src={logotipo}className="logo"/>
        </div>

        <div className="subtitulo">Olvidaste tu contraseña</div>

        <div className="agrupador-correo"> 
        <div>Correo Electrónico</div>
        <div>
            <input 
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
            </div>
        </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar()}>Aceptar</button>
                </div>
                
                </div>
    )
}

export default Recuperar