import React from 'react';
import '../index.css';

import {Presentacion} from '../componentes/presentacion/Presentacion'
import Navbar from '../componentes/navbar/Navbar' 
import {ContenedorPrincipal} from '../componentes/contenedorPrinc/ContenedorPrincipal' 


//Utiles
import { useLocation } from "react-router-dom";

function PaginaInicio() {
    return (
        <>
          <Navbar/>
          <ContenedorPrincipal/>
          <Presentacion/>
        </>
    );
  }
  
export default PaginaInicio;
