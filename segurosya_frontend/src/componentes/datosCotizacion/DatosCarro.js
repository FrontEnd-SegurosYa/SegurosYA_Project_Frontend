import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import carro from '../datosCotizacion/Carro.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { departamentos } from '../formularioClienteSinCuenta/infoDirecciones';

export const DatosCarro = () => {
  const navigate = useNavigate();
    // Declaraciones para botones
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/cotizacion3");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='DatosCarro'>
        <div className='containerD'>
          <p className='Subtitulo'>Ingresa los datos de tu auto para cotizar</p>
          <div className='Form'>
            <div className='Opciones'>
              <p className='SubsubTitulo'>Marca</p>
              <select className='Resultado' {...register('marca')}>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
              
              <p className='SubsubTitulo'>Modelo</p>
              <select className='Resultado' {...register('modelo')}>
                <option>Corolla</option>
                <option>Civic</option>
              </select>
              <p className='SubsubTitulo'>Año de fabricacion</p>
              <select className='Resultado' {...register('anhoFabricacion')}>
                <option>1999</option>
                <option>2000</option>
              </select>
              <p className='SubsubTitulo'>Número de asientos</p>
              <select className='Resultado' {...register('numeroAsientos')}>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className='ImagenCarro'>
          <img className='CarroCotiza' src={carro}/>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion1"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
            <button type="submit" class="btnGeneral mx-3">Continuar</button>
          </div>
      </div>
    </form>
  )
}

export default DatosCarro;