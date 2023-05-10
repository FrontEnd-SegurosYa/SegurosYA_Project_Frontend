import React, { Fragment } from 'react'
import "./datosCarroSoat.css";
import '../../index.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import imagenSoat2 from '../../img/carro.png'

export const DatosCarroSoat = () => {
  const navigate = useNavigate();
    // Declaraciones para botones
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/cotizacion3",{ datos: data });
    }
  return (
    <>
    <div className='containerR'>
        <div className="containerFormularioCarroSoat">
            <h4 class = "TituloSoat2"><b>Verifica tu tarjeta de propiedad y completa los datos</b></h4>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='Form'>
                <div className='Opciones'>
                  <p className='SubsubTitulo'>Marca</p>
                  <select className='Resultado' {...register('marca')}>
                    <option>Toyota</option>
                    <option>Honda</option>
                  </select>
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Modelo</p>
                  <select className='Resultado' {...register('modelo')}>
                    <option>Corolla</option>
                    <option>Civic</option>
                  </select>
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Año de fabricacion</p>
                  <select className='Resultado' {...register('anhoFabricacion')}>
                    <option>1999</option>
                    <option>2000</option>
                  </select>
                  <br/>
                  <br/>
                  <p className='SubsubTitulo'>Número de asientos</p>
                  <select className='Resultado' {...register('numeroAsientos')}>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </form>
        </div>
        <div className='imagenSoat2 containerImagenCarroSoat ' alt = "imagenSoat2">
          <></>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
          <Link to={"/soat3"}>
            <button type="button" class="btnGeneral mx-3">Continuar</button>
          </Link>
        </div>
      </div>
    </>
    
  )
}

export default DatosCarroSoat;
