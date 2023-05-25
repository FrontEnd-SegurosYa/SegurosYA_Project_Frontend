import './FormularioPlacaSoat.css';

import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// IMAGENES
import imagenSoat1 from '../../img/imagenAutoSoat.png';
import imagenLapicero1 from '../../img/imagenBoligrafo.png';

// Division que contenera la barra de progreso junto a la foto y formulario 
// de llenado de placa en el flujo cotizacion
export function FormularioPlacaSoat ({datosCliente}) {
    return (
        <div className="FormularioPlacaCotizacion">
            <div className="ContenedorImagenSoat">
                <img src={imagenSoat1} alt="imagenAutoSoat" height={"90%"} />
            </div>
            <div className="ContenedorFormulario">
                <FormularioPlaca datosCliente = {datosCliente} />                
            </div>
        </div>
        
        
    );
}

// Formulario
function FormularioPlaca ({datosCliente}) {
    const navigate = useNavigate();
    const [selectedCheckbox, setSelectedCheckbox] = useState("vacio");
    // Declaraciones para botones
    const {register, handleSubmit,watch,formState: { errors }} = useForm();
    const [listaAutos, setListaAutos] = useState([]);
    
    const obtenerPlacas = async (data) => {
        try {
          const placa = data.placa; // Obtiene el valor de la placa ingresada en el campo de entrada
    
          const auto = { placa };
    
          const response = await fetch("http://3.89.34.248:8080/api/auto/buscar", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(auto)
          });
    
          if (response.ok) {
        const data = await response.json();
        if (data === null) {
          alert("La placa ingresada ya posee una póliza.");
        } else {
            setListaAutos([data]);
            console.log(data);
          }
          } else {
            console.log('Error al buscar el auto');
          }
        } catch (error) {
          console.log(error);
        }
      };

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
        } else if (value === "checkbox2") {
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
        var tipoAuto;
        if (checkPlaca(listaAutos,data.placa) ){
            alert("La placa ingresada ya posee una poliza.");
            return;
        }else{
            // alert("La placa ingresada ya posee una poliza.");
        }
        if(selectedCheckbox==="vacio"){
            setSelectedCheckbox(null);
            return;
        }else if(selectedCheckbox === "checkbox1"){
            tipoAuto = "Particular";
        }else if(selectedCheckbox === "checkbox2"){
            tipoAuto = "Taxi";
        } else {
            tipoAuto = "Carga";
        }
        const informacionPlaca = {placa: data.placa, uso: tipoAuto};
        const informacionCliente = {datosCliente: datosCliente, informacionPlaca: informacionPlaca};
        console.log(informacionCliente);

        // console.log(informacionPlaca);
        navigate("/formularioClienteSinCuentaSOAT", {state: informacionCliente});
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
                            required: true,
                            pattern: /^[A-Z]{3}-\d{3}$/
                            })}/>
                        <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
                    </div>            
                </div>
                {errors.placa && <p className="error-message">Ingrese la placa con este formato: "ABC-123".</p>}
                
                {selectedCheckbox===null && <p className="error-message">Seleccione un tipo de auto.</p>}
                {/* {selectedCheckbox} */}
                <div className="ContenedorBotonInput">
                    <button type="submit" className="btnGeneral2" >Cotizar</button> 
                </div>
                <div className="Texto2Formulario">
                    <p>
                        Al continuar acepto la <a className="Texto3Formulario" href="https://google.com" rel="noreferrer">Política de Privacidad</a>
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