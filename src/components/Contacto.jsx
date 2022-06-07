import React from 'react'


import { LinkedinBoxFill, GithubFill, TwitchFill, TwitterFill } from 'akar-icons'

const Contacto = () => {
  return (
    <div className='contactoBg' >

      <div className='contactoTittle'>
        <h2>Contacto</h2>
      </div>

        <form className='contactoForm' action="https://formspree.io/f/xknyeglr" method="POST" target='_blank'>

          <div className='formDiv row d-flex justify-content-between'>
            <input className='col-md-3 col-12 form-input  my-2 my-md-0' type='text' placeholder='Nombre' name='name' id='name' required />
            <input className='col-md-8 col-12 form-input  my-2 my-md-0' type='email' placeholder='Email' name='email' id='email' required />
            
          </div>  
          <textarea className='col-12 form-input my-2' placeholder='Mensaje' name='message' id='message' cols='30' rows='10' required></textarea>

          <div className='contactoButtonContainer'>
            <button className='contactoButton' type='submit'>Enviar mensaje</button>
          </div>
        </form>

        <div className='divider'>
          <p>—o—</p>
        </div>
        <div className='redes row'>
          <a href="https://www.linkedin.com/in/valentin-jacofsky-127b9b210/" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <LinkedinBoxFill className='linkedin' size={80} color='white' />

          </a>
          <a href="https://github.com/jacofsky" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <GithubFill className='github' size={80} color='white'/>

          </a>

          <a href="https://www.twitch.tv/jacohouse" className='col-12 col-md-3 my-2 my-md-0' target="_blank">
            <TwitchFill className='twitch' size={80} color='white'/>

          </a>

          <a href="https://twitter.com/j4cofsky" className='col-12 col-md-3  my-2 my-md-0' target="_blank">
            <TwitterFill className='twitter' size={80} color='white'/>
          </a>

        </div>
    </div>
  )
}

export default Contacto