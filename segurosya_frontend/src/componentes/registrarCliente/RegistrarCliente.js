import React, { Fragment } from 'react'
import "./RegistrarCliente.css";
import '../../index.css'
import hombre from '../registrarCliente/HombresManos.png'
import { Link } from 'react-router-dom';


import { useForm, Controller} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import ubicacionesJSON from "./ubicaciones.json";

export const RegistrarCliente = () => {
    const navigate = useNavigate();

    const { control, register,handleSubmit,formState: { errors } } = useForm();
    
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
            correoElectronico: data.email,
            telefonoCelular: data.telefonoCelular,
            ubicacion: ubicacion
        };
        console.log(informacionClienteSinCuenta);
        // alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);
        navigate("/cotizacion1", {state: informacionClienteSinCuenta});
        
    }
    return (
    <>
    <div className='RegistrarCliente'>
      <div className='DatosCliente'>
        <p className='Titulo'>¡Únase a nuestra comunidad!</p>
        <p className='Subtitulo'>Ingresa los siguientes datos:</p>
        <div className='IngresaDato'>
            <p className='Negrita'>Nombre Completo</p>
            <input className='Ingresar'></input>
        </div>
        <div className='IngresaDato'>
            <p className='Negrita'>DNI</p>
            <input className='Ingresar'></input>
        </div>
        <div className='IngresaDato'>
            <p className='Negrita'>Correo electrónico</p>
            <input className='Ingresar'></input>
        </div>
        <div className='IngresaDato'>
            <p className='Negrita'>Teléfono Celular</p>
            <input className='Ingresar'></input>
        </div>
        <div className='Trio'>
            <div className='IngresaDatoTrio'>
                <p className='Negrita'>Departamento</p>
                <select className='Opciones'>
                    <option>Lima</option>
                    <option>Ancash</option>
                    <option>Ica</option>
                </select>
            </div>
            <div className='IngresaDatoTrio Medio'>
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
                </select>
            </div>
        </div>
        <div className='IngresaDato'>
            <p className='Negrita'>Contraseña</p>
            <input className='Ingresar'></input>
        </div>
        <p>Al continuar acepto la <a className="Celeste">Política de privacidad</a></p>
      </div>
      <div className='Imagen'>
        <img className='VentaCarro' src={hombre}/>
      </div>
    </div>
    <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
        <Link to={"/iniciarSesion"}>
            <button type="button" className="btnGeneral2 mx-3">Volver</button>
        </Link>
        <Link to={"/"}>
            <button type="button" className="btnGeneral mx-3">Continuar</button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default RegistrarCliente;