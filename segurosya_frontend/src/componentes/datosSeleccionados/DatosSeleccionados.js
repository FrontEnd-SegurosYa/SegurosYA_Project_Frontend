import "./DatosSeleccionados.css";
import '../../index.css'
import carro from '../datosSeleccionados/CarroSeguro.png'
import { Link } from 'react-router-dom';

export const DatosSeleccionados = ({datosCliente, informacionPlaca, informacionAuto}) => {
  const informacionCliente = {datosCliente,informacionPlaca,informacionAuto};
  return (
    <>
      <br/>
      <div className='contenedorD'>
        <div className='infoPersonaCoche'>
            <div>
              <br/>
                <p><b>Sobre ti:</b></p>
                <ul>
                    <li>{datosCliente.nombreCompleto}</li>
                    <li>{datosCliente.correoElectronico}</li>
                    <li>{datosCliente.telefonoCelular}</li>
                </ul>
            </div>
            <div className="border-top my-3 borde"></div>
            <div>
                <p><b>Sobre el vehiculo:</b></p>
                <ul>
                    <li><b>Marca, modelo y año</b></li>
                        {/* <p> - Fiat 500 2015</p> */}
                        <p> - {informacionAuto.marca} {informacionAuto.modelo} {informacionAuto.anhoFabricacion}</p>
                    <li><b>Número de asientos</b></li>
                        <p> - {informacionAuto.numeroAsientos}</p>
                    {/* <li><b>Uso</b></li>
                        <p> - Particular</p> */}
                </ul>
                <p><b>Seguro Base: S/. 40.00</b></p>
            </div>
        </div>
        <div className='carroCotiza3 infoPersonaCoche' alt ="imagenCotiza3">
          <></>
        </div>
      </div>
      <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion2"}>
            <button type="button" className="btnGeneral2 mx-3">Volver</button>
          </Link>
          <Link to={"/cotizacion4"} state={informacionCliente}>
            <button type="button" className="btnGeneral mx-3">Continuar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DatosSeleccionados;