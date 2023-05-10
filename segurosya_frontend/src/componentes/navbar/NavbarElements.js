import './Navbar.css'
import logo from '../../img/logoNombre.png';
import telefono from '../../img/telefonoGris.png';
import { Link } from 'react-router-dom';


const NavbarElements = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand logo mx-2" href="#">
          <img src = {logo} alt="" width="80" height="40" className="d-inline-block align-text-top"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle btn-lg tituloNavbar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sobre Seguros
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">SOAT</a></li>
                <li><a className="dropdown-item" href="#">Seguros Vehiculares</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-4 tituloNavbar"  aria-current="page" href="#">Atención al cliente</a>
            </li>
          </ul>
          <div className = "telefono">
            <img src={telefono} className="img-fluid" width="17" height="17"></img>
            <span className="navbar-brand mb-0 tituloNavbar mx-2"> (01) 654 3636</span>
          </div>
          <form className="d-flex mx-3 ">
            <Link to={"/iniciarSesion"}>
              <button type="button" className="btnGeneral btnInicioSesion">Ingresa a tu Cuenta</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarElements;

