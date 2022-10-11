import React from 'react'

import '../../styles/cambios-puntos/tarjeta.css'
import {ContenidoNoticia} from '../Noticia/contenido-noticia'
import { NavBar2 } from '../../General/Usuario'

export function Noticia() {

    return(
        <div className='DetallesP'>
        <NavBar2/>
        <ContenidoNoticia/>
        
        </div>

    )}