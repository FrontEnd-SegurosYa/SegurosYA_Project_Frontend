import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";
import Select from 'react-select';


import infoAutosJSON from "./infoAutos.json";
import { obtenerMarcas, obtenerModelosXMarca } from './funcionesFetch';

export const DatosCarro = ({informacionClienteSinCuenta,informacionPlaca,rumbo}) => {
  
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const methods = useForm();

  const marcasAutos = infoAutosJSON.marcas;

  // const [marca,setMarca] = useState(marcasAutos[0].nombre);
  // const [listaMarcas,setListaMarcas] = useState(marcasAutos);
  // const [modelo,setModelo] = useState(marcasAutos[0].modelos[0].nombre);
  // const [listaModelos,setListaModelos] = useState(marcasAutos[0].modelos);
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

  const cambioMarca = (event) => {
    const nuevaMarca = event.target.value;    
    
    setMarca( listaMarcas.find(c => c.idMarca === parseInt(nuevaMarca)) );
    obtenerModelosXMarca(parseInt(nuevaMarca))
    .then(listModelos => {
      setListaModelos(listModelos);
      setModelo(listModelos[0]);
    }).catch( error => {
      console.error('Error:', error);
    });
  };

  const cambioModelo = (event) => {
    const nuevoModelo = event.target.value;        
    setModelo( listaModelos.find(c => c.idModelo === parseInt(nuevoModelo)) );    
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
        setMarca(listMarcs[0]);

        obtenerModelosXMarca(listMarcs[0].idMarca)
        .then(listModelos => {
          setListaModelos(listModelos);
          setModelo(listModelos[0]);
        }).catch( error => {
          console.error('Error:', error);
        });
      }
    ).catch( error => {
        console.error('Error:', error);
      }      
    );
  }, []);

  // Declaraciones para botones
  const onSubmit = (data) => {      
      const informacionCliente = {informacionClienteSinCuenta,informacionPlaca,informacionAuto};
      // console.log(marca);
      // console.log(modelo);

      // navigate("/cotizacion4", {state:informacionCliente});
      if(rumbo === "soat"){
        navigate("/soat4", {state:informacionCliente});
      }
      else {
          navigate("/cotizacion4", {state:informacionCliente});
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
                  
                  <select onChange={cambioMarca} className='Resultado'>
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
                  
                  <select onChange={cambioModelo} className='Resultado'>
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
                        value={value}
                        onChange={(e) => {
                          const inputValue = parseInt(e.target.value);
                          if (inputValue > 0) {
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
                        value={value}
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
      
        {/* <div className='coberturas'>
          <p>Te chocan o te chocan 14.00</p>
          <input type="checkbox" name="colors[]" value="check1" id="check_1" />
          
          <p>Robo total 13.00</p>
          <input type="checkbox" name="colors[]" value="check2" id="check_2" />
          
          <p>Robo parcial 10.00</p>
          <input type="checkbox" name="colors[]" value="check3" id="check_3" />

          <p>Lesiones a personas 8.00</p>
          <input type="checkbox" name="colors[]" value="check4" id="check_4" />

          <p>Daños a otros vehículos y objetos 12.000</p>
          <input type="checkbox" name="colors[]" value="check5" id="check_5" />

          <p>Dañas a tu vehículo 10.00</p>
          <input type="checkbox" name="colors[]" value="check6" id="check_6" />

          <p>Ambulancia 16.00</p>
          <input type="checkbox" name="colors[]" value="check7" id="check_7" />
        </div> */}

      </div>
      <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/"+rumbo+"2"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca}}>
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
  