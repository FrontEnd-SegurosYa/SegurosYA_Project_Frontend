import NavbarElements from './NavbarElements';
import React from 'react';


function Navbar({comportamiento}) {
	return (
		<React.Fragment>
			<NavbarElements comportamiento={comportamiento}/>
		</React.Fragment>
	);
}
export default Navbar;

