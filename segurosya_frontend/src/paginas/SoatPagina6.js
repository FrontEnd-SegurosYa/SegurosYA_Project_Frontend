import React from 'react';
import Navbar from '../componentes/navbar/Navbar'
import PDFSoat from '../componentes/pdfSoat/PDFSoat'
import { useLocation } from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';


function SoatPagina6() {
  const location = useLocation();
  const informacionClientes = location.state;
  const datosCliente = informacionClientes.datosCliente;
  const informacionPlaca = informacionClientes.informacionPlaca;
  const informacionAuto = informacionClientes.informacionAuto;
  const monto = informacionClientes.monto;
  return (
    <>
      <Navbar/>
      
      <PDFSoat datosCliente={datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} monto = {monto}/>
    </>
  );
}
export default SoatPagina6;