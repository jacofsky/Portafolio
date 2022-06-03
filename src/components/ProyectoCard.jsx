import React from 'react'

const ProyectoCard = ({source, titulo, tags}) => {

    console.log(tags);
  return (
    <>
        <img className='col-md-6 col-12' src={source} alt={titulo} loading='lazy'  />
    </>
  )
}

export default ProyectoCard