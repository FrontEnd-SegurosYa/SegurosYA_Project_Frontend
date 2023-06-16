import '../index.css';
import React, {useEffect} from 'react';

import {Presentacion} from '../componentes/presentacion/Presentacion'
import Navbar from '../componentes/navbar/Navbar' 
import {ContenedorPrincipal} from '../componentes/contenedorPrinc/ContenedorPrincipal' 


//Utiles
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PaginaInicio() {
    //Verificacion de Inicio de Sesion
    const navigate = useNavigate();
    const location = useLocation();
    var clienteCuenta = null;

    console.log("se recibio");
    console.log(location.state);

    if(location.state !== null){
      // cuenta si inicio de sesion
      clienteCuenta = location.state;
    }
    
    return (
      <>
        {clienteCuenta !== null ? (
          <Navbar comportamiento={"cuenta"} cuentaCliente={clienteCuenta}/>
        ) : (
          <Navbar comportamiento={"mostrar"} cuentaCliente={clienteCuenta}/>
        )}

        <ContenedorPrincipal/>
        <Presentacion/>
        {/* <p>{clienteCuenta && clienteCuenta.idCliente}</p> */}

      </>
  );
  }
  
export default PaginaInicio;
