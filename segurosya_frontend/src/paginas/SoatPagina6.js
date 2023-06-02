import React, {useEffect} from 'react';
import Navbar from '../componentes/navbar/Navbar'
import PDFSoat from '../componentes/pdfSoat/PDFSoat'
import { useLocation } from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';
import { useNavigate } from "react-router-dom";


function SoatPagina6() {
  const navigate = useNavigate();
  const location = useLocation();
  // const informacionClientes = location.state;
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null;
  var informacionAuto = null;
  var planSeleccionado = null;

  console.log('Se recibio en soat6');
  console.log(location.state);

  if(location.state !== null){    
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    informacionPlaca = location.state.informacionPlaca;
    informacionAuto = location.state.informacionAuto;
    planSeleccionado = location.state.planSeleccionado;
    //data al volver
  }

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      
      <PDFSoat informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} planSeleccionado = {planSeleccionado}/>
    </>
  );
}
export default SoatPagina6;