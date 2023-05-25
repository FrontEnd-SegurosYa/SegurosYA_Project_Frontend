import React, { Fragment } from 'react'
import "./datosCarroSoat.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";
import imagenSoat2 from '../../img/carro.png'

import infoAutosJSON from "./infoAutos.json";

export const DatosCarroSoat = ({informacionPlaca,datosCliente}) => {
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
      navigate("/soat3", {state:informacionCliente});
  }
  return (
    <>
    <div className='containerR'>
        <div className="containerFormularioCarroSoat">
            <h4 class = "TituloSoat2"><b>Verifica tu tarjeta de propiedad y completa los datos</b></h4>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </div>
        <div className='imagenSoat2 containerImagenCarroSoat ' alt = "imagenSoat2">
          <></>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
          <Link to={"/soat3"}>
            <button type="button" class="btnGeneral mx-3">Continuar</button>
          </Link>
        </div>
      </div>
    </>
    
  )
}

export default DatosCarroSoat;
