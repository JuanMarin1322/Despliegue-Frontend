import React from 'react'
import { NavBar } from '../../General/Usuario'
import { Banner } from '../'
import {JugadorDestacados} from '../'
import { EquipoDestacados } from '../'
import '../../styles/home/Home.css'
import { TablaPuntos } from '../'
import { Noticias } from './Noticias'


export const Home = () => {
  return (
    <div className='Home'>
      <NavBar/>
      <Banner/>
      <EquipoDestacados/>
      <div className='separador'></div>
      <JugadorDestacados/>
      <section className='bot'>
        <div className='cont-bot'>
          <TablaPuntos/>
          <Noticias/>
        </div>
      </section>

    </div>
  )
}

