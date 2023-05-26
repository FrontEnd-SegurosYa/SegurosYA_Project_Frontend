import './BarraProgreso.css';
import React from 'react';

//Parte que contiene a la barra de pregreso
export function BarraProgreso ({paso}) {
    return (        
        <div className="BarraProgreso">
            <ContenedorBarraProgreso paso={paso}/>
        </div>       
    );
}

export function BarraProgresoSeguro ({paso}) {
    return (        
        <div className="BarraProgreso">
            <ContenedorBarraProgresoSeguro paso={paso}/>
        </div>       
    );
}



//Contenedor de la barra de progreso
function ContenedorBarraProgreso ({paso}) {
    return (
            <div className='ContenedorBarraProgreso'>
                {/* Para ver bordes de tabla y celdas, agregar border='1' a table*/}
                <table  width={'100%'} height={'100%'}>
                    <tbody >
                        <tr>
                            <td><ContenedorParteBarraProgreso valor = {1} etiqueta = "Ingresa" paso={paso}/></td>
                            <td><ContenedorParteBarraProgreso valor = {2} etiqueta = "Registra" paso={paso}/></td>
                            <td><ContenedorParteBarraProgreso valor = {3} etiqueta = "Completa" paso={paso}/></td>
                            <td><ContenedorParteBarraProgreso valor = {4} etiqueta = "Escoge" paso={paso}/></td>
                            <td><ContenedorParteBarraProgreso valor = {5} etiqueta = "Valida" paso={paso}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
    );
    
}

//Contenedor de la barra de progreso
function ContenedorBarraProgresoSeguro ({paso}) {
    return (
            <div className='ContenedorBarraProgreso'>
                {/* Para ver bordes de tabla y celdas, agregar border='1' a table*/}
                <table  width={'100%'} height={'100%'}>
                    <tbody >
                        <tr>
                            <td><ContenedorParteBarraProgresoSeguro valor = {1} etiqueta = "Ingresa" paso={paso}/></td>
                            <td><ContenedorParteBarraProgresoSeguro valor = {2} etiqueta = "Completa" paso={paso}/></td>
                            <td><ContenedorParteBarraProgresoSeguro valor = {3} etiqueta = "Escoge" paso={paso}/></td>
                            <td><ContenedorParteBarraProgresoSeguro valor = {4} etiqueta = "Valida" paso={paso}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
    );
    
}

//Contenedor de un circulo, etiqueta y linea de la barra de progreso
function ContenedorParteBarraProgreso ({valor,etiqueta,paso}) {
    if (valor !== 5){
        return(
            <table  height={'100%'}>
                <tbody>
                    <tr>
                        <td><CirculoBarraProgreso valor={valor} paso={paso}/></td>
                        <td>{etiqueta}</td>
                        <td><RectanguloParteBarraProgreso /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
    else{
        return(
            <table>
                <tbody>
                    <tr>
                        <td><CirculoBarraProgreso valor={valor} paso={paso}/></td>
                        <td>{etiqueta}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
        
}

//Contenedor de un circulo, etiqueta y linea de la barra de progreso
function ContenedorParteBarraProgresoSeguro ({valor,etiqueta,paso}) {
    if (valor !== 4){
        return(
            <table  height={'100%'}>
                <tbody>
                    <tr>
                        <td><CirculoBarraProgreso valor={valor} paso={paso}/></td>
                        <td>{etiqueta}</td>
                        <td><RectanguloParteBarraProgreso /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
    else{
        return(
            <table>
                <tbody>
                    <tr>
                        <td><CirculoBarraProgreso valor={valor} paso={paso}/></td>
                        <td>{etiqueta}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
        
}

function CirculoBarraProgreso ({valor,paso}) {
    if(paso === valor){
        return (        
            <span className="CirculoBarraProgresoActual">
                {valor} 
            </span>       
        );
    }else{
        return (        
            <span className="CirculoBarraProgreso">
                {valor} 
            </span>       
        );
    }
    
}

function RectanguloParteBarraProgreso () {
    return (
        <hr className="RectanguloParteBarraProgreso"></hr>
    );
}





