import React, { useState } from 'react';
import './PasarelaDePagos.css';
import '../../index.css'
import imagenVISA from '../../img/visa.jpg';
import imagenPago from '../../img/pago.png';
import { Link } from 'react-router-dom';

const PasarelaDePagos = ({datosCliente,informacionPlaca,informacionAuto}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

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

  const handleSubmit = (e) => {
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

  return (
    <>
        <div className='ContenedorPasarela'>
            <div className='CuadroResumen'>
                <h3 className='TextoResumen'>TOTAL A PAGAR:  S/ </h3>
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
                    </label>
                    {/* boton continuar */}
                </div>

                <div className='Columna2'>
                    <img src={imagenPago} alt='Imagen' className= 'ImagenDerecha' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            
            </div>

            {isPopupVisible && (
                <div className="OvModal">
                <div className="ContenidoModal">
                <h2>Complete sus datos</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="cardNumber">Número de tarjeta:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={16}
                        placeholder="Ej: 1234 5678 9012 3456"
                    />
                    <label htmlFor="cardName">Nombre en la tarjeta:</label>
                    <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={handleCardNameChange}
                        maxLength={50}
                        placeholder="Ej: JOSE JAVIER"
                    />
                    <label htmlFor="expirationDate">Fecha de Expiración:</label>
                    <input
                        type="text"
                        id="expirationDate"
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                        maxLength={5}
                        placeholder="Ej: 02/26"
                    />
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        type="password"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength={3}
                        placeholder="***"
                    />
                    </form>
                    <button onClick={() => setIsPopupVisible(false)} type="submit">Pagar S/</button>
                </div>
                </div>
            )}
            
        </div>
        <div className ="botones text-center">
            <Link to={"/soat4"}>
                <button type="button" className="btnGeneral2 mx-3">Volver</button>
            </Link>
        </div>
        <br></br>
    </>
    
  );
};

export default PasarelaDePagos;