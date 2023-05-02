import './Navbar.css'


const NavbarElements = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src = "../../img/logoNombre.png" alt="" width="30" height="24"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle btn-lg tituloNavbar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sobre Seguros
            </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-4 tituloNavbar"  aria-current="page" href="#">Atención al cliente</a>
            </li>
          </ul>
          <div class = "telefono">
            <img src="./../../img/telefonoGris.png" class="img-fluid"></img>
            <span class="navbar-brand mb-0 tituloNavbar mx-3"> (01) 654 3636</span>
          </div>
          <form class="d-flex mx-3 ">
            <button type="button" class="btnGeneral">Ingresa a tu Cuenta</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarElements;

