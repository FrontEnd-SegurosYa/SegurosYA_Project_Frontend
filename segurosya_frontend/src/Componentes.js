import './EstilosComponentes.css';
import { useRef } from "react";
import './NavbarElements'
import React from 'react';

import imagenPrincipal from './img/brand.png';
import NavbarElements from './NavbarElements';

function Navbar() {
	return (
		<React.Fragment>
			<NavbarElements/>
		</React.Fragment>
	);
}

export default Navbar;
   

export function ContenedorPrincipal (){
    return <div class = 'back-imag'>
        <p class='EstiloTextoSOAT'>Inicia tu trámite de SOAT con nosotros HOY</p>
        <button name="button" class='EstiloBotonCompra'>Compra AQUI</button>
    
        <p class='EstiloTextoSeguro'>Cotiza tu seguro vehicular aquí HOY</p>
        <button name="button" class='EstiloBotonCotiza'>Cotiza AQUI</button>

    </div>
}

export function Presentacion (){
    return <section>
        <p className='EstiloPresentacion'>Somos SegurosYA!, compañía de seguros líder en el mercado en la oferta de seguros de <br></br>
    automóviles en todo el país.<br></br>
    Nos enorgullece ofrecer una amplia variedad de soluciones de seguro de vehículos, que <br>
    </br>cubren todos los riesgos que pueden enfrentar nuestros clientes en la carretera. <br></br>
    Entendemos la importancia de proteger su vehículo y a sus ocupantes, y por eso nos <br></br>
    esforzamos por brindar el mejor servicio posible a todos nuestros clientes. <br></br></p>
        <button name="button" className='EstiloBotonProductos'>Más Productos</button>
    </section>
}
