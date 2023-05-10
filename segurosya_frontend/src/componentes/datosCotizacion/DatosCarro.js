import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";

export const DatosCarro = ({datosCliente}) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  // Declaraciones para botones
  const onSubmit = (data) => {
      console.log(data);
      navigate("/cotizacion3", {state: datosCliente});
  }
  return (
    <>
     <div className='containerR'>
        <div className="containerFormularioCarroSeguro">
            <h4 class = "TituloSeguro2"><b>Ingresa los datos de tu auto para cotizar</b></h4>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='Form'>
                <div className='Opciones'>
                  <p className='SubsubTitulo'>Marca</p>
                  {/* <select className='Resultado' {...register('marca')}>
                    <option>Toyota</option>
                    <option>Honda</option>
                  </select> */}
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Modelo</p>
                  {/* <select className='Resultado' {...register('modelo')}>
                    <option>Corolla</option>
                    <option>Civic</option>
                  </select> */}
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Año de fabricacion</p>
                  {/* <select className='Resultado' {...register('anhoFabricacion')}>
                    <option>1999</option>
                    <option>2000</option>
                  </select> */}
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Número de asientos</p>
                  {/* <select className='Resultado' {...register('numeroAsientos')}>
                    <option>4</option>
                    <option>5</option>
                  </select> */}
                </div>
              </div>
              <button type="submit" class="btnGeneral mx-3">Continuar</button>
            </form>
        </div>
        <div className='imagenSeguro2 containerImagenCarroSeguro ' alt = "imagenSeguro2">
          <></>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion1"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
        </div>
      </div>
    </>
  )

}
  export default DatosCarro;
