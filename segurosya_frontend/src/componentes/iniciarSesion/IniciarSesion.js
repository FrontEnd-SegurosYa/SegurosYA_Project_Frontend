import React, { Fragment } from 'react'
import "./IniciarSesion.css";
import '../../index.css'
import hombre from '../iniciarSesion/HombreLlaves.png'
import mujer from '../iniciarSesion/MujerTelefono.png'
import { Link } from 'react-router-dom';

export const IniciarSesion = () => {
  return (
    <div className='IniciarSesion'>
      <div className='Imagen'>
        <img className='ImgMujer' src={mujer}/>
      </div>
      <div className='Registrar'>
        <p className='Titulo'>Registrarse</p>
        <p><input className= "Ingresa" value="Correo electrónico"></input></p>
        <p><input className= "Ingresa" value="Contraseña"></input></p>
        <Link to={"/"}><p><button className="BotonIniciar">Iniciar sesión</button></p></Link>
        <a>¿No tienes una cuenta?</a>&nbsp;&nbsp;
        <Link to={"/crearCuenta"}><a>Registrate</a></Link>
        <p><a>¿Has olvidado tu contraseña?</a></p>
        <p>------------o------------</p>
        <Link to={"/"}><button className="BotonGoogle">Iniciar sesión con Google</button></Link>
      </div>
      <div className='Imagen'>
        <img className='ImgHombre' src={hombre}/>
      </div>
    </div>
  )
}

export default IniciarSesion;