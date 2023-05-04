import React from 'react'

const tituloBloques = (props) => {
  const {titulo}=props
  return (
    <React.Fragment>
    <p className='Subtitulo-datos'>{titulo}</p>
    </React.Fragment>
  )
}

export default tituloBloques