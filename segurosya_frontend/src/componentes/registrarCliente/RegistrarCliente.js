import React, { Fragment } from 'react'
import "./RegistrarCliente.css";
import '../../index.css'
import hombre from '../registrarCliente/HombresManos.png'
import { Link } from 'react-router-dom';


import { useForm, Controller} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import ubicacionesJSON from "./ubicaciones.json";

import { obtenerDepartamentos } from './funcionesExtras';

export const RegistrarCliente = () => {
    const navigate = useNavigate();

    const { control, register,handleSubmit,formState: { errors } } = useForm();
    
    // const [departamento,setDepartamento] = useState(ubicacionesJSON[0].nombre);
    // const [listaDepartamentos,setListaDepartamentos] = useState(ubicacionesJSON);
    // const [provincia,setProvincia] = useState(ubicacionesJSON[0].provincias[0].nombre);
    // const [listaProvincias, setListaProvincias] = useState(ubicacionesJSON[0].provincias);
    // const [distrito,setDistrito] = useState(ubicacionesJSON[0].provincias[0].distritos[0]);
    // const [listaDistritos, setListaDistritos] = useState(ubicacionesJSON[0].provincias[0].distritos);
    const [departamento,setDepartamento] = useState();
    const [listaDepartamentos,setListaDepartamentos] = useState([]);
    const [provincia,setProvincia] = useState();
    const [listaProvincias, setListaProvincias] = useState([]);
    const [distrito,setDistrito] = useState();
    const [listaDistritos, setListaDistritos] = useState([]);

    const ubicacion = {
        departamento: departamento,
        provincia: provincia,
        distrito: distrito
    };

    const cambioDepartamento = (idDepartamento) => {
        // const depObtenido = ubicacionesJSON.find( (departamento)  => departamento.nombre === depSelec);
        const nuevoIdDepartamento = parseInt(idDepartamento);            
        setDepartamento(listaDepartamentos.find( (departamento)  => departamento.idDepartamento === nuevoIdDepartamento));
        console.log("id a cambiar: "+idDepartamento);
        // setProvincia(depObtenido.provincias[0].nombre);
        // setListaProvincias( depObtenido.provincias );
        // setDistrito(depObtenido.provincias[0].distritos[0]);
        // setListaDistritos( depObtenido.provincias[0].distritos);
    };

    const cambioProvincia = (provSelec) => {
        // const provObtenida = listaProvincias.find( (provincia)  => provincia.nombre === provSelec);
        // setProvincia(provObtenida.nombre);
        // setListaDistritos( provObtenida.distritos );
        // setDistrito(provObtenida.distritos[0]);
    };

    const cambioDistrito = (distSelec) => {
        // setDistrito(distSelec);
    };

    useEffect(() => {
        // setListaDepartamentos( ubicacionesJSON );
        obtenerDepartamentos()
        .then( listaDeps => {
                setListaDepartamentos(listaDeps);
                setDepartamento(listaDeps[0]);                
                         
                // buscarProvinciasDep(listaDeps[0].nombre)
                // .then( listaProvs => {
                //         // console.log(listaProvs);
                //         setListaProvincias(listaProvs);
                //         setProvincia(listaProvs[0]);

                        //Temporal
                        // obtenerDistritos()
                        // .then( listaDists => {
                        //         setListaDistritos(listaDists);
                        //         setDistrito(listaDists[0]);
                        //     }
                        // ).catch();
                }).catch( error => {
                    console.error('Error:', error);
                })            
        .catch( error => {
                console.error('Error:', error);
            }
        ); 
    }, []);

    const onSubmit = (data) => {
        // console.log(data);
        const informacionNuevaCuenta = {
            nombre: data.nombre,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno,
            DNI: data.DNI,
            correoElectronico: data.email,
            telefonoCelular: data.telefonoCelular,
            ubicacion: ubicacion
            // ubicacion: ubicacion
        };
        console.log(informacionNuevaCuenta);
        // alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);
        // navigate("/cotizacion1", {state: informacionClienteSinCuenta});
        
    }
    return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='RegistrarCliente' onSubmit={handleSubmit(onSubmit)} >
        <div className='DatosCliente'>
            <p className='Titulo'>¡Únase a nuestra comunidad!</p>
            <p className='Subtitulo'>Ingresa los siguientes datos:</p>
            <div className='IngresaDato'>
                <p className='Negrita'>Nombres</p>
                <input type='text' className='InputTexto' {...register('nombre',{
                    required: true,             
                    pattern: /^([A-Za-z]+)( [A-Za-z]+)?( [A-Za-z]+)?$/,
                })}/>
                {errors.nombreCompleto && <p className="error-message">Debe ingresar sus nombres.</p>}
            </div>

            <div className='IngresaDato'>
                <p className='Negrita'>ApellidoPaterno</p>
                <input type='text' className='InputTexto' {...register('apellidoPaterno',{
                    required: true,             
                    pattern: /^(?!.*(ll|ch))[A-Za-z][A-Za-z]+(?: de [A-Za-z][A-Za-z]+)?(?: [A-Za-z][A-Za-z]+)?$/,
                })}/>
                {errors.apellidoPaterno && <p className="error-message">Debe ingresar un apellido paterno válido.</p>}
            </div>

            <div className='IngresaDato'>
                <p className='Negrita'>Apellido Paterno</p>
                <input type='text' className='InputTexto' {...register('apellidoMaterno',{
                    required: true,             
                    pattern: /^(?!.*(ll|ch))[A-Za-z][A-Za-z]+(?: [A-Za-z][A-Za-z]+)?$/,
                })}/>
                {errors.apellidoMaterno && <p className="error-message">Debe ingresar un apellido materno válido.</p>}
            </div>

            <div className='IngresaDato'>
                <p className='Negrita'>DNI</p>
                <input type='text' className='InputTexto' {...register('DNI',{
                    required: true,
                    pattern: /^[0-9]*$/,
                    minLength: 8,
                    maxLength: 8,
                })}/>
                {errors.DNI && (<p className="error-message">DNI debe ser de 8 números</p>)}
            </div>
            <div className='IngresaDato'>
                <p className='Negrita'>Correo electrónico</p>
                <input type='email' 
                    {...register('email',{
                        required: true,
                        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                        })
                    }
                    className='InputTexto'/>
                {errors.email && (<p className="error-message">Ingrese un correo electrónico válido.</p>)}
            </div>
            <div className='IngresaDato'>
                <p className='Negrita'>Teléfono Celular</p>
                <input type='text' {...register('telefonoCelular',{
                    required: true,
                    pattern: /^(?:\d{9}|\d{7})$/
                })}
                className='InputTexto' />
                {errors.telefonoCelular && (<p className="error-message">Ingrese un numero celular valido.</p>)}
            </div>

            

            <div className='IngresaDato'>
                <p className='Negrita'>Contraseña:</p>
                <input type='password' 
                    {...register('contrasenha',{
                        required: true,
                        pattern: /^(?:[A-Za-z0-9]{1,20}\n){15}$/
                        })
                    }
                    className='InputTexto'/>
                {errors.password && (<p className="error-message">Ingrese una contraseña de maximo 15 caracteres y solo numeros y letras (sin ñ).</p>)}
            </div>

            <p>Al continuar acepto la 
                <a  className="Celeste"
                    href="https://drive.google.com/file/d/11ufJI949A8UPw0QWubV3aH3wCxfjjpb_/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >

                    Política de privacidad</a>
            </p>

            <div className='Trio'>
                <div className='IngresaDatoTrio'>
                    <p className='Negrita'>Departamento</p>
                    <select onChange={(e) => cambioDepartamento(parseInt(e.target.value))} className='Resultado' value={departamento && departamento.idDepartamento}>
                            {listaDepartamentos && listaDepartamentos.map((option) => (
                            <option key={option.idDepartamento} value={option.idDepartamento}>
                                {option.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                {/* <div className='IngresaDatoTrio Medio'>
                    <p className='Negrita'>Provincia</p>
                    <select className='Opciones'>
                        <option>Barranca</option>
                        <option>Cajatambo</option>
                        <option>Canta</option>
                    </select>
                </div>
                <div className='IngresaDatoTrio'>
                    <p className='Negrita'>Distrito</p>
                    <select className='Opciones'>
                        <option>Ancón</option>
                        <option>Ate Vitarte</option>
                        <option>Barranco</option>
                    </select> */}
                </div>
            </div>
        </div>

        {/* <div className='Imagen'>
            <img className='VentaCarro' src={hombre}/>
        </div>
         */}
        <div className = "botones text-center">
            <div className="btn-group" role="group" aria-label="Botones con separación">
            <Link to={"/iniciarSesion"}>
                <button type="button" className="btnGeneral2 mx-3">Volver</button>
            </Link>
            {/* <Link to={"/"}> */}
                <button type="submit" className="btnGeneral mx-3">Continuar</button>
            {/* </Link> */}
            </div>
        </div>
    </form>
    </>
  )
}

export default RegistrarCliente;