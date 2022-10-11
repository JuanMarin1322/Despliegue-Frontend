import { DestacadosJugadores } from './destacadosJugadores'
import { useSelector } from "react-redux"
import { useJugadoresStore } from '../../../hooks';
import { useEffect } from 'react';
export const JugadorDestacados=()=>{

  const { top5 } = useSelector( state => state.jugadores )
  const { startSettingTop5 } = useJugadoresStore();

  useEffect(() => {
      startSettingTop5();
  }, [])
    
    return(
        <div className='equipo-destacados'>
          <div className= 'cuadrado-destacado'>
            <h1>JUGADORES DESTACADOS</h1>
          </div>
            
            <div className='destaca'>
            {
              top5.map( jugador => (
                <DestacadosJugadores 
                  key={jugador.id}
                  nombre={jugador.nombre} 
                  puntos={jugador.puntos} 
                  imagen={jugador.imagenPerfil}/>

              ))
            }
             
            </div>
        </div>

            )}