import React from 'react'

const Componente4 = (props) => {
  const {titulo, descripcion}=props
  return (
    <div>
    <p>{titulo}</p>
    <div>{descripcion}</div>
    </div>
  )
}

export default Componente4