import NavbarElements from './NavbarElements';
import React from 'react';


function Navbar({comportamiento,cuentaCliente}) {
	return (
		<React.Fragment>
			<NavbarElements comportamiento={comportamiento} cuentaCliente={cuentaCliente}/>
		</React.Fragment>
	);
}
export default Navbar;

