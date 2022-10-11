import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/home/Banner.css'


export  function Banner() {

    const {user} = useSelector(state=>state.auth);


  return (
    <div className='banner'>
            <div className='TextoBanner'>
                <div className='Titulo1'>
                    <h1>¡Somos un <br></br>equipo Ganador!</h1>
                </div>
                <div className='Titulo2'>
                    <h4>COPA AFCALI <br></br> FY23</h4>
                </div>
                <div className='Titulo3'>
                    <h3>¡JUNTOS NADA ES IMPOSIBLE!</h3>
                </div>

                <div className='viveLaCopa'>
                    <p>VIVE LA COPA</p>
                </div>
            </div>
            <div className='dataUser'>
                <label id='userName'>Hola, {user.nombre}</label>
                
            </div>
    </div>
  )
}
