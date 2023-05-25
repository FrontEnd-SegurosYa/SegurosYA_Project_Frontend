import './FormularioPlacaCotizacion.css';

import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// IMAGENES
import imagenCotizacion1 from '../../img/imagenAutoCotizacionInicio.png';
import imagenLapicero1 from '../../img/imagenBoligrafo.png';
//OTROS
import { procesarPlaca } from './funcionesExtra';


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
    const [listaAutos, setListaAutos] = useState([]);
    
    const obtenerPlacas = async () => {
        const data = await (
          await fetch("http://3.89.34.248:8080/api/auto/listar")
        ).json();    
        // set state when the data received
        setListaAutos(data);
        // console.log(data);
      };

      useEffect(() => {
        // fetch data
        // obtenerPlacas();
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

      const checkPlaca = (listaAutos, placaB) =>{
        for (let i = 0; i < listaAutos.length; i++) {
            
            if(listaAutos[i].placa === placaB) return true;
            // console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Placa: ${carro.placa}`);
        }
        return false;
      }
    
      
    
    const onSubmit = (data) => {
        if (checkPlaca(listaAutos,data.placa) ){
            alert("La placa ingresada ya posee un seguro.");
            return;
        }
        const informacionPlaca = {placa: procesarPlaca(data.placa), poseePlaca: !data.noPoseePlaca, poseeInspeccionVehicular: !data.noPoseeInspeccionVehicular}
        const infoState = {informacionPlaca: informacionPlaca, rumbo: "seguro"};
        console.log("se envia ");
        console.log(infoState);
        navigate("/cotizacion2", {state: infoState});
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
                            pattern: /^[A-Za-z0-9]{1,3}-?\d{3}$/
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
                        Al continuar acepto la <a className="Texto3Formulario" href="https://google.com" rel="noreferrer">Política de Privacidad</a>
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