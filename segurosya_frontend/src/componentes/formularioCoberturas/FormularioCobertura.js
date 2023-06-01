import React from "react";
import "./FormularioCobertura.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagenCheck from '../../img/check.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatosCarroSoat from "../datosCarroSoat/datosCarroSoat";

function FormularioCobertura({datosCliente,informacionPlaca,informacionAuto}) {
const navigate = useNavigate();
  const informacionCliente = {datosCliente,informacionPlaca,informacionAuto};
  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() + 1);
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaActual.getFullYear();
  const fechaActualTexto= `${dia}/${mes}/${anio}`;

  
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
        <div className='listaCoberturas' alt ="imagenCotiza3">
            <p><div className= 'subtitulosEspaciadoHorizontal'><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coberturas Adicionales</div> <div>Costo (S/.)</div><div></div></div></p>
            <div className="border-top my-3 borde"></div>
            <ul className='listaCob'>
                <li><div className='cobertura'><div className='nombreCobertura'>Te chocan o chocas             </div><div>14.00</div><div><input type="checkbox" id="cob1" name="cobertura1"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Robo total                     </div><div>13.00</div><div><input type="checkbox" id="cob2" name="cobertura2"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Robo parcial                   </div><div>10.00</div><div><input type="checkbox" id="cob3" name="cobertura3"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Lesiones a personas            </div><div> 8.00</div><div><input type="checkbox" id="cob4" name="cobertura4"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Daños a otros vehiculos        </div><div>12.00</div><div><input type="checkbox" id="cob5" name="cobertura5"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Dañas a tu vehiculo            </div><div>10.00</div><div><input type="checkbox" id="cob6" name="cobertura6"/></div></div></li>
                <div className="border-top my-3 borde"></div>
                <li><div className='cobertura'><div className='nombreCobertura'>Ambulancia                     </div><div>16.00</div><div><input type="checkbox" id="cob7" name="cobertura7"/></div></div></li>
            </ul>
        </div>
      </div>
      <div className = "botones text-center">
        <div className="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion3"}>
            <button type="button" className="btnGeneral2 mx-3">Volver</button>
          </Link>
            <button onClick={function(){

    var cob1 = document.getElementById("myCheck1");  
    var cob2 = document.getElementById("myCheck2");
    var cob3 = document.getElementById("myCheck3");  
    var cob4 = document.getElementById("myCheck4"); 
    var cob5 = document.getElementById("myCheck5");
    var cob6 = document.getElementById("myCheck6");
    var cob7 = document.getElementById("myCheck7");  
    var cob8 = document.getElementById("myCheck8");
    var cobs = [cob1, cob2, cob3, cob4, cob5, cob6, cob7, cob8];
    const informacionCliente = {datosCliente,informacionPlaca,informacionAuto,cobs};
    navigate("/cotizacion4", {state:informacionCliente});
            }} type="button" className="btnGeneral mx-3">Continuar</button>
        </div>
      </div>
    </>
  );
}
export default FormularioCobertura;