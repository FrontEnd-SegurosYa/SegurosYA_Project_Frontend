import './FormularioClienteSinCuenta.css';
import { Link } from 'react-router-dom';
import {BarraProgreso} from "../barraProgreso/BarraProgreso.js"
import { obtenerDepartamentos, buscarProvinciasDep ,obtenerDistritos} from './solicitarInformacion';

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
        const nuevoIdDepartamento = parseInt(idDepartamento);            
        setDepartamento(listaDepartamentos.find( (departamento)  => departamento.idDepartamento === nuevoIdDepartamento));
        console.log("id a cambiar: "+idDepartamento);
    };

    const cambioProvincia = (provSelec) => {
        const provObtenida = listaProvincias.find( (provincia)  => provincia.nombre === provSelec);
        setProvincia(provObtenida.nombre);
        setListaDistritos( provObtenida.distritos );
        setDistrito(provObtenida.distritos[0]);
    };

    const cambioDistrito = (distSelec) => {
        setDistrito(distSelec);
    };

    useEffect(() => {

        // fetch data
        obtenerDepartamentos()
        .then( listaDeps => {
                setListaDepartamentos(listaDeps);
                if(informacionClienteSinCuenta){
                    const idDepAnterior = informacionClienteSinCuenta.ubicacion.departamento.idDepartamento;
                    setDepartamento(listaDeps.find( (departamento)  => departamento.idDepartamento === idDepAnterior));
                    // cambioDepartamento(informacionClienteSinCuenta.ubicacion.departamento.idDepartamento);
                }else{
                    setDepartamento(listaDeps[0]);
                }          

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
        
        //Llenado de datos causados por volver
        if(informacionClienteSinCuenta){
            setValue("nombre",informacionClienteSinCuenta.nombre);
            setValue("apellidoPaterno",informacionClienteSinCuenta.apellidoPaterno);
            setValue("apellidoMaterno",informacionClienteSinCuenta.apellidoMaterno);
            setValue("DNI",informacionClienteSinCuenta.DNI);
            setValue("email",informacionClienteSinCuenta.correoElectronico);
            setValue("telefonoCelular",informacionClienteSinCuenta.telefonoCelular);
        };        
        
    }, []);

    const onSubmit = (data) => {
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


                        {/* <div className='ContenedorCampoUbicacion'>
                            <div><p>Provincia:</p></div>
                            <div>
                                <Controller
                                    name="provincia"
                                    control={control}
                                    render={({ field: { onChange } }) => (
                                        <select onChange={(e) => {
                                            onChange(e.target);
                                            console.log(e.target);
                                            // cambioProvincia(e.target.value);
                                        }}
                                        className='InputUbicacion'
                                        >
                                        {listaProvincias && listaProvincias.map((option) => (
                                            <option key={option.idProvincia} value={option.nombre}>
                                                {option.nombre}
                                            </option>
                                        ))}
                                        </select>     
                                    )}
                                />
                            </div>
                            
                        </div> */}


                        {/* <div className='ContenedorCampoUbicacion'>
                            <div><p>Distrito:</p></div>
                            <div className='ContenedorSelectUbicacion'>
                                <Controller
                                name="distrito"
                                control={control}
                                render={({ field: { onChange } }) => (
                                    <select 
                                        onChange={(e) => { 
                                            onChange(e.target); 
                                            // cambioDistrito(e.target.value);
                                        }}
                                    className='InputUbicacion'
                                    >
                                    {listaDistritos && listaDistritos.map((distrito) => (
                                        <option key={distrito.idDistrito} value={distrito.nombre}>
                                            {distrito.nombre}
                                        </option>
                                    ))}
                                    </select>
                                )}  
                                />
                            </div>                            
                        </div> */}
                        
                        
                        
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
                 
                    <Link to={rumbo==="soat" ? "/soat1" : "/cotizacion2"} state={informacionPlaca}> 
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


