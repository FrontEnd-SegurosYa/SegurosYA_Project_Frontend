// CotizacionPaginaCoberturas.js temporal
import React, { useEffect } from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import Resumen from '../componentes/resumenCotizacion/Resumen';
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Utiles
import {SeleccionCoberturas} from "../componentes/seleccionCoberturas/SeleccionCoberturas.js";

function CotizacionPaginaCoberturas() {
    const location = useLocation();
    const navigate = useNavigate();
  
    
    var informacionClienteSinCuenta = null;
    var informacionPlaca = null;
    var informacionAuto = null;
  
    console.log("cotizacionCobertura recibio");
    console.log(location.state);
  
    if(location.state !== null){
      //Informacion devuelta
      informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
      informacionPlaca = location.state.informacionPlaca;    
      informacionAuto = location.state.informacionAuto;
    }
  
    //Redirigir a inicio si no se realizo el flujo anterior
    useEffect(() => {
      if(location.state === null){
        navigate("/");
      }
    },[]);
  
    return (
      <>
        <Navbar comportamiento={"mostrar"}/>
        <BarraProgresoSeguro paso = {4}/>
        {/* <Resumen informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} /> */}
        <SeleccionCoberturas informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} />
      </>   
    );
  }
  export default CotizacionPaginaCoberturas;