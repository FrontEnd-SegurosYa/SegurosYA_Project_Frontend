import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet,Image,Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logoImage from '../../img/logoMinisterio.png';
import logoNombreAzul from '../../img/logoNombreAzul.png';
import '../../index.css'
import RobotoRegular from '../../fonts/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto-Bold.ttf';
import { addDays, addMonths, addYears, format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useForm, Controller} from 'react-hook-form';


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
  headers:{
    marginBottom: 4,
    color: "#7C7D81",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '12pt',
  },
  headers2:{
    marginBottom: 8,
    color: "#7C7D81",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '14pt',
  },
  poliza:{
    color: '#3E54AC',  
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    fontSize: '15pt',
    marginBottom: 10
  },
  lineas:{
    color: '#BFDCE5',  
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 8
  },
  datos:{
    color: '#3E54AC',  
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    fontSize: '12pt',
    marginBottom: 10
  },
  numEmergencia:{
    color: '#3E54AC',
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    fontSize: '30pt',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 35, 
    marginRight: 'auto'
  },
  footer1:{
    marginBottom: 7,
    color: "#7C7D81",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '8pt',
    textAlign: 'center',
    marginLeft: '130', 
    marginRight: '130',
    paddingRight: "26",
    paddingLeft: "26",
  },
  footer2:{
    marginBottom: 5,
    color: "#FFFFFF",
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    fontSize: '8pt',
    textAlign: 'center',
    marginLeft: '50', 
    marginRight: '50',
    backgroundColor: "#3E54AC",
    paddingBottom: "10",
    paddingTop: "10",
    paddingRight: "50",
    paddingLeft: "50",
    borderRadius: "6"
  },
});

function PDFSoat ({informacionClienteSinCuenta,informacionPlaca,informacionAuto,planSeleccionado})  {
  const fechaActual = new Date();
  const fechaDiaDespues = addDays(fechaActual, 1); // Sumar un día
  const fechaFutura = addYears(fechaDiaDespues, 1); // Sumar un año
  const { control, register,handleSubmit,formState: { errors } ,setValue} = useForm();
  const str = informacionPlaca.uso;
  const strMayusculas = str.toUpperCase();

  const placaMini = informacionPlaca.placa;
  const placaMayusculas = placaMini.toUpperCase();

  return (
    <>
    <PDFViewer  style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image src={logoImage} />
            <Text style={styles.texto}> Certificado Electrónico</Text>
            <Text style={styles.texto}> Decreto Supremo 015-2016  MTC</Text>

            <View style={styles.section}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.columna}>
                  <Text style={styles.texto }>COMPAÑIA DE SEGUROS</Text>
                  <Image src={logoNombreAzul} style = {styles.imagenLogo}/>
                </View>
                <View style={styles.columna}>
                  <Text style={styles.texto }>EN CASO DE EMERGENCIAS</Text>
                  <Text style={styles.numEmergencia}>500 000</Text>
                </View>
              </View>
              <Text style={styles.texto}>Dirección: Av. República de Panamá  4056, San Isidro</Text>
              <Text style={styles.lineas}>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</Text>
              <Text style={styles.poliza}>VIGENCIA DE LA POLIZA</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.columna}>
                  <Text style={styles.headers}>N° Poliza - Certificado</Text>
                  <Text style={styles.datos}>8022-700000001231</Text>
                  <Text style={styles.headers}>Desde</Text>
                  <Text style={styles.datos}>{format(fechaDiaDespues, 'dd/MM/yyyy')}</Text>
                  <Text style={styles.headers}>Hasta</Text>
                  <Text style={styles.datos}>{format(fechaFutura, 'dd/MM/yyyy')}</Text>
                  <Text style={styles.headers2}>VEHICULO ASEGURADO</Text>
                  {/* <Text style={styles.headers}>{informacionPlaca.placa}</Text> */}
                  <Text style={styles.datos}>{informacionPlaca.placa}</Text>
                  <Text style={styles.headers}>Categoria</Text>
                  {/* <Text style={styles.datos}>{informacionPlaca.uso}</Text> */}
                  <Text style={styles.datos}>AUTOMOVIL</Text>
                  <Text style={styles.headers}>Uso</Text>
                  <Text style={styles.datos}>{informacionPlaca.uso.toUpperCase()}</Text>
                  <Text style={styles.headers}>Vln / N° de serie</Text>
                  <Text style={styles.datos}>G4HSJT576823</Text>
                </View>    
                <View style={styles.columna}>
                  <Text style={{marginBottom: 1,color: "#7C7D81",fontFamily: 'Roboto', fontWeight: 'bold',fontSize: '12pt',}}>CERTIFICADO SOAT</Text>
                  <Text style={{marginBottom: 15,color: "#7C7D81",fontFamily: 'Roboto', fontWeight: 'bold',fontSize: '12pt',}}>CONTROL POLICIAL</Text>
                  <Text style={styles.headers}>Desde</Text>
                  <Text style={styles.datos}>{format(fechaDiaDespues, 'dd/MM/yyyy')}</Text>
                  <Text style={styles.headers}>Hasta</Text>
                  <Text style={styles.datos}>{format(fechaFutura, 'dd/MM/yyyy')}</Text>
                  <Text style={styles.headers2}>CONTRATANTE / ASEGURADO</Text>
                  <Text style={styles.datos}>{informacionClienteSinCuenta.nombre+" "+informacionClienteSinCuenta.apellidoPaterno+" "+informacionClienteSinCuenta.apellidoMaterno}</Text>
                  <Text style={styles.headers}>Importe de la prima</Text>
                  <Text style={styles.datos}>{planSeleccionado.monto}</Text>
                  <Text style={styles.headers}>Fecha</Text>
                  <Text style={styles.datos}>{format(fechaActual, 'dd/MM/yyyy')}</Text>
                  <Text style={styles.headers}>Hora de emisión</Text>
                  <Text style={styles.datos}>{format(fechaFutura, 'HH:mm:ss')}</Text>
                </View>  
              </View>        
            </View>
            <Text style={styles.footer1}>Los establecimientos de salud públicos y privados están obligados a
                  prestar atención médica quirúrgica de emergencia en caso de la
                  ocurrencia de un accidente de tránsito conforme en la Ley  N° 26842,
                  Ley General de Salud y su Reglamento.
            </Text>
            <Text style={styles.footer2}>La información sobre las obligaciones y derechos del 
                  contratante/asegurado, coberturas y exclusiones, 
                  las podría encontrar ingresando a www.apeseg.org.pe/soat o solicitando tu cartilla 
                  informativa en las oficinas de la compañia de seguros.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
    <div className ="botones text-center">
      <Link to={"/"}>
          <button type="button" className="btnGeneral2 mx-3">Volver</button>
      </Link>
    </div>
    </>
  );
}
export default PDFSoat;