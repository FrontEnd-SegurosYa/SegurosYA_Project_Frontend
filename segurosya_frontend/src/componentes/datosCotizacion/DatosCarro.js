import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";
// import Select from 'react-select';


import infoAutosJSON from "./infoAutos.json";
import { obtenerMarcas, obtenerModelosXMarca } from './funcionesFetch';

export const DatosCarro = ({informacionClienteSinCuenta,informacionPlaca,rumbo,informacionAutoPasado}) => {
  
  const navigate = useNavigate();
  const { control, handleSubmit,setValue } = useForm();

  const [marca,setMarca] = useState();
  const [listaMarcas,setListaMarcas] = useState([]);
  const [modelo,setModelo] = useState();
  const [listaModelos,setListaModelos] = useState([]);
  const [anhoFabricacion,setAnhoFabricacion] = useState(1999);
  const [numeroAsientos,setNumeroAsiento] = useState(2);
  
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
  );

  const listaAnhosFabricacion = arrayRange(1999, 2023, 1);

  const informacionAuto = {
    marca: marca,
    modelo: modelo,
    anhoFabricacion: anhoFabricacion,
    numeroAsientos: numeroAsientos
  };

  const cambioMarca = (nuevoIdMarca) => {
    
    setMarca( listaMarcas.find(c => c.idMarca === nuevoIdMarca) );
    obtenerModelosXMarca(nuevoIdMarca)
    .then(listModelos => {
      setListaModelos(listModelos);
      setModelo(listModelos[0]);
    }).catch( error => {
      console.error('Error:', error);
    });
  };

  const cambioModelo = (nuevoIdModelo) => {
       
    setModelo( listaModelos.find(c => c.idModelo === nuevoIdModelo) );    
  };

 

  const cambioAnhoFabricacion = (anhoSelec) => {
    setAnhoFabricacion(parseInt(anhoSelec));
        
  };

  const cambioNumeroAsientos = (numAsientosSelec) => {
    setNumeroAsiento(parseInt(numAsientosSelec));
  };

  
  useEffect(() => {
    obtenerMarcas()
    .then(listMarcs => {
        setListaMarcas(listMarcs);        
        if(informacionAutoPasado){
          setAnhoFabricacion(informacionAutoPasado.anhoFabricacion);
          setNumeroAsiento(informacionAutoPasado.numeroAsientos);
          // setValue("anhoFabricacion",informacionAutoPasado.anhoFabricacion);
          // setValue("numeroAsientos",informacionAutoPasado.numeroAsientos);
          setMarca( listMarcs.find(marcaBuscada => marcaBuscada.idMarca === informacionAutoPasado.marca.idMarca) );
          // cambioMarca(informacionAutoPasado.marca.idMarca);
          obtenerModelosXMarca(informacionAutoPasado.marca.idMarca)
          .then(listModelos => {
            setListaModelos(listModelos);
            setModelo(listModelos[0]);
          }).catch( error => {
            console.error('Error:', error);
          });
        }else{
          setMarca( listMarcs.find(c => c.idMarca === listMarcs[0].idMarca) );
          // cambioMarca(listMarcs[0].idMarca);
          obtenerModelosXMarca(listMarcs[0].idMarca)
          .then(listModelos => {
            setListaModelos(listModelos);
            setModelo(listModelos[0]);
          }).catch( error => {
            console.error('Error:', error);
          });
        }        
      }
    ).catch( error => {
        console.error('Error:', error);
      }      
    );
  }, [informacionAutoPasado]);

  // Declaraciones para botones
  const onSubmit = (data) => {      
      const informacionCliente = {informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca,informacionAuto: informacionAuto};
      // console.log(marca);
      // console.log(informacionAuto);

      // navigate("/cotizacion4", {state:informacionCliente});
      if(rumbo === "soat"){
        navigate("/soat4", {state:informacionCliente});
      }
      else {
          // navigate("/cotizacion4", {state:informacionCliente});
          navigate("/cotizacionTemp", {state:informacionCliente});
      }
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
                  {/* <p>
                    {marca && marca.idMarca}
                    
                  </p> */}
                  
                  <select onChange={(e)=>cambioMarca(parseInt(e.target.value))} className='Resultado' value={marca && marca.idMarca}>
                    {listaMarcas && listaMarcas.map((option) => (
                      <option key={option.idMarca} value={option.idMarca}>
                        {option.nombre}
                      </option>
                    ))}
                  </select>
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Modelo</p>
                  {/* <p>
                    
                    {modelo && modelo.idModelo}
                    
                  </p> */}
                  
                  <select onChange={(e)=>cambioModelo(parseInt(e.target.value))} className='Resultado' value={modelo && modelo.idModelo}>
                    {listaModelos && listaModelos.map((option) => (
                      <option key={option.idModelo} value={option.idModelo}>
                        {option.nombre}
                      </option>
                    ))}
                  </select>
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Año de fabricacion</p>
                  <Controller
                    name="anhoFabricacion"
                    control={control}
                    defaultValue={1999}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type="number"
                        value={anhoFabricacion}
                        onChange={(e) => {
                          const inputValue = parseInt(e.target.value);
                          const anioActual = new Date().getFullYear();;
                          if (inputValue > 0 && inputValue <= anioActual) {
                            onChange(inputValue);
                            cambioAnhoFabricacion(e.target.value);
                          }
                        }}
                        className="Resultado"
                      />
                    )}
                  />
                  
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Número de asientos</p>
                  <Controller
                    name="numeroAsientos"
                    control={control}
                    defaultValue={1}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type="number"
                        value={numeroAsientos}
                        onChange={(e) => {
                          const inputValue = parseInt(e.target.value);
                          if (inputValue > 0) {
                            onChange(inputValue);
                            cambioNumeroAsientos(e.target.value);
                          }
                        }}
                        className="Resultado"
                      />
                    )}
                  />
                </div>
              </div>
              

              
            
        </div>
        <div className='imagenSeguro2 containerImagenCarroSeguro ' alt = "imagenSeguro2"></div>
      
      </div>
      <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
          <Link to={rumbo==="cotizacion" ? "/cotizacion2" : "/soat2"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca}}>
            <button type="button" className="btnGeneral2 mx-3">Volver</button>
          </Link>
          {/* <button onClick={handleGoBack} type="button" className="btnGeneral2 mx-3">Volver</button> */}
          <button type="submit" className="btnGeneral mx-3">Continuar</button>
        </div>
      </div>
    </form>    
    </>
  )

}
export default DatosCarro;
  