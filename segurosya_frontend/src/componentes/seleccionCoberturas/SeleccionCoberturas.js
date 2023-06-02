import React from 'react'
import "./SeleccionCoberturas.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";

//Utoles
import { obtenerCoberturas } from './funcionesExtras';


export function SeleccionCoberturas({informacionClienteSinCuenta,informacionPlaca,informacionAuto}){
    
    const navigate = useNavigate();
    const { control, handleSubmit,setValue } = useForm();

    const [listaCoberturas,setListaCoberturas] = useState([]);
    const [coberturasSeleccionadas,setCoberturasSeleccionadas] = useState([1,2]);
    
    useEffect(() => {
        obtenerCoberturas()
        .then(listCoberturas => {
            setListaCoberturas(listCoberturas);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      },[]);

    const onSubmit = (data) => {      
        const informacionCliente = {informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca,informacionAuto: informacionAuto,listaDeIdCoberturas: coberturasSeleccionadas};

        navigate("/cotizacion4", {state:informacionCliente});

    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='containerR'>
                    <div className="containerFormularioCarroSeguro">
                        <h4 className = "TituloSeguro2"><b>Ingresa los datos de tu auto para cotizar</b></h4>
                                        
                        <div className='Form'>
                            <div className='Opciones'>
                                <p className='SubsubTitulo'>Coberturas</p>
                                
                                <ul>
                                    {listaCoberturas && listaCoberturas.map((option) => (
                                        <li>
                                            <ul>
                                                <li>{option.nombre}</li>
                                                <li>{option.idCobertura}</li>
                                                <li>{option.descripcion}</li>
                                                <br></br>
                                            </ul>                                            
                                        </li>                                       

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='imagenSeguro2 containerImagenCarroSeguro ' alt = "imagenSeguro2"></div>
                </div>
                    

                <div className = "botones text-center">
                    <div className="btn-group" role="group" aria-label="Botones con separación">
                        <Link to={"/cotizacion3"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca,informacionAuto: informacionAuto}}>
                            <button type="button" className="btnGeneral2 mx-3">Volver</button>
                        </Link>
                        {/* <button onClick={handleGoBack} type="button" className="btnGeneral2 mx-3">Volver</button> */}
                        <button type="submit" className="btnGeneral mx-3">Continuar</button>
                    </div>
                </div>
               
            </form>
        </>
    );
}
export default SeleccionCoberturas;