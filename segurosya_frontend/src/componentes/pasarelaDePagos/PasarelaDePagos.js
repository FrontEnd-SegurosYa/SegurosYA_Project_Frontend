import React, { useState } from 'react';
import './PasarelaDePagos.css';
import '../../index.css'
import imagenVISA from '../../img/visa.jpg';
import imagenPago from '../../img/pago.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm, Controller} from 'react-hook-form';
import check from '../../img/check.png';
import '../formularioClienteSinCuenta/FormularioClienteSinCuenta.css';

const PasarelaDePagos = ({informacionClienteSinCuenta,informacionPlaca,informacionAuto,planSeleccionado}) => {
  const navigate = useNavigate();
  const { control, register,handleSubmit,formState: { errors } ,setValue} = useForm();
// monto

  const [isChecked, setIsChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const centrarBoton = {
    display: 'flex',
    justifyContent: 'center',
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
  };

  const handleCardNameChange = (e) => {
    const value = e.target.value;
    setCardName(value);
  };

  const handleExpirationDateChange = (e) => {
    const value = e.target.value;
    let formattedValue = value;

    if (value.length === 2 && value.charAt(1) !== '/') {
      formattedValue = value + '/';
    } else if (value.length === 2 && value.charAt(1) === '/') {
      formattedValue = value.slice(0, 1);
    }

    setExpirationDate(formattedValue);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    setCvv(value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Realizar cualquier acción necesaria con los datos encriptados
    const encryptedCardNumber = btoa(cardNumber);
    const encryptedCardName = btoa(cardName);
    const encryptedExpirationDate = btoa(expirationDate);
    const encryptedCvv = btoa(cvv);
    console.log('Datos encriptados:', encryptedCardNumber, encryptedCardName, encryptedExpirationDate, encryptedCvv);
    // Restablecer los campos después de enviar el formulario
    setCardNumber('');
    setCardName('');
    setExpirationDate('');
    setCvv('');
  };

  const handleRadioButtonChange = () => {
    setIsChecked(!isChecked);
    setIsPopupVisible(!isPopupVisible);
  };
  
  const handleClose = () => {
    setIsPopupVisible(false);
  };

  const handleInfoIconClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const onSubmit = (data) => {
    const infoState = {informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca,informacionAuto : informacionAuto, planSeleccionado: planSeleccionado};
    navigate("/soat6", {state: infoState});
    // alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);   
  }
  
 
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isButton2Disabled, setButton2Disabled] = useState(true);

  const handleButton1Click = () => {
    setButton2Disabled(false);
    setIsPopupVisible(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='ContenedorPasarela'>
            <div className='CuadroResumen'>
                <h3 className='TextoResumen'>PLAN: {planSeleccionado.nombrePlan}</h3>
                <h3 className='TextoResumen'>TOTAL A PAGAR:  S/ {planSeleccionado.monto.toFixed(2)}</h3>
            </div>
            <br></br>
            <div className='ContenedorColumnas'>
                <div className='Columna1'>
                    <div >
                        <br></br>
                        <br></br>
                        <h5><b>Seleccione su método de pago:</b></h5>
                    </div>
                    <br></br>
                    <br></br>
                    <label htmlFor="radioButton" style={{ marginLeft: '70px' }}>
                        <input
                            type="radio"
                            id="radioButton"
                            checked={isChecked}
                            onChange={handleRadioButtonChange}
                            style={{ transform: 'scale(1.5)' }}
                        />
                        <img src={imagenVISA} alt="Imagen" className="ImagenRadio" /> 
                        <br></br>
                        <br></br>
                    </label>
                    <br></br>
                    <div className ="botonMedio"style={{ marginLeft: '175px' }}>
                      <button type="submit" disabled={isButton2Disabled} className='btnPasarela  mx-3' data-bs-toggle="modal" data-bs-target="#envioSoat" >Continuar</button> 
                    </div>
                    
                </div>

                <div className='Columna2'>
                    <img src={imagenPago} alt='Imagen' className= 'ImagenDerecha' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            
            </div>

            {isPopupVisible && (
                <div className="OvModal">
                <div className="ContenidoModal">
                <h2>Complete sus datos</h2>
                <form onSubmit={handleSubmit2}>
                    <label htmlFor="cardNumber">Número de tarjeta:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={16}
                        placeholder="Ej: 1234 5678 9012 3456"
                    />
                    {errors.cardNumber && <p className="error-message">Debe ingresar un número de tarjeta</p>}
                    <label htmlFor="cardName">Nombre en la tarjeta:</label>
                    <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={handleCardNameChange}
                        maxLength={50}
                        placeholder="Ej: JOSE JAVIER"
                    />
                    {errors.cardName && <p className="error-message">Debe ingresar un nombre</p>}
                    <label htmlFor="expirationDate">Fecha de Expiración:</label>
                    <input
                        type="text"
                        id="expirationDate"
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                        maxLength={5}
                        placeholder="Ej: 02/26"
                    />
                    {errors.expirationDate && <p className="error-message">Debe ingresar una fecha</p>}
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        type="password"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength={3}
                        placeholder="***"
                    />
                    {errors.cvv && <p className="error-message">Debe ingresar su clave dinámica</p>}
                    </form>
                    <button onClick={handleButton1Click}  className="btnGeneral mx-3" type="submit">Pagar S/ {planSeleccionado.monto}</button>
                </div>
                </div>
            )}
            
        </div>
        <div className ="botones text-center">
            <Link to={"/soat4"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca,informacionAuto: informacionAuto,planSeleccionado: planSeleccionado}}>
                <button type="button" className="btnGeneral2 mx-3">Volver</button>
            </Link>
        </div>
        <br></br>
        <div className="modal fade " id="envioSoat" tabIndex="-1" aria-labelledby="envioSoat" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modalMensajes">
              <img src={check} className="img-fluid check" alt = "envioSoatCheck"/>
              <div className="modal-header">
                <h3 className="modal-title Textos" id="agradecimientoModalLabel"> <b>Gracias por comprar con SegurosYA!</b></h3>
              </div>
              <div className="modal-body Textos" >
                <h4>Se le envió una copia de su SOAT a su correo electrónico</h4> 
              </div>
              <div className="modal-footer">
                  <button className="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Aceptar</button>
              </div>
            </div>
        </div>
      </div>
      
    </form>
    
    
  );
};

export default PasarelaDePagos;