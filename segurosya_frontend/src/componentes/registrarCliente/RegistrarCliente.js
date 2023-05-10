import React, { Fragment } from 'react'
import "./RegistrarCliente.css";
import '../../index.css'
import hombre from '../registrarCliente/HombresManos.png'

export const RegistrarCliente = () => {
  return (
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
  )
}

export default RegistrarCliente;