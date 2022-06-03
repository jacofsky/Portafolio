import React from 'react'

import udemy from '../assets/imgs/udemy.png'
import coderhouse from '../assets/imgs/coderhouse.png'
import CertificadosCard from './CertificadosCard'

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
    <div>
      <div>
        <h2>Certifacados FIJATE LOS LINKS</h2>
        
        <div>
          {certificados.map(certificado => <CertificadosCard source={certificado.source} titulo={certificado.titulo} lugar={certificado.lugar} link={certificado.link}/>)}  
        </div>

        <button>Mas certificados</button>
      </div>
    </div>
  )
}

export default Certificados