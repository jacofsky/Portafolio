import React from 'react'

import {ArrowRight} from 'akar-icons'

const CertificadosCard = ({source, titulo, lugar, link}) => {
  return (
    <div className='row'>
      <div className='col-6'>
        <img src={source} alt={lugar} loading='lazy' />
        <h3>{titulo}</h3>
        <p>{lugar}</p>
      </div>

      <div className='col-6'>
        <a href={link} target="_blank">
          <ArrowRight/>
        </a>
      </div>
    </div>
  )
}

export default CertificadosCard