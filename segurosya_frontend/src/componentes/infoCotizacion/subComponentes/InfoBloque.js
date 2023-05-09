import React from 'react'

const infoBloque = (props) => {
  const {titulo, descripcion}=props
  return (
    <div>
    <h5 class = "text-center"><b>{titulo}</b></h5>
    <div>{descripcion}</div>
    </div>
  )
}

export default infoBloque