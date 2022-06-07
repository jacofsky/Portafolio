import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import {TextAlignJustified} from 'akar-icons'

const NavBar = () => {

    const [open, setOpen] = useState(false)
    
    return (
        <nav class="navbar fixed-top navbar-expand-md">
            <div class="container-fluid justify-content-end">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
                    <TextAlignJustified strokeWidth={2} size={36} color='#0ACF83' />
                </button>
                <div class={` ${(open) ? 'justify-content-end navbar-collapse' : 'collapse justify-content-end navbar-collapse'  } + `} id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#portafolio">Portafolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#certificados">Certificados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#contacto">Contacto</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar