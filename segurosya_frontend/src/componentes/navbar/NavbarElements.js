import './Navbar.css'
import logo from '../../img/logoNombre.png';
import telefono from '../../img/telefonoGris.png';
import { Link } from 'react-router-dom';


const NavbarElements = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand logo mx-2" href="#">
          <img src = {logo} alt="" width="80" height="40" class="d-inline-block align-text-top"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle btn-lg tituloNavbar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sobre Seguros
            </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">SOAT</a></li>
                <li><a class="dropdown-item" href="#">Seguros Vehiculares</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-4 tituloNavbar"  aria-current="page" href="#">Atención al cliente</a>
            </li>
          </ul>
          <div class = "telefono">
            <img src={telefono} class="img-fluid" width="17" height="17"></img>
            <span class="navbar-brand mb-0 tituloNavbar mx-2"> (01) 654 3636</span>
          </div>
          <form class="d-flex mx-3 ">
            <Link to={"/FormularioClienteSinCuenta"}>
              <button type="button" class="btnGeneral">Ingresa a tu Cuenta</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarElements;

