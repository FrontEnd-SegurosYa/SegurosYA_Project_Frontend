import React from 'react'

const tituloBloques = (props) => {
  const {titulo}=props
  return (
    <React.Fragment>
    <h5 className='Subtitulo-datos'>{titulo}</h5>
    </React.Fragment>
  )
}

export default tituloBloques