import React from 'react'

const ProyectoCard = ({source, titulo, tags, link}) => {

    console.log(source);
  return (
    <div className='col-lg-6 col-12 portafolioCard'>

      <a href={link} target="_blank">
        <img src={source} alt={titulo} />
      </a>
    </div>
  )
}

export default ProyectoCard