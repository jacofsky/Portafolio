import React from 'react'


import { LinkedinBoxFill, GithubFill, TwitchFill, TwitterFill } from 'akar-icons'

const Contacto = () => {
  return (
    <div>
        <h2>Contacto</h2>
        <form>
          <input className='col-md-3 col-12' type='text' placeholder='Nombre' name='name' id='name' />
          <input className='col-md-9 col-12' type='email' placeholder='Email' name='email' id='email' />
         <textarea className='col-12' placeholder='Mensaje' name='mesagge' id='mesagge' cols='30' rows='10'></textarea>

          <input type='submit' value="Enviar mensaje" />
        </form>

        <div>
          <p>—o—</p>
        </div>
        <div>
          <LinkedinBoxFill className='col-3'/>
          <GithubFill className='col-3'/>
          <TwitchFill className='col-3'/>
          <TwitterFill className='col-3'/>
        </div>
    </div>
  )
}

export default Contacto