import './FormularioPlacaCotizacion.css';

import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// IMAGENES
import imagenCotizacion1 from '../../img/imagenAutoCotizacionInicio.png';
import imagenLapicero1 from '../../img/imagenBoligrafo.png';
//OTROS
import { procesarPlaca,buscarPlaca } from './funcionesExtra';



// Division que contenera la barra de progreso junto a la foto y formulario 
// de llenado de placa en el flujo cotizacion
export function FormularioPlacaCotizacion({placaPasada}){
    return (
        <div className="FormularioPlacaCotizacion">
            <div className="ContenedorImagenCotizacion">
                <img src={imagenCotizacion1} alt="imagenCotizacion1" height={"90%"} />
            </div>
            <div className="ContenedorFormularioCotizacion">
                <FormularioPlaca placaPasada={placaPasada}/>                
            </div>
        </div>
        
    );
}

// Formulario
function FormularioPlaca ({placaPasada}) {

    const navigate = useNavigate();
    // Declaraciones para botones
    const {register, handleSubmit,watch,formState: { errors },setValue} = useForm();

    
      useEffect(() => {
        // fetch data

        if(placaPasada){
            setValue("placa",placaPasada.placa);
            setValue("noPoseeInspeccionVehicular",!placaPasada.poseeInspeccionVehicular);
            setValue("noPoseePlaca",!placaPasada.poseePlaca);
        }else{
            // setValue("placa","");
            // setValue("noPoseeInspeccionVehicular",!placaPasada.poseeInspeccionVehicular);
            // setValue("noPoseePlaca",!placaPasada.poseePlaca);
        }
      }, []);

    
      
    
    const onSubmit = (data) => {
        const placaProcesada = procesarPlaca(data.placa);
        buscarPlaca(placaProcesada)
        .then((success) => {
            if (success) {
                //Se encontro la placa
                alert("La placa ingresada ya posee un seguro.");
                return;
                // Handle successful response
            } else {
                //No se encontro la placa
                // alert("auto no encontrado");
                // Handle failed response or error
                const informacionPlaca = {placa: procesarPlaca(data.placa), poseePlaca: !data.noPoseePlaca, poseeInspeccionVehicular: !data.noPoseeInspeccionVehicular}
                const infoState = {informacionPlaca: informacionPlaca};
                console.log("se envia ");
                console.log(infoState);
                navigate("/cotizacion2", {state: infoState});
            }
          })
          .catch((error) => {
            console.error("Error occurred:", error);
            // Handle other errors
          });

        
    }
    const sinPlaca = watch("noPoseePlaca");
    
    const cambioSinPlaca = (e) => {
        // console.log("Cambio detectado");
        const esSeleccionado = e.target.checked;    
        if (esSeleccionado) {
            // console.log("Se selecciono noPlaca");
            setValue("noPoseeInspeccionVehicular",true);
            setValue("placa","");
        }else{
            console.log("Se selecciono siPlaca");
            setValue("noPoseeInspeccionVehicular",false);
        }
        
      };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="TamannhosAreasFormulariosCotizacion">
                <div className="Texto1Formulario">
                    Asegúrate desde S/.30
                </div>
                <div className="ContenedorInputPlaca">
                    {/* <TextInputPlaca/>*/}
                    <div className='ContenedorBarraInputPlaca'>        
                        <input className="InputPlaca" type="text" placeholder='Ingresa tu placa' disabled={sinPlaca} {...register('placa',{
                            value: placaPasada ? placaPasada.placa : "",
                            required: !sinPlaca,
                            pattern: /^(?:[A-Za-z]{3}\d{3}|[A-Za-z]{3}-\d{3}|[A-Za-z]\d[A-Za-z]\d{3}|[A-Za-z]{2}\d{4}|[A-Za-z]\d[A-Za-z]-\d{3}|[A-Za-z]{2}\d-\d{3})$/
                            })}/>
                        <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
                    </div>            
                </div>
                {!sinPlaca && errors.placa && <p className="error-message">Ingrese una placa valida.</p>}
                <div>
                    <p>
                        <label className='Texto4Formulario'><input name='noPoseeInspeccionVehicular' ref={register} className='CheckboxCircular' type="checkbox" disabled={sinPlaca}   {...register('noPoseeInspeccionVehicular',{checked: placaPasada ? !placaPasada.poseeInspeccionVehicular : sinPlaca})}/> No tengo inspección vehicular.</label>
                    </p>
                    <p>
                        <label className='Texto4Formulario'><input name='noPoseePlaca' className='CheckboxCircular' ref={register} type="checkbox" {...register('noPoseePlaca', {onChange: cambioSinPlaca})}/> No tengo placa.</label>
                    </p>                     
                </div>
           
                <div className="ContenedorBotonInput">
                    <button type="submit" className="btnGeneral2" >Cotizar</button> 
                </div>
                <div className="Texto2Formulario">
                    <p>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://drive.google.com/file/d/11ufJI949A8UPw0QWubV3aH3wCxfjjpb_/view?usp=sharing"  target="_blank" rel="noreferrer">Política de Privacidad</a>
                    </p>                
                </div>
                
             
        </form>               
    );
}

// Text Input de la placa
function TextInputPlaca () {
    return (
        <div className='ContenedorBarraInputPlaca'>
        
            <input className="InputPlaca" type="text" id="placa" name="inputPlaca" placeholder="Ingresa tu placa" ></input>
            <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
        
            
        </div>
    );
}


//Boton de cotizar
function BotonInputPlaca () {
    return (
        <>
        <Link to={"/formularioClienteSinCuentaSeguro"}>
            <button type="button" className="btnGeneral2" >Cotizar</button> 
        </Link>
        </>
    );
}

// //Boton de No Tengo Placa
// function BotonNoTengoPlaca () {
//     return (
//         <>
//             <button type="button" className="BotonesGenericos" >Todavía no tengo placa</button> 
//         </>
//     );
// }