import React, { Fragment } from 'react'
import "./RegistrarCliente.css";
import '../../index.css'
import hombre from '../registrarCliente/HombresManos.png'
import { Link } from 'react-router-dom';


import { useForm, Controller} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import ubicacionesJSON from "./ubicaciones.json";

import { obtenerDepartamentos, buscarProvinciasDep ,obtenerDistritos, consultarDNI, buscarDistritosProv, crearCliente, crearContacto, crearCuenta, iniciarSesion } from './funcionesExtras';

export const RegistrarCliente = () => {
    const navigate = useNavigate();

    const { control, register,handleSubmit,formState: { errors },setValue } = useForm();
    
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
        // const nuevoIdDepartamento = parseInt(idDepartamento);
        var nuevoDepartamento = listaDepartamentos.find( (departamento)  => departamento.idDepartamento === idDepartamento);            
        setDepartamento(nuevoDepartamento);
        buscarProvinciasDep(nuevoDepartamento.idDepartamento)
        .then(nuListaProv => {
            setListaProvincias(nuListaProv);
            setProvincia(nuListaProv[0]);

            buscarDistritosProv(nuListaProv[0].idProvincia)
            .then(nuListDists => {
                setListaDistritos(nuListDists);
                setDistrito(nuListDists[0]);
            })
        .catch(error => {
            console.error('Error:', error);
        });
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log("id a cambiar: "+idDepartamento);
    };

    const cambioProvincia = (idProvincia) => {
        // const nuevoIdProvincia = parseInt(idProvincia);
        var nuevaProvincia = listaProvincias.find( (provincia)  => provincia.idProvincia === idProvincia);
        setProvincia(nuevaProvincia);

        buscarDistritosProv(nuevaProvincia.idProvincia)
        .then(nuListDists => {
            console.log(nuListDists);
            setListaDistritos(nuListDists);
            setDistrito(nuListDists[0]);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        // console.log("id a cambiar: "+idDepartamento);
    };

    const cambioDistrito = (idDistrito) => {
        var distObtenido = listaDistritos.find( (distrito)  => distrito.idDistrito === idDistrito);
        setDistrito(distObtenido);
    };

    useEffect( () => {

        // fetch data
        obtenerDepartamentos()
        .then( listaDeps => {                
            setListaDepartamentos(listaDeps);            
            setDepartamento(listaDeps[0]);            
            buscarProvinciasDep(listaDeps[0].idDepartamento)
            .then( listaProvs => {
                // console.log(listaProvs);
                setListaProvincias(listaProvs);
                setProvincia(listaProvs[0]);

                buscarDistritosProv(listaProvs[0].idProvincia)
                .then(listaDists => {
                    setDistrito(listaDists[0]);
                    setListaDistritos(listaDists);
                    
                })
                .catch( error => {
                    console.error('Error:', error);
                });                    
            }).catch( error => {
                console.error('Error:', error);
            });                   
        }).catch( error => {
            console.error('Error:', error);
        }); 
    }, [] );

    const onSubmit = (data) => {
        consultarDNI(data.DNI)
        .then(resultado => {
            if(resultado.idCliente === 0){
                const infoNuevoCliente = {
                    nombre: data.nombre,
                    apellidoPaterno: data.apellidoPaterno,
                    apellidoMaterno: data.apellidoMaterno,
                    DNI: data.DNI,
                    correoElectronico: data.email,
                    contrasenha: data.contrasenha,
                    telefono: data.telefonoCelular,
                    ubicacion: ubicacion.departamento.nombre+", "+ubicacion.provincia.nombre+", "+ubicacion.distrito.nombre
                };
                
                const infoState = {infoNuevoCliente: infoNuevoCliente};
                
                crearCliente(infoNuevoCliente.nombre,infoNuevoCliente.apellidoPaterno,infoNuevoCliente.apellidoMaterno,infoNuevoCliente.DNI)
                .then( nuIdCliente => {
                    console.log(nuIdCliente);
                    // return;
                    if(nuIdCliente !== 0){
                        console.log("nuevo cliente: "+nuIdCliente);
                        //Exito
                        crearContacto(parseInt(nuIdCliente,10),infoNuevoCliente.telefono,infoNuevoCliente.ubicacion)
                        .then(nuevoIdContacto => {
                            console.log("nuevo contacto: "+nuevoIdContacto);
                            if(nuevoIdContacto !== 0){
                                //Exito
                                crearCuenta(parseInt(nuIdCliente,10),infoNuevoCliente.correoElectronico,infoNuevoCliente.contrasenha)
                                .then(nuIdCuenta => {
                                    console.log("nueva cuenta: "+nuIdCuenta);
                                    if(nuIdCuenta !== 0){
                                        //Redireccion a pagina de inicio con cuenta

                                        //Verificacion Final
                                        iniciarSesion(infoNuevoCliente.correoElectronico,infoNuevoCliente.contrasenha)
                                        .then( resultado => {
                                            if(resultado.response_msg === "Login Success"){
                                                alert("Inicio de sesion correcto.");
                                                navigate("/",{state: resultado});  
                                            }else{
                                                alert("Error de inicio de sesion.");
                                                return;
                                            }
                                        })
                                        .catch(error => {
                                            console.error(error);
                                            return;
                                        });

                                    }else{
                                        alert("Error en creacion de cuenta.");
                                        return;
                                    }
                                })
                                .catch(error => {
                                    console.error(error);
                                    return;
                                });

                            }else{
                                alert("Error en creacion de contacto.");
                                return;
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            return;
                        });

                    }else{
                        alert("Error en creacion de cliente.");
                        return;
                    }
                } )
                .catch(error => {
                    console.error(error);
                    return;
                });
                
            }else{
                alert("El DNI ingresado ya pertenece a un cliente.");
                return;
            }
        
        });
    };
    
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
                        required: true
                        })
                    }
                    className='InputTexto'/>
                {errors.password && (<p className="error-message">Ingrese una contraseña de maximo 15 caracteres y solo numeros y letras (sin ñ).</p>)}
            </div>

            <p>Al continuar acepto la <a  className="Celeste"
                    href="https://drive.google.com/file/d/11ufJI949A8UPw0QWubV3aH3wCxfjjpb_/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                > Política de privacidad</a>
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

                <div className='IngresaDatoTrio'>
                    <p className='Negrita'>Provincia</p>
                    <select onChange={(e) => cambioProvincia(parseInt(e.target.value))} className='Resultado' value={provincia && provincia.idProvincia}>
                            {listaProvincias && listaProvincias.map((option) => (
                            <option key={option.idProvincia} value={option.idProvincia}>
                                {option.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='IngresaDatoTrio'>
                    <p className='Negrita'>Distrito</p>
                    <select onChange={(e) => cambioDistrito(parseInt(e.target.value))} className='Resultado' value={distrito && distrito.idDistrito}>
                            {listaDistritos && listaDistritos.map((option) => (
                            <option key={option.idDistrito} value={option.idDistrito}>
                                {option.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                
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