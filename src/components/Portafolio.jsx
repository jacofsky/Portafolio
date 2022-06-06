import React from 'react'

import tipCalculator from '../assets/imgs/tipCalculator.png'
import ipTracker from '../assets/imgs/ipTracker.png'
import todoApp from '../assets/imgs/todoApp.png'
import unSplash from '../assets/imgs/unSplash.png'
import ProyectoCard from './ProyectoCard'

import waveTopSkills from '../assets/waves/waveTopSkills.png'


const proyectos = [
    
    {
        img: ipTracker,
        titulo: 'Ip Tracker',
        tags: [ {name: 'react', color: '#00D8FF'} , {name: 'redux', color: '#764ABC'}],
        link: 'https://github.com/jacofsky/ip-tracker'
    },
    {
        img: unSplash,
        titulo: 'Unsplash App',
        tags: [{name: 'node', color: '#539E43'}, {name: 'react', color: '#00D8FF'}],
        link: 'https://github.com/jacofsky/my-unsplash-app'

    },
    {
        img: tipCalculator,
        titulo: 'Tip calculator',
        tags: [{name: 'react', color: '#00D8FF'}, {name: 'redux', color: '#764ABC'}],
        link: 'https://github.com/jacofsky/FT-Tip-Calculator'

    },
    {
        img: todoApp,
        titulo: 'Todo app',
        tags: [{name: 'typescript', color: '#007ACC'}, {name: 'css', color: '#33A9DC'}],
        link: 'https://github.com/jacofsky/Todo-App'

    },
]

const Portafolio = () => {
  return (
    <div className='portafolioBg' id='portafolio' >
        <div className='portafolioContainer'>
            <div className="portafolioTittle">
                <h2>Portafolio</h2>

            </div>
            
            <div className='row'>
                {proyectos.map(proyecto => <ProyectoCard  source={proyecto.img} titulo={proyecto.titulo} tags={proyecto.tags} link={proyecto.link} />)}
            </div>

            <div className='portafolioButtonContainer'>
                <a className='portafolioButton' href='#' target='_blanck'>
                    Mas proyectos
                </a>
            </div>
        </div>

        <img className='waveBottomPortafolio' src={waveTopSkills} alt="Waves" loading='lazy' />
        
    </div>
  )
}

export default Portafolio