import React from 'react'

const ProyectoCard = ({source, titulo, tags}) => {

    console.log(source);
  return (
    <div className='col-md-6 col-12 portafolioCard' style={{backgroundImage: `url(${source})`}}>

      <div className='proyectoContainer'>
        <div className='infoProyecto'>
          <h3>{titulo}</h3>
          
          <div className='tags'>
            {tags.map(tag => <div style={{backgroundColor: `${tag.color}`}}><p>{tag.name}</p></div>)}
          </div>

          <div className='linksPortafolio'>
            <a href="">Sitio</a>
            <a href="">Codigo</a>
          </div>


        </div>

      </div>
      
      
    </div>
  )
}

export default ProyectoCard