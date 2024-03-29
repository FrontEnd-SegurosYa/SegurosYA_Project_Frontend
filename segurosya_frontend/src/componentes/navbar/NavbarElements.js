import './Navbar.css'
import logo from '../../img/logoNombre.png';
import telefono from '../../img/telefonoGris.png';
import usuario from '../../img/usuario.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const NavbarElements = ({comportamiento,cuentaCliente}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  let componenteCuenta;

  switch(comportamiento) {
    case "mostrar":
      componenteCuenta = 
      <form className="d-flex mx-3 mostrar">
        <Link to={"/iniciarSesion"} state={cuentaCliente}>
          <button type="button" className="btnGeneral btnInicioSesion">Ingresa a tu Cuenta</button>
        </Link>
      </form>;
      break;
    case "ocultar":
      componenteCuenta = 
        <></>;
      break;
    case "cuenta":
      componenteCuenta = 
      <div className='containerNavBar'>
        <div className="columna">
          {/* <div className='textoNav'>William Levi </div> */}
          <div className='textoNav'>{cuentaCliente.apellidoPaterno+", "+cuentaCliente.nombre} </div>
          {/* {cuentaCliente.apellidoPaterno+", "+cuentaCliente.nombre} */}
          <Link to={"/"}>
            <a className='textoNav'>Cerrar Sesión</a>
          </Link>
        </div>
        <div className="columna imagenUsuario">
          <img src = {usuario} alt="" width="33" height="30" className="mx-3"/>
          </div>
      </div>;      
      break;
  }

  // console.log(comportamiento);
  return(
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to={"/ "} >
          <a className="navbar-brand logo mx-2" href="#">
            <img src = {logo} alt="" width="80" height="40" className="d-inline-block align-text-top"/>
          </a>
        </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <button className="navbar-toggler" type="button" > */}
            <span className="navbar-toggler-icon"></span>
          </button>
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li className="nav-item dropdown">
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <div className = "telefono">
            <img src={telefono} className="img-fluid" width="17" height="17"></img>
            <span className="navbar-brand mb-0 tituloNavbar mx-2"> (01) 654 3636</span>
          </div>
            {componenteCuenta}
          
        </div>
      </div>
    </nav>
  )
}

export default NavbarElements;

