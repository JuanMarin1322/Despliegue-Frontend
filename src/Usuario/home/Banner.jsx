import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useJugadoresStore } from '../../hooks';
import '../../styles/home/Banner.css'


export  function Banner() {

    const { user } = useSelector(state=>state.auth);
    const { jugadores } = useSelector(state => state.jugadores)

    const jugadorActual = jugadores.find(jugador => jugador.id === user.id)

    const { startListJugadores } = useJugadoresStore();

    useEffect(() => {
        startListJugadores()
    },[])

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
                <label id='userName'>{jugadorActual?.nombre}</label>
                <label id='userPoint'> {jugadorActual?.subtotal} Pt</label>
            </div>
    </div>
  )
}
