import './FormularioPlacaSoat.css';


import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// IMAGENES
import imagenSoat1 from '../../img/imagenAutoSoat.png';
import imagenLapicero1 from '../../img/imagenBoligrafo.png';
//OTROS
import { buscarPlaca, procesarPlaca } from './funcionesExtra';

// Division que contenera la barra de progreso junto a la foto y formulario 
// de llenado de placa en el flujo cotizacion
export function FormularioPlacaSoat ({placaPasada}) {
    return (
        <div className="FormularioPlacaCotizacion">
            <div className="ContenedorImagenSoat">
                <img src={imagenSoat1} alt="imagenAutoSoat" height={"90%"} />
            </div>
            <div className="ContenedorFormulario">
                <FormularioPlaca placaPasada={placaPasada} />                
            </div>
        </div>
        
        
    );
}

// Formulario
function FormularioPlaca ({placaPasada}) {

    const navigate = useNavigate();
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    // Declaraciones para botones
    const {register, handleSubmit,watch,formState: { errors }} = useForm();

    
    
    const { setValue } = useForm({
        defaultValues: {
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
        },
      });

    const cambioCheckBox = (value) => {
        setSelectedCheckbox(value);
        // Use setValue function to update the value of checkboxes
        if (value === "checkbox1") {
            setValue("checkbox1", true);
            setValue("checkbox2", false);
            setValue("checkbox3", false);
        } else if (value === "checkbox1") {
            setValue("checkbox2", true);
            setValue("checkbox1", false);
            setValue("checkbox3", false);
        } else if (value === "checkbox3") {
            setValue("checkbox3", true);
            setValue("checkbox1", false);
            setValue("checkbox2", false);
        }
      };

      useEffect(() => {
        // console.log("Se recibio:");
        // console.log(placaPasada);
        if(placaPasada){
            setValue("placa",placaPasada.placa);
            if(placaPasada.uso === "Particular"){
                cambioCheckBox("checkbox1");
            }else if(placaPasada.uso === "Taxi"){
                cambioCheckBox("checkbox2");
            }else{
                cambioCheckBox("checkbox3");
            }
        }
      }, []);


    const onSubmit = (data) => {
        var tipoAuto;
        const placaProcesada = procesarPlaca(data.placa);
        if(selectedCheckbox==="vacio" || selectedCheckbox===null){
            setSelectedCheckbox("vacio");
            return;
        }else if(selectedCheckbox === "checkbox1"){
            tipoAuto = "Particular";
        }else if(selectedCheckbox === "checkbox2"){
            tipoAuto = "Taxi";
        } else {
            tipoAuto = "Carga";
        }

        buscarPlaca(placaProcesada)
        .then((success) => {
            if (success) {
                //Se encontro la placa
                // console.log("POST request successful");
                alert("La placa ingresada ya posee un seguro.");
                return;
                // Handle successful response
            } else {
                //No se encontro la placa
                // console.log("POST request failed");
                // alert("auto no encontrado");
                // Handle failed response or error
                
                const informacionPlaca = {placa: procesarPlaca(data.placa), uso: tipoAuto};
                const infoState = {informacionPlaca: informacionPlaca};
                console.log("se envia ");
                console.log(infoState);
                navigate("/soat2", {state: infoState});
            }
        })
        .catch((error) => {
            console.error("Error occurred:", error);
            // Handle other errors
        });
    }

    // const sinPlaca = watch("placa");
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="TamannhosAreasFormularios">
                <div className="Texto1Formulario">
                    Seleccione el tipo de auto
                </div>
                <div className='ContenedorOpciones'>
                    <div>
                        <p>Particular</p>
                        <input
                        {...register("checkbox1")}
                        type="checkbox"
                        checked={selectedCheckbox === "checkbox1"}
                        onChange={() => cambioCheckBox("checkbox1")}
                        className='CheckboxCircular'
                        />
                        
                    </div>

                        
                    <div>
                        <p>Taxi</p>
                        <input
                        {...register("checkbox2")}
                        type="checkbox"
                        checked={selectedCheckbox === "checkbox2"}
                        onChange={() => cambioCheckBox("checkbox2")}
                        className='CheckboxCircular'
                        />   
                        
                    </div>

                    <div>
                        <p>Carga</p>
                        <input
                        {...register("checkbox3")}
                        type="checkbox"
                        checked={selectedCheckbox === "checkbox3"}
                        onChange={() => cambioCheckBox("checkbox3")}
                        className='CheckboxCircular'
                        />
                        
                    </div>

                </div>
                <div className="ContenedorInputPlaca">
                    {/* <TextInputPlaca/>                                 */}
                    <div className='ContenedorBarraInputPlaca'>        
                        <input className="InputPlaca" type="text" placeholder='Ingresa tu placa' {...register('placa',{
                            value: placaPasada ? placaPasada.placa : "",
                            required: true,
                            pattern: /^(?:[A-Za-z]{3}\d{3}|[A-Za-z]{3}-\d{3}|[A-Za-z]\d[A-Za-z]\d{3}|[A-Za-z]{2}\d{4}|[A-Za-z]\d[A-Za-z]-\d{3}|[A-Za-z]{2}\d-\d{3})$/
                            // pattern: /^[A-Za-z0-9]{1,3}-?\d{3}$/
                            })}/>
                        <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
                    </div>            
                </div>
                {errors.placa && <p className="error-message">Ingrese una placa valida.</p>}
                
                {selectedCheckbox==="vacio" && <p className="error-message">Seleccione un tipo de auto.</p>}
              
                <div className="ContenedorBotonInput">
                    <button type="submit" className="btnGeneral2" >Cotizar</button> 
                </div>
                <div className="Texto2Formulario">
                    <p>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://drive.google.com/file/d/11ufJI949A8UPw0QWubV3aH3wCxfjjpb_/view?usp=sharing" target="_blank" rel="noreferrer">Política de Privacidad</a>
                    </p>                
                </div>
                
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
        <Link to={"/cotizacion2"}>
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