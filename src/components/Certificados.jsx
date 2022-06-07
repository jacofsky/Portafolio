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
    link: 'https://www.coderhouse.com/certificados/61128db8bab9b000101aaf5e'

  },
  {
    source: coderhouse,
    titulo: 'JavaScript',
    lugar: 'Coderhouse',
    link: 'https://www.coderhouse.com/certificados/61521d02146a3800173332d2'

  },
  {
    source: udemy,
    titulo: 'React',
    lugar: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-ecf24eb5-ed47-4ff0-bb06-5d92f50eb609/'
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
          <a className='certificadosButton' href='https://www.linkedin.com/in/valentin-jacofsky-127b9b210/' target="_blank">
            Mas certificados
          </a>
        </div>
      
      <img className='waveBottomCertificado' src={waveBottomSkills} alt="Waves" loading='lazy' id='contacto' />
    </div>
  )
}

export default Certificados