import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagenCheck from '../../img/check.png'
import imagenSeguro from '../../img/seguro.png'
import { Page, Text, View, Document, StyleSheet,Image,Font, pdf } from '@react-pdf/renderer';
import { PDFViewer, PDFJSStatic } from '@react-pdf/renderer';
import './fecha'
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import RobotoRegular from '../../fonts/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto-Bold.ttf'
import logoNombreAzul from '../../img/logoNombreAzul.png';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";

import { crearCotizacion,pruebaEnvioCorreoArchivoAdjunto } from "./funcionesExtras";
Font.register({
  family: 'Roboto',
  fonts: [
    { src: RobotoRegular, fontWeight: 'normal' },
    { src: RobotoBold, fontWeight: 'bold' },
  ],
});


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  columna: {
    width: '50%', // Ajusta el ancho de cada columna (en este caso, 50%)
    padding: 6, // Agrega un espacio de relleno entre las columnas
  },
  texto: {
    marginBottom: 5,
    color: "#7C7D81",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '15pt',
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  imagenLogo:{
    width: 100, 
    height: 55,
    marginLeft: '35', 
    marginRight: 'auto',
  },
  lineas:{
    marginBottom: 4,
    color: "#7C7D81",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '10pt',
  },
  datosSeguro:{
    color: '#3E54AC',  
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    fontSize: '15pt',
    marginBottom: 10
  },
  datosSeguro2:{
    color: '#3E54AC',  
    fontWeight: 'normal',
    fontFamily: 'Roboto', 
    fontSize: '13pt',
    marginBottom: 10
  },
  cobertura:{
    color: '#7C7D81',  
    fontWeight: 'normal',
    fontFamily: 'Roboto', 
    fontSize: '10pt',
    marginBottom: 10
  },
})

const generatePDF = async (marca,modelo,anhoFabricacion,numAsientos,nombresCoberturas,fecha,monto) => {
  const doc = (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.section}>
        <Image src={logoNombreAzul} style = {styles.imagenLogo}/>
          <View style={styles.section}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.columna}>
                <Text style={styles.datosSeguro }>Información del auto</Text>
                <Text style={styles.lineas }>{"1. Marca:" + marca}</Text>
                <Text style={styles.lineas }>{"2. Modelo: " + modelo}</Text>
                <Text style={styles.lineas }>{"3. Año de fabricación: "+ anhoFabricacion}</Text>
                <Text style={styles.lineas }>{"4. Número de asientos: "+ numAsientos}</Text>
              </View>
              <View style={styles.columna}>
                <Image src={imagenSeguro} />
              </View>
            </View>
            <Text style={styles.datosSeguro}> Resumen de la cotización </Text>
            <Text style={styles.datosSeguro2}> Coberturas adicionales: </Text>
            {nombresCoberturas.map((nombresCoberturas, index) => (
              <Text key={index} style={styles.cobertura}>{index+1 + ". "+ nombresCoberturas + " :  14.00"}</Text>
            ))}
            <Text style={styles.lineas}> {"Total: " + monto.toFixed(2)}</Text>
            <Text style={styles.lineas}> {"Esta cotización tiene vigencia hasta el día: " + fecha} </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const pdfBlob = await pdf(doc).toBlob(); // Convert the PDF into a Blob object
  return pdfBlob;
};

const sendPDF = async (marca,modelo,anhoFabricacion,numAsientos,nombresCoberturas,fecha,monto,correo) => {
  const pdfBlob = await generatePDF(marca,modelo,anhoFabricacion,numAsientos,nombresCoberturas,fecha,monto);
  pruebaEnvioCorreoArchivoAdjunto(pdfBlob,correo,"Cotización","Estimado cliente, se le hace envío de su cotización.")
};

