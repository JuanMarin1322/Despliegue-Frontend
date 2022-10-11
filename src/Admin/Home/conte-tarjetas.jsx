import React from 'react'

import "../../styles/home/Admin/tarjetas.css";
import { TarjetaNoticiaAdmin } from './tarjetas-noticia';
import { TarjetaPremioAdmin } from './tarjetas-premio';
import {TarjetaUsuarioAdmin} from "./tarjetas-usuario"

export  function ConteTarjetaAdmin() {

 
  return (
    <div className='conte-tarjeta-admin'>
    <TarjetaUsuarioAdmin/>
    <TarjetaNoticiaAdmin/>
    <TarjetaPremioAdmin/>
    
           
    </div>
  )
}
