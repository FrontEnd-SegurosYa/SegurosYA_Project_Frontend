import './FormularioPlacaCotizacion.css';

import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// IMAGENES
import imagenCotizacion1 from '../../img/imagenAutoCotizacionInicio.png';
import imagenLapicero1 from '../../img/imagenBoligrafo.png';

// Division que contenera la barra de progreso junto a la foto y formulario 
// de llenado de placa en el flujo cotizacion
export function FormularioPlacaCotizacion(){
    return (
        <div className="FormularioPlacaCotizacion">
            <div className="ContenedorImagenCotizacion">
                <img src={imagenCotizacion1} alt="imagenCotizacion1" height={"90%"} />
            </div>
            <div className="ContenedorFormularioCotizacion">
                <FormularioPlaca/>                
            </div>
        </div>
        
    );
}

// Formulario
function FormularioPlaca () {
    const navigate = useNavigate();
    // Declaraciones para botones
    const {register, handleSubmit,watch,formState: { errors }} = useForm();
    const [listaAutos, setListaAutos] = useState([]);
    const obtenerPlacas = async () => {
        const data = await (
          await fetch("http://3.89.34.248:8080/api/auto/listar")
        ).json();    
        // set state when the data received
        setListaAutos(data);
        console.log(data);
      };
      useEffect(() => {
        // fetch data
        obtenerPlacas();
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
        }else{
            // alert("La placa ingresada ya posee una poliza.");
        }
        const informacionPlaca = {placa: data.placa, poseePlaca: !data.noPoseePlaca, poseeInspeccionVehicular: !data.noPoseeInspeccionVehicular}
        // const informacionCliente = {datosCliente: datosCliente, informacionPlaca: informacionPlaca};
        // console.log(informacionCliente);

        // console.log(informacionPlaca);
        navigate("/formularioClienteSinCuentaSeguro", {state: informacionPlaca});
    }
    const sinPlaca = watch("noPoseePlaca");
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="TamannhosAreasFormulariosCotizacion">
            
                <div className="Texto1Formulario">
                    Asegúrate desde S/.30
                </div>
                <div className="ContenedorInputPlaca">
                    {/* <TextInputPlaca/>                                 */}
                    <div className='ContenedorBarraInputPlaca'>        
                        <input className="InputPlaca" type="text" placeholder='Ingresa tu placa' {...register('placa',{
                            required: !sinPlaca,
                            pattern: /^[A-Z]{3}-\d{3}$/
                            })}/>
                        <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
                    </div>            
                </div>
                {!sinPlaca && errors.placa && <p className="error-message">Ingrese la placa en mayúsculas y con in guión.</p>}
                <div>
                    <p>
                        <label className='Texto4Formulario'><input className='CheckboxCircular' type="checkbox"    {...register('noPoseeInspeccionVehicular')}/> No tengo inspección vehicular.</label>
                    </p>
                    <p>
                        <label className='Texto4Formulario'><input className='CheckboxCircular' type="checkbox"  {...register('noPoseePlaca')}/> No tengo placa.</label>
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