import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";

import infoAutosJSON from "./infoAutos.json";

export const DatosCarro = ({datosCliente,informacionPlaca}) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const marcasAutos = infoAutosJSON.marcas;

  const [marca,setMarca] = useState(marcasAutos[0].nombre);
  const [listaMarcas,setListaMarcas] = useState(marcasAutos);
  const [modelo,setModelo] = useState(marcasAutos[0].modelos[0].nombre);
  const [listaModelos,setListaModelos] = useState(marcasAutos[0].modelos);
  const [anhoFabricacion,setAnhoFabricacion] = useState(1999);
  const [numeroAsientos,setNumeroAsiento] = useState(2);
  
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
  );

  const listaAnhosFabricacion = arrayRange(1999, 2023, 1);
  const listaNumeroAsientos = arrayRange(2, 8, 1);

  const informacionAuto = {
    marca: marca,
    modelo: modelo,
    anhoFabricacion: anhoFabricacion,
    numeroAsientos: numeroAsientos
  };

  const cambioMarca = (marcaSelec) => {
    const marcaObtenida = marcasAutos.find( (marca)  => marca.nombre === marcaSelec);

    setMarca(marcaObtenida.nombre);

    setListaModelos(marcaObtenida.modelos);
    setModelo(marcaObtenida.modelos[0].nombre);
  };

  const cambioModelo = (modeloSelec) => {
    const modeloObtenido = listaModelos.find( (modelo)  => modelo.nombre === modeloSelec);

    setModelo(modeloObtenido.nombre);
  };

  const cambioAnhoFabricacion = (anhoSelec) => {
    setAnhoFabricacion(parseInt(anhoSelec));
        
  };

  const cambioNumeroAsientos = (numAsientosSelec) => {
    setNumeroAsiento(parseInt(numAsientosSelec));
  };

  useEffect(() => {
    setListaMarcas( marcasAutos );
  }, []);

  // Declaraciones para botones
  const onSubmit = (data) => {      
      const informacionCliente = {datosCliente,informacionPlaca,informacionAuto};
      console.log(informacionCliente);
      navigate("/cotizacion3", {state:informacionCliente});
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className='containerR'>
        <div className="containerFormularioCarroSeguro">
            <h4 className = "TituloSeguro2"><b>Ingresa los datos de tu auto para cotizar</b></h4>
            <br/>
            
              <div className='Form'>
                <div className='Opciones'>
                  <p className='SubsubTitulo'>Marca</p>
                  <Controller
                    name="marca"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <select onChange={(e) => {
                          onChange(e.target.value);
                          cambioMarca(e.target.value);
                      }} className='Resultado'>
                      {listaMarcas.map((option) => (
                        <option key={option.nombre} value={option.nombre}>
                            {option.nombre}
                        </option>
                      ))}
                      </select>
                    )}
                  />
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Modelo</p>
                  <Controller
                    name="modelo"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <select onChange={(e) => {
                          onChange(e.target.value);
                          cambioModelo(e.target.value);
                      }} className='Resultado'>
                      {listaModelos.map((option) => (
                        <option key={option.nombre} value={option.nombre}>
                            {option.nombre}
                        </option>
                      ))}
                      </select>
                    )}
                  />
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Año de fabricacion</p>
                  <Controller
                    name="anhoFabricacion"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <select onChange={(e) => {
                          onChange(e.target.value);
                          cambioAnhoFabricacion(e.target.value);
                      }} className='Resultado'>
                      {listaAnhosFabricacion.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                      ))}
                      </select>
                    )}
                  />
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Número de asientos</p>
                  <Controller
                    name="numeroAsientos"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        className="Resultado"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              
            
        </div>
        <div className='imagenSeguro2 containerImagenCarroSeguro ' alt = "imagenSeguro2">
          <></>
        </div>
      </div>
      <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion1"}>
            <button type="button" className="btnGeneral2 mx-3">Volver</button>
          </Link>
          <button type="submit" className="btnGeneral mx-3">Continuar</button>
        </div>
      </div>
    </form>    
    </>
  )

}
  export default DatosCarro;
