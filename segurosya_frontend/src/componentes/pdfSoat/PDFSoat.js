import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logoImage from '../../img/logoMinisterio.png';
import logoNombreAzul from '../../img/logoNombreAzul.png';
import '../../index.css'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  columna: {
    width: '50%', // Ajusta el ancho de cada columna (en este caso, 50%)
    padding: 10, // Agrega un espacio de relleno entre las columnas
  },
  texto: {
    marginBottom: 8,
    color: "#7C7D81",
    fontWeight: 'bold',
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

const PDFSoat = () => (
  <PDFViewer  style={styles.viewer}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} />
          <Text style={styles.texto}>Certificado Electrónico</Text>
          <Text style={styles.texto}>Decreto Supremo 015-2016  MTC</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);
  
export default PDFSoat;