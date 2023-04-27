import './EstilosComponentes.css';
import React from 'react';

import imagenPrincipal from './img/brand.png';

const Navbar = () => {
    return(
        <div>
            <Nav>
                <NavLink to="/">
                   <h1>logo</h1>
                </NavLink>
            </Nav>
        </div>
    );
};
export default Navbar;
   

export function ContenedorPrincipal (){
    return <section>
        <button name="button" className='EstiloBotonCompra'>Compra AQUI</button>
        <button name="button" className='EstiloBotonCotiza'>Cotiza AQUI</button>
        <img src={imagenPrincipal} width= {"1289px"} height= {"330px"} className='EstiloImagenPrincipal'/>
    </section>
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
