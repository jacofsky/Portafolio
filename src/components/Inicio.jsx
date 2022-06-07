import { GithubFill, LinkedinBoxFill } from 'akar-icons'
import React from 'react'

import foto from '../assets/imgs/valentinJacofsky.png'


const Inicio = () => {
  return (
    <div className='inicioContainer' id='inicio'>
        <div className='row inicioContenido'>

            <div className='col-lg-6 col-12'>
                <h1 className='text-lg-left text-center'>
                    <span className='inicioTitle'>Fullstack Developer </span> 
                    <span className='inicioText'>
                    Hola! Soy <span className='colorTitle'>Valentin Jacofsky</span>, tengo 17 años y me especializo en el <span className='colorTitle'>desarrollo fullstack</span>.
                    </span>
                </h1>
                
                <div className='socialInicio d-flex justify-content-center justify-content-lg-start'>
                  <a href="https://www.linkedin.com/in/valentin-jacofsky-127b9b210/" target="_blank" rel="noopener noreferrer">
                    <LinkedinBoxFill className='linkedinInicio' size={54} />
                  </a>
                  <a href="https://github.com/jacofsky" target="_blank" rel="noopener noreferrer">
                    <GithubFill className='githubInicio' size={54}/>
                  </a>
                </div>

            </div>

            <div className='imageInicio col-lg-6 col-12'>
              <img src={foto} alt="Foto mia!" loading='lazy' />
            </div>

        </div>
    </div>
  )
}

export default Inicio