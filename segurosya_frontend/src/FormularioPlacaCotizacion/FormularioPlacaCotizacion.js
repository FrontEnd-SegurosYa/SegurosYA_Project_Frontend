import './FormularioPlacaCotizacion.css';

import {useForm} from 'react-hook-form';

// IMAGENES
import imagenCotizacion1 from '../img/imagenAutoCotizacionInicio.png';
import imagenLapicero1 from '../img/imagenBoligrafo.png';

// Division que contenera la barra de progreso junto a la foto y formulario 
// de llenado de placa en el flujo cotizacion
export function FormularioPlacaCotizacion () {
    return (
        <div className="FormularioPlacaCotizacion">
            <div className="ContenedorImagen">
                <img src={imagenCotizacion1} alt="imagenCotizacion1" height={"90%"} />
            </div>
            <div className="ContenedorFormulario">
                <FormularioPlaca/>                
            </div>
        </div>
        
    );
}

// Formulario
function FormularioPlaca () {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="TamannhosAreasFormularios">
            <div className="Texto1Formulario">
                Asegúrate desde S/.30
            </div>
            <div className="ContenedorInputImagen">
                <TextInputPlaca/>                                
            </div>            
            <div className="ContenedorBotonInput">
                <BotonInputPlaca/>
            </div>
            <div className="Texto2Formulario">
                <p>
                    Al continuar acepto la <a className="Texto3Formulario" href="https://google.com" rel="noreferrer">Política de Privacidad</a>
                </p>                
            </div>
            <div>
                <p>
                    <label className='Texto4Formulario'><input className='CheckboxCircular' type="checkbox" id="cbox1" value="first_checkbox"/> No tengo inspección vehicular.</label>
                </p>
                <p>
                    <label className='Texto4Formulario'><input className='CheckboxCircular' type="checkbox" id="cbox1" value="first_checkbox"/> No tengo placa.</label>
                </p> 
                
            </div>
        </div>        
    );
}

// Text Input de la placa
function TextInputPlaca () {
    return (
        <div className="ContenedorInputPlaca" >
            <input className="InputPlaca" type="text" id="placa" name="inputPlaca" placeholder="Ingresa tu placa"></input>
            <img src={imagenLapicero1} alt="imagenLapicero1" height={"50%"} />
        </div>
    );
}


//Boton de cotizar
function BotonInputPlaca () {
    return (
        <>
        <button type="button" className="BotonesGenericos" >Cotizar</button> 
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