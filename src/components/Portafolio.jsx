import React from 'react'

import tipCalculator from '../assets/imgs/tipCalculator.png'
import ipTracker from '../assets/imgs/ipTracker.png'
import todoApp from '../assets/imgs/todoApp.png'
import unSplash from '../assets/imgs/unSplash.png'
import ProyectoCard from './ProyectoCard'

const proyectos = [
    
    {
        img: ipTracker,
        titulo: 'Ip Tracker',
        tags: [ {name: 'react', color: '#00D8FF'} , {name: 'redux', color: '#764ABC'}]
    },
    {
        img: unSplash,
        titulo: 'Unsplash App',
        tags: [{name: 'node', color: '#539E43'}, {name: 'react', color: '#00D8FF'}],
    },
    {
        img: tipCalculator,
        titulo: 'Tip calculator',
        tags: [{name: 'react', color: '#00D8FF'}, {name: 'redux', color: '#764ABC'}],
    },
    {
        img: todoApp,
        titulo: 'Todo app',
        tags: [{name: 'typescript', color: '#007ACC'}, {name: 'css', color: '#33A9DC'}],
    },
]

const Portafolio = () => {
  return (
    <div className='portafolioBg'>
        <div className='portafolioContainer'>
            <div className="portafolioTittle">
                <h2>Portafolio</h2>

            </div>
            
            <div className='row'>
                {proyectos.map(proyecto => <ProyectoCard  source={proyecto.img} titulo={proyecto.titulo} tags={proyecto.tags} />)}
            </div>

            <button>Mas proyectos</button>
        </div>
        
    </div>
  )
}

export default Portafolio