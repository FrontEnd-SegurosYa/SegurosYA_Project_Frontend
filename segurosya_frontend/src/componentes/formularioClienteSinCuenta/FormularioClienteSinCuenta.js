import './FormularioClienteSinCuenta.css';
import { Link } from 'react-router-dom';
import {BarraProgreso} from "../barraProgreso/BarraProgreso.js"
import { obtenerDepartamentos, buscarProvinciasDep ,obtenerDistritos, consultarDNI, buscarDistritosProv,consultarClienteEspecial} from './solicitarINformacion';

// import imagenConductor from '../img/imagenFormularioSinCuenta.png';

import { useForm, Controller} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import ubicacionesJSON from "./ubicaciones.json";

//Contenedor principal
export function FormularioClienteSinCuenta ({informacionPlaca,rumbo,informacionClienteSinCuenta}) {

    return (
        <>
            <ContenedorPrincipal informacionPlaca = {informacionPlaca} rumbo={rumbo} informacionClienteSinCuenta={informacionClienteSinCuenta} />
        </>
        
    );
}

function ContenedorPrincipal ( {informacionPlaca,rumbo,informacionClienteSinCuenta} ) {

    const navigate = useNavigate();

    const { control, register,handleSubmit,formState: { errors } ,setValue} = useForm();
    
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
                if(informacionClienteSinCuenta !== undefined){
                    
                    setDepartamento(informacionClienteSinCuenta.ubicacion.departamento);

                    buscarProvinciasDep(informacionClienteSinCuenta.ubicacion.departamento.idDepartamento)
                    .then(listaProvs => {
                        setListaProvincias(listaProvs);
                        setProvincia(informacionClienteSinCuenta.ubicacion.provincia);

                        buscarDistritosProv(informacionClienteSinCuenta.ubicacion.provincia.idProvincia)
                        .then(listaDists => {
                            setDistrito(informacionClienteSinCuenta.ubicacion.distrito);
                            setListaDistritos(listaDists);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    })
                    .catch( error => {
                        console.error('Error:', error);
                    });

                }else{
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
                            
                            //Temporal
                            
                    }).catch( error => {
                        console.error('Error:', error);
                    });  
                }          

                

            }).catch( error => {
                console.error('Error:', error);
            }); 
        
        //Llenado de datos causados por volver
        if(informacionClienteSinCuenta){
            setValue("nombre",informacionClienteSinCuenta.nombre);
            setValue("apellidoPaterno",informacionClienteSinCuenta.apellidoPaterno);
            setValue("apellidoMaterno",informacionClienteSinCuenta.apellidoMaterno);
            setValue("DNI",informacionClienteSinCuenta.DNI);
            setValue("email",informacionClienteSinCuenta.correoElectronico);
            setValue("telefonoCelular",informacionClienteSinCuenta.telefonoCelular);
        };        
        
    }, [] );

    const onSubmit = (data) => {

        consultarClienteEspecial(data.DNI)
        .then(resultado => {
            console.log(resultado);
            if(resultado.numDoc === "-1"){
                consultarDNI(data.DNI)
                .then(resultado => {
                    if(resultado.idCliente == 0){
                        const informacionClienteSinCuenta = {
                            nombre: data.nombre,
                            apellidoPaterno: data.apellidoPaterno,
                            apellidoMaterno: data.apellidoMaterno,
                            DNI: data.DNI,
                            correoElectronico: data.email,
                            telefonoCelular: data.telefonoCelular,
                            ubicacion: ubicacion
                        };
                        // const informacionPlaca = informacionPlaca;
                        const infoState = {informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca};
                        // console.log(informacionClienteSinCuenta);
                        // console.log(rumbo);
                        if(rumbo === "soat"){
                            navigate("/soat3", {state: infoState});
                        }
                        else {
                            navigate("/cotizacion3", {state: infoState});
                        }
                    }else{
                        alert("El DNI ingresado ya pertenece a un cliente.");
                    }
                    
                })
                .catch(error => {
                    console.error(error);
                    return;
                });
            }else{
                alert("Usted pertenece a nuestra lista de clientes especiales. Comuniquese con nosotros.")
                return;
            }
        })
        .catch(error => {
            console.error(error);
            return;
        });

        

        
    }
   
    return (
        <form className='ContenedorPrincipal' onSubmit={handleSubmit(onSubmit)}>
            <div className='ContenedorImagenFormulario'>
                {/* <Formulario/> */}
                <div className='ContenedorFormulario' >
                <div className='Texto1'>
                    ¡Protege tu auto, protege tu inversión!
                </div>
                <div className='Texto2'>
                    Ingresa los siguientes datos:
                </div>
                <div >
                    <div className='ContenedorCampoFormulario'>
                        Nombres: <br/>                        
                        <input type='text' className='InputTexto' {...register('nombre',{
                            required: true,             
                            pattern: /^([A-Za-z]+)( [A-Za-z]+)?( [A-Za-z]+)?$/,
                        })}/>
                        {errors.nombre && <p className="error-message">Debe ingresar un nombre</p>}
                    </div>                   
                </div>

                <div >
                    <div className='ContenedorCampoFormulario'>
                        Apellido Paterno: <br/>                        
                        <input type='text' className='InputTexto' {...register('apellidoPaterno',{
                            required: true,             
                            pattern: /^(?!.*(ll|ch))[A-Za-z][A-Za-z]+(?: de [A-Za-z][A-Za-z]+)?(?: [A-Za-z][A-Za-z]+)?$/,
                        })}/>
                        {errors.apellidoPaterno && <p className="error-message">Debe ingresar un apellido paterno válido.</p>}
                    </div>                   
                </div>

                <div >
                    <div className='ContenedorCampoFormulario'>
                        Apellido Materno: <br/>                        
                        <input type='text' className='InputTexto' {...register('apellidoMaterno',{
                            required: true,             
                            pattern: /^(?!.*(ll|ch))[A-Za-z][A-Za-z]+(?: [A-Za-z][A-Za-z]+)?$/,
                        })}/>
                        {errors.apellidoMaterno && <p className="error-message">Debe ingresar un nombre y un apellido</p>}
                    </div>                   
                </div>

                <div>
                    <div className='ContenedorCampoFormulario'>
                        DNI: <br/>                        
                        <input type='text' className='InputTexto' {...register('DNI',{
                            required: true,
                            pattern: /^[0-9]*$/,
                            minLength: 8,
                            maxLength: 8,
                        })}/>
                        {errors.DNI && (<p className="error-message">DNI debe ser de 8 números</p>)}
                    </div>
                    
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Correo electrónico: <br/>                        
                        <input type='email' 
                            {...register('email',{
                                required: true,
                                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                                })
                            }
                            className='InputTexto'/>
                        {errors.email && (<p className="error-message">Ingrese un correo electrónico válido.</p>)}
                    </div>
                    
                </div>  
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Número celular: <br/>                        
                        <input type='text' {...register('telefonoCelular',{
                            required: true,
                            pattern: /^9\d{8}$/
                        })}
                        className='InputTexto'
                        />
                        {errors.telefonoCelular && (<p className="error-message">Ingrese un numero celular valido.</p>)}
                    </div>
                </div>
                <div>
                    <div className='ContenedorCampoFormularioUbicacion'>
                        <div className='ContenedorCampoUbicacion'>
                            <div><p>Departamento:</p></div>
                            <div>
                                <select onChange={(e) => cambioDepartamento(parseInt(e.target.value))} className='Resultado' value={departamento && departamento.idDepartamento}>
                                        {listaDepartamentos && listaDepartamentos.map((option) => (
                                        <option key={option.idDepartamento} value={option.idDepartamento}>
                                            {option.nombre}
                                        </option>
                                    ))}
                                </select>
                                
                            </div>                            
                            {/* {departamento && departamento.idDepartamento} */}
                        </div>

                        <div className='ContenedorCampoUbicacion'>
                            <div><p>Provincia:</p></div>
                            <div>
                                <select onChange={(e) => cambioProvincia(parseInt(e.target.value))} className='Resultado' value={provincia && provincia.idProvincia}>
                                        {listaProvincias && listaProvincias.map((option) => (
                                        <option key={option.idProvincia} value={option.idProvincia}>
                                            {option.nombre}
                                        </option>
                                    ))}
                                </select>
                                
                            </div>                            
                            {/* {provincia && provincia.idProvincia} */}
                        </div>

                        <div className='ContenedorCampoUbicacion'>
                            <div><p>Distrito:</p></div>
                            <div>
                                <select onChange={(e) => cambioDistrito(parseInt(e.target.value))} className='Resultado' value={distrito && distrito.idDistrito}>
                                        {listaDistritos && listaDistritos.map((option) => (
                                        <option key={option.idDistrito} value={option.idDistrito}>
                                            {option.nombre}
                                        </option>
                                    ))}
                                </select>
                                
                            </div>                            
                            {/* {distrito && distrito.idDistrito} */}
                        </div>

                        
                    </div>
                </div>
                <div className='ContenedorLink'>
                    <p className='Link1'>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://drive.google.com/file/d/11ufJI949A8UPw0QWubV3aH3wCxfjjpb_/view?usp=sharing"  target="_blank" rel="noreferrer">Política de Privacidad</a>
                    </p>    
                    {/* <input type="submit" value="enviar"/> */}
                </div>

        </div>
                <div className='ImagenConductor'/>
            </div>
            <div className ="botones text-center">
                <div className="btn-group" role="group" aria-label="Botones con separación">
                 
                    <Link to={rumbo==="soat" ? "/soat1" : "/cotizacion1"} state={informacionPlaca}> 
                        <button type="button" className="btnGeneral2 mx-3">Volver</button>
                    </Link>   

                    <button type="submit" className='btnGeneral mx-3'>Continuar</button> 
                                   
                </div>
            </div>
                
            
        </form>
    );
}

function ContenedorImagenFormulario () {
    // window.history.back;
    return(
        <div className='ContenedorImagenFormulario'>
            {/* <Formulario/> */}
            
            <div className='ImagenConductor'/>
        </div>
    );
}


