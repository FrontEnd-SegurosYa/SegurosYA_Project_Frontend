import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar, {ContenedorPrincipal,Presentacion} from './Componentes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar/>
        <ContenedorPrincipal/>
        <Presentacion/>
    </>
)