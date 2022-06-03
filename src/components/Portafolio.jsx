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
        tags: [ {name: 'react', color: '#FFFFFF'} , {name: 'redux', color: '#FFFFFF'}],
    },
    {
        img: unSplash,
        titulo: 'Unsplash App',
        tags: [{name: 'node', color: '#FFFFFF'}, {name: 'react', color: '#FFFFFF'}],
    },
    {
        img: tipCalculator,
        titulo: 'Tip calculator',
        tags: [{name: 'react', color: '#FFFFFF'}, {name: 'redux', color: '#FFFFFF'}],
    },
    {
        img: todoApp,
        titulo: 'Todo app',
        tags: [{name: 'typescript', color: '#FFFFFF'}, {name: 'css', color: '#FFFFFF'}],
    },
]

const Portafolio = () => {
  return (
    <div>
        <div>
            <h2>Portafolio</h2>
            
            <div>
                {proyectos.map(proyecto => <ProyectoCard  source={proyecto.img} titulo={proyecto.titulo} tags={proyecto.tags} />)}
            </div>

            <button>Mas proyectos</button>
        </div>
        
    </div>
  )
}

export default Portafolio