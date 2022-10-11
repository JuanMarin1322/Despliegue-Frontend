import React from 'react'
import { NavBar2 } from '../../General/Usuario'
import { ContenidoCP } from './contenido'
import '../../styles/detalles-cp/detallesCamPuntos.css'
export function DetallesCP() {

    return(
        <div className='DetallesCP'>
        <NavBar2/>
        <ContenidoCP/>

       
        </div>

    )

}