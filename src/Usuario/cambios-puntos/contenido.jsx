import React from 'react'

import '../../styles/cambios-puntos/tarjeta.css'
import {CambiaPuntos} from '../cambios-puntos/cambiaPuntos'
import { NavBar2 } from '../../General/Usuario'

export function CambiaPuntosContenido() {

    return(
        <div className='DetallesP'>
        <NavBar2/>
        <CambiaPuntos/>
        
        </div>

    )}