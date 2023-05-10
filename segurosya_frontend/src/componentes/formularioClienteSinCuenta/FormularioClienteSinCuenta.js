import './FormularioClienteSinCuenta.css';
import { Link } from 'react-router-dom';

// import imagenConductor from '../img/imagenFormularioSinCuenta.png';

import { useForm, Controller} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import ubicacionesJSON from "./ubicaciones.json";

//Contenedor principal
export function FormularioClienteSinCuenta () {

    return (
        <>
            <ContenedorPrincipal />
        </>
        
    );
}

function ContenedorPrincipal ( ) {

    const navigate = useNavigate();

    const { control, register,handleSubmit } = useForm();
    
    const [departamento,setdepartamento] = useState(ubicacionesJSON[0].nombre);
    const [listaDepartamentos,setListaDepartamentos] = useState(ubicacionesJSON);
    const [provincia,setProvincia] = useState(ubicacionesJSON[0].provincias[0].nombre);
    const [listaProvincias, setListaProvincias] = useState(ubicacionesJSON[0].provincias);
    const [distrito,setDistrito] = useState(ubicacionesJSON[0].provincias[0].distritos[0]);
    const [listaDistritos, setListaDistritos] = useState(ubicacionesJSON[0].provincias[0].distritos);

    const ubicacion = {
        departamento: departamento,
        provincia: provincia,
        distrito: distrito
    };

    const cambioDepartamento = (depSelec) => {
        const depObtenido = ubicacionesJSON.find( (departamento)  => departamento.nombre === depSelec);
        setdepartamento(depObtenido.nombre);
        setProvincia(depObtenido.provincias[0].nombre);
        setListaProvincias( depObtenido.provincias );
        setDistrito(depObtenido.provincias[0].distritos[0]);
        setListaDistritos( depObtenido.provincias[0].distritos);
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
        setListaDepartamentos( ubicacionesJSON );
    }, []);

    const onSubmit = (data) => {
        const informacionClienteSinCuenta = {
            nombreCompleto: data.nombreCompleto,
            DNI: data.DNI,
            correoElectronico: data.correoElectronico,
            telefonoCelular: data.telefonoCelular,
            ubicacion: ubicacion
        };
        console.log(informacionClienteSinCuenta);
        alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);
        navigate("/cotizacion1");
        
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
                        Nombre Completo: <br/>                        
                        <input type='text' {...register('nombreCompleto',{
                            required: true,
                        })}/>
                    </div>
                    
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        DNI: <br/>                        
                        <input type='text' {...register('DNI',{
                            required: true,
                        })}/>
                    </div>
                    
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Correo electrónico: <br/>                        
                        <input type='email' {...register('correoElectonico',{
                            required: true,
                        })}/>
                    </div>
                </div>  
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Teléfono celular: <br/>                        
                        <input type='text' {...register('telefonoCelular',{
                            required: true,
                        })}/>
                    </div>
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Direccion: <br/>
                        Departamento:
                        <Controller
                            name="departamento"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <select onChange={(e) => {
                                    onChange(e.target.value);
                                    cambioDepartamento(e.target.value);
                                }}>
                                {listaDepartamentos.map((option) => (
                                    <option key={option.nombre} value={option.nombre}>
                                        {option.nombre}
                                    </option>
                                ))}
                                </select>
                            )}
                        />
                        Provincia:
                        <Controller
                            name="provincia"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <select onChange={(e) => {
                                    onChange(e.target.value);
                                    cambioProvincia(e.target.value);
                                }}>
                                {listaProvincias.map((option) => (
                                    <option key={option.nombre} value={option.nombre}>
                                        {option.nombre}
                                    </option>
                                ))}
                                </select>     
                            )}
                        />
                        Distrito:
                        <Controller
                            name="distrito"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <select 
                                    onChange={(e) => { 
                                        onChange(e.target.value); 
                                        cambioDistrito(e.target.value);
                                    }}>
                                {listaDistritos.map((distrito) => (
                                    <option key={distrito} value={distrito}>
                                        {distrito}
                                    </option>
                                ))}
                                </select>
                            )}  
                        />
                    </div>
                </div>
                <div className='ContenedorLink'>
                    <p className='Link1'>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://google.com" rel="noreferrer">Política de Privacidad</a>
                    </p>    
                    {/* <input type="submit" value="enviar"/> */}
                </div>

        </div>
                <div className='ImagenConductor'/>
            </div>
            <div class ="botones text-center">
                <div class="btn-group" role="group" aria-label="Botones con separación">

                    <Link to={"/"}>
                        <button type="button" class="btnGeneral2 mx-3">Volver</button>
                    </Link>   

                    <button type="submit" className='btnGeneral mx-3'>Continuar</button> 
                                   
                </div>
            </div>
                
            
        </form>
    );
}

function ContenedorImagenFormulario () {
    return(
        <div className='ContenedorImagenFormulario'>
            <Formulario/>
            
            <div className='ImagenConductor'/>
        </div>
    );
}

function Formulario () {
    // const {register, handleSubmit} = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    // }
    return (
        <>
        {/* <div className='ContenedorFormulario' onSubmit={handleSubmit(onSubmit)}>
                <div className='Texto1'>
                    ¡Protege tu auto, protege tu inversión!
                </div>
                <div className='Texto2'>
                    Ingresa los siguientes datos:
                </div>
                <div >
                    <div className='ContenedorCampoFormulario'>
                        Nombre Completo: <br/>                        
                        <input type='text' {...register('nombreCompleto')}/>
                    </div>
                    
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        DNI: <br/>                        
                        <input type='text' {...register('DNI',{
                            required: true,
                        })}/>
                    </div>
                    
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Correo electrónico: <br/>                        
                        <input type='text' {...register('correoElectonico',{
                            required: true,
                        })}/>
                    </div>
                </div>  
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Teléfono celular: <br/>                        
                        <input type='text' {...register('telefonoCelular',{
                            required: true,
                        })}/>
                    </div>
                </div>
                <div>
                    <div className='ContenedorCampoFormulario'>
                        Direccion: <br/>
                        Departamento:
                        <select {...register('departamento')}>
                            <option value="Lima">Lima</option>
                            <option value="Ancash">Ancash</option>
                            <option value="Ica">Ica</option>
                        </select>
                        Provincia:
                        <select {...register('provincia')}>
                            <option value="LimaMetropolitana">Lima Metropolitana</option>
                            <option value="Callao">Callao</option>
                            <option value="Huarochiri">Huarochiri</option>
                        </select>
                        Distrito:
                        <select {...register('distrito')}>
                            <option value="SanMiguel">San Miguel</option>
                            <option value="Lince">Lince</option>
                            <option value="JesusMaria">Jesus María</option>
                        </select>
                    </div>
                </div>
                <div className='ContenedorLink'>
                    <p className='Link1'>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://google.com" rel="noreferrer">Política de Privacidad</a>
                    </p>    
                    <input type="submit" value="enviar"/>
                </div>

        </div> */}

       </>
    );

}
