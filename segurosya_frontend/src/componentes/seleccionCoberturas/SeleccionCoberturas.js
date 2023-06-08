import React, { useState, useEffect } from 'react'
import "./SeleccionCoberturas.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';

//Utiles
import { obtenerCoberturas } from './funcionesExtras';


export function SeleccionCoberturas({informacionClienteSinCuenta,informacionPlaca,informacionAuto}){
    
    const navigate = useNavigate();
    const { control, handleSubmit,setValue } = useForm();

    const [listaCoberturas,setListaCoberturas] = useState([]);
    const [coberturasSeleccionadas, setCoberturasSeleccionadas] = useState([]);
    //const [checkbox, setCheckbox] = useState(true);
    // const [checkbox, setCheckbox] = useState(new Array(listaCoberturas.length).fill(false))
    const [checkbox, setCheckbox] = React.useState([]);

    useEffect(() => {
        obtenerCoberturas()
        .then(listCoberturas => {
            setListaCoberturas(listCoberturas);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      },[]);

    // const handleCheckbox = (index) => {
    //     const updatedCheckedState = checkbox.map((item, indice) =>
    //         indice === index ? !item : item
    //     );
    //     setCheckbox(updatedCheckedState);
    //     console.log(listaCoberturas);
    //     console.log("Este es el update", updatedCheckedState);
    //     console.log("Presionaste un checkbox", checkbox);
    //     console.log("Este es el index", index);
    // }

    const _handleCheckbox = (id) => (event) => {
        // console.log('event --> ', event)
        const { value, checked } = event.target


        if (checked) {
            setCheckbox([...checkbox, value]);
            // setCheckbox(checkbox.filter((val) => val !== value));
            console.log('checkbox if -->', checkbox)
        } else {
            setCheckbox(checkbox.filter((val) => val !== value));
            // setCheckbox([ ...checkbox, value ]);
            console.log('checkbox else -->', checkbox)
        }
    }

    const onSubmit = (data) => {
        const informacionCliente = {informacionClienteSinCuenta: informacionClienteSinCuenta, 
                                    informacionPlaca: informacionPlaca,
                                    informacionAuto: informacionAuto,
                                    listaDeIdCoberturas: checkbox
                                    };
        // console.log("Esta es la informacion", informacionCliente);

        navigate("/cotizacion4", {state:informacionCliente});

    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='containerR'>
                    <div className='infoPersonaCoche'>
                    <div>
                    <br/>
                        <p className='mx-3'><b>Sobre ti:</b></p>
                        <ul className='mx-3'>
                            <li>{informacionClienteSinCuenta.nombre}</li>
                            <li>{informacionClienteSinCuenta.correoElectronico}</li>
                            <li>{informacionClienteSinCuenta.telefonoCelular}</li>
                        </ul>
                    </div>
                    <div className="border-top my-3 borde"></div>
                    <div>
                        <p className='mx-3'><b>Sobre el vehiculo:</b></p>
                        <ul className='mx-3'>
                            <li><b>Marca, modelo y año</b></li>
                                {/* <p> - Fiat 500 2015</p> */}
                                <p> - {informacionAuto.marca.nombre} {informacionAuto.modelo.nombre} {informacionAuto.anhoFabricacion}</p>
                            <li><b>Número de asientos</b></li>
                                <p> - {informacionAuto.numeroAsientos}</p>
                            {/* <li><b>Uso</b></li>
                                <p> - Particular</p> */}
                        </ul>
                        <p className='mx-3'><b>Seguro Base: S/. 40.00</b></p>
                    </div>
                </div>
                    
                    <div className="containerFormularioCarroSeguro">
                        <h4 className = "TituloSeguro2"><b>Ingresa los datos de tu auto para cotizar</b></h4>
                                        
                        <div className='Form'>
                            <div className='Opciones'>
                                <p><div className= 'subtitulosEspaciadoHorizontal'><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coberturas Adicionales</div> <div>Costo (S/.)</div><div></div></div></p>
                                <div className="border-top my-3 borde"></div>
                                    {listaCoberturas && listaCoberturas.map((option) => (
                                        <>
                                        <ul className='listaCob'>
                                            <li><div className='cobertura'><div className='nombreCobertura'>{option.nombre}</div><div>14.00</div><div><input checked={checkbox.includes(option.nombre)} onChange={_handleCheckbox(option.idCobertura)} type="checkbox" id={option.idCobertura} value={option.nombre}/></div></div></li>
                                        </ul>
                                        <div className="border-top my-3 borde"></div>
                                        </>
                                    ))}
                            </div>
                        </div>
                    </div>
                    
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