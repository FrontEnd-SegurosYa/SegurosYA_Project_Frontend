import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {ContenedorPrincipal,Presentacion} from './componentes/Componentes'
import Navbar from './componentes/navbar/Navbar' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar/>
        <ContenedorPrincipal/>
        <Presentacion/>
    </>
)