function Resumen({informacionClienteSinCuenta,informacionPlaca,informacionAuto,listaDeIdCoberturas,nombresCoberturas,monto})  {
  
  const { control, handleSubmit,setValue } = useForm();
  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() + 1);
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaActual.getFullYear();
  const fechaActualTexto= `${dia}/${mes}/${anio}`;
  const marca = informacionAuto.marca.nombre;
  const modelo = informacionAuto.modelo.nombre;
  const anhoFabricacion = informacionAuto.anhoFabricacion;
  const numAsientos = informacionAuto.numeroAsientos;
  const correo = informacionClienteSinCuenta.correoElectronico;

  const onSubmit = (data) => {      
    const informacionCotizacion = {
      newCliente: {
        nombre: informacionClienteSinCuenta.nombre,
        apellidoPaterno: informacionClienteSinCuenta.apellidoPaterno,
        apellidoMaterno: informacionClienteSinCuenta.apellidoMaterno,
        dni: informacionClienteSinCuenta.DNI
      },
      newAuto: {
        placa: informacionPlaca.placa,
        anhoFab: informacionAuto.anhoFabricacion,
        valorComercial: 19000,
        uso: "Particular",
        idModelo: informacionAuto.modelo.idModelo,
        idMarca: informacionAuto.marca.idMarca
      },
      newCotizacion: {
        tieneInsveh: informacionPlaca.poseeInspeccionVehicular === true ? 1 : 0,
        costoAdicional: monto,
        montoPrima: 40
      },
      listaDeIdCoberturas: listaDeIdCoberturas
    }
    crearCotizacion(informacionCotizacion)
    .then( respuesta => {
      if(parseInt(respuesta) === -1){
        alert("Error en la creacion de la cotizacion.");
      }else{
        console.log("Se creo la cotizacion:"+respuesta);
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
  
  return (
    <>
      <div className="containerR">
        <div className="cardResumen">
          <h2><b>Información del auto</b></h2>
          <ol>
            <li> Marca: {informacionAuto.marca.nombre}</li>
            <li> Modelo: {informacionAuto.modelo.nombre} </li>
            <li> Año de fabricación: {informacionAuto.anhoFabricacion} </li>
            <li> Número de asientos: {informacionAuto.numeroAsientos} </li>
          </ol>
        </div>
        <div className="cardResumen imagen">
          <></>
        </div>
      </div>
      <div className="containerR">
        <div className="cardResumen">
          <h2> <b> Resumen de la cotización </b></h2>
          <h3>Coberturas adicionales: </h3>
          {
            // Aca te deberia listar el array?? SI
            nombresCoberturas.map((nombresCoberturas, idx) => (
                <h5>{idx+1}. {nombresCoberturas} 14.00<br/></h5>
                
            ))
            
          }
          <h3>Total: {monto.toFixed(2)}</h3>
          <h5> <b>Esta cotización tiene vigencia hasta el día:  {fechaActualTexto}</b></h5>
        </div>
      </div>
      <br/>
      <div className="text-center">
            <Link to={"/cotizacionTemp"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca, informacionAuto: informacionAuto}}>
              <button className="btnGeneral2" >Volver</button>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
              <button className="btnGeneral2" data-bs-toggle="modal" data-bs-target="#volverModal">Continuar</button>
            </form>
            
            
      </div>
      <div className="modal fade " id="volverModal" tabIndex="-1" aria-labelledby="volverModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modalMensajes">
              <img src={imagenCheck} className="img-fluid check" alt = "Check"/>
              <div className="modal-header">
                <h3 className="modal-title Textos" id="volverModalLabel"> <b>Gracias por cotizar con SegurosYA!</b></h3>
              </div>
              <div className="modal-body Textos" >
                <h4>Se le enviará la cotización a su correo electrónico</h4> 
              </div>
              <div className="modal-footer">
                <Link to={"/"} >
                  <button className="btnGeneral btnVolverCentrado" data-bs-dismiss="modal" onClick={sendPDF(marca,modelo,anhoFabricacion,numAsientos,nombresCoberturas,fechaActualTexto,monto,correo)}>Volver</button>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <br/>
    </>
  );
}
export default Resumen;






