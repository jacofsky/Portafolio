import React from 'react'

import udemy from '../assets/imgs/udemy.png'
import coderhouse from '../assets/imgs/coderhouse.png'
import CertificadosCard from './CertificadosCard'
import waveBottomSkills from '../assets/waves/waveBottomSkills.png'

const certificados = [
  {
    source: coderhouse,
    titulo: 'Diseño web',
    lugar: 'Coderhouse',
    link: 'https://www.google.com'

  },
  {
    source: coderhouse,
    titulo: 'JavaScript',
    lugar: 'Coderhouse',
    link: 'https://www.google.com'

  },
  {
    source: udemy,
    titulo: 'React',
    lugar: 'Udemy',
    link: 'https://www.google.com'
  }
]

const Certificados = () => {
  return (
    <div className='certificadosBg' id='certificados'>
      <div className='certificadosTitle'>
        <h2>Certificados</h2>
      </div>
        
        <div className='certificadoContainer my-3'>
          {certificados.map(certificado => <CertificadosCard source={certificado.source} titulo={certificado.titulo} lugar={certificado.lugar} link={certificado.link}/>)}  
        </div>

        <div className='certificadosButtonContainer'>
          <a className='certificadosButton' href='#' target='_blanck'>
            Mas certificados
          </a>
        </div>
      
      <img className='waveBottomCertificado' src={waveBottomSkills} alt="Waves" loading='lazy' id='contacto' />
    </div>
  )
}

export default Certificados