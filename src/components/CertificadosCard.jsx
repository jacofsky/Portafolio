import React from 'react'

import {ArrowRight} from 'akar-icons'

const CertificadosCard = ({source, titulo, lugar, link}) => {
  return (
    <div className='row certificado w-100'>
      <div className='col-lg-10 col-12 certifcadoInfo justify-content-center justify-content-lg-start'>
        <img src={source} alt={lugar} loading='lazy' />
        <div>
          <h3>{titulo}</h3>
          <p>{lugar}</p>
        </div>
      </div>

      <div className='col-lg-2 col-12 certificadoLink d-flex align-items-center justify-content-center justify-content-lg-end my-lg-0 my-2'>
        <a href={link} target="_blank">
          <ArrowRight size={35} color={'#0ACF83'}/>
        </a>
      </div>
    </div>
  )
}

export default CertificadosCard