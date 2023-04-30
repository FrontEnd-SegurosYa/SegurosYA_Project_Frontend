import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

function NavbarElements() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	return (
    <header>
    <h2> </h2>
    <img src={require('../../img/logo_nombre.png')} className = 'EstiloLogoNavegacion'/>
    <nav ref={navRef}>
      <a href="/#">Sobre seguros</a>
      <a href="/#">Atención al cliente</a>
      <button
        className="nav-btn nav-close-btn"
        onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button
      className="nav-btn"
      onClick={showNavbar}>
      <FaBars /> 
    </button>
  </header>
	);
}

export default NavbarElements;
