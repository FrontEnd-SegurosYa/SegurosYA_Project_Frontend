import React from 'react'

const infoBloque = (props) => {
  const {titulo, descripcion}=props
  return (
    <div>
    <p>{titulo}</p>
    <div>{descripcion}</div>
    </div>
  )
}

export default infoBloque