import React from 'react'


import { LinkedinBoxFill, GithubFill, TwitchFill, TwitterFill } from 'akar-icons'

const Contacto = () => {
  return (
    <div className='contactoBg' >

      <div className='contactoTittle'>
        <h2>Contacto</h2>
      </div>

        <form className='contactoForm'>

          <div className='formDiv row d-flex justify-content-between'>
            <input className='col-md-3 col-12 form-input  my-2 my-md-0' type='text' placeholder='Nombre' name='name' id='name' />
            <input className='col-md-8 col-12 form-input  my-2 my-md-0' type='email' placeholder='Email' name='email' id='email' />
            
          </div>  
          <textarea className='col-12 form-input my-2' placeholder='Mensaje' name='mesagge' id='mesagge' cols='30' rows='10'></textarea>

          <div className='contactoButtonContainer'>
            <button className='contactoButton' type='submit'>Enviar mensaje</button>
          </div>
        </form>

        <div className='divider'>
          <p>—o—</p>
        </div>
        <div className='redes row'>
          <a href="" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <LinkedinBoxFill className='linkedin' size={80} color='white' />

          </a>
          <a href="http://" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <GithubFill className='github' size={80} color='white'/>

          </a>

          <a href="http://" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <TwitchFill className='twitch' size={80} color='white'/>

          </a>

          <a href="http://" className='col-12 col-md-3  my-2 my-md-0' target="_blank">
            <TwitterFill className='twitter' size={80} color='white'/>
          </a>

        </div>
    </div>
  )
}

export default Contacto