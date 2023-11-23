import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logo.jpeg";
import "./estilos/registro.css";


const Registro = () => {
    
    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const[password, setPassword] = useState("");
    const[nombre, setNombre] = useState("");
    
    const onRegistrar = async () => {{
        const url = "http://localhost:4000/usuario/registro";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                Nombre: nombre,
                CorreoElectronico: correo,
                Contrasena: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.json();
            alert(mensaje);
        }
        else{
            alert ("Usuario registrado correctamente");
            navigate("/");
        }
    }}

    return(
        <div className="contenedor-reg">

        <div className="titulo">EnseñaMe LSM</div>

        <div>
            <img src={logotipo}className="logo"/>
        </div>

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

        <div className="Nombre"> 
        <div>Nombre</div>
        <div>
            <input 
            type="text"
            placeholder="Ingresa tu nombre"
            className="caja-nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}/>
            </div>
        </div>

        <div className="agrupador-password">
        <div>Contraseña </div>
        <div>
            <input
            type="password"
            placeholder="Password"
            className="caja-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onRegistrar()}>Registrarme</button>
                </div>

                <div className="otros-botones">
                <a href="/" className="link-registro">Regresar</a>
                </div>

                </div>
    )
}

export default Registro