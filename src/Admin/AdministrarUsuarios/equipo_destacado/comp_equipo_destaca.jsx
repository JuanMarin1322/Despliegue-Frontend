import { useEffect } from 'react';
import { useSelector } from "react-redux"
import { useEquiposStore } from '../../../hooks';
import { Destacados } from './destacados'
export const EditPEquipo=()=>{

  const { equipos } = useSelector( state => state.equipos )
  const { startSettingTopEquipos } = useEquiposStore();

  useEffect(() => {
    startSettingTopEquipos();
  }, [])

    return(
        <div className='equipo-destacados'>
          
            
            <div className='destaca'>

            { equipos.map((equipo) => (
               <Destacados 
                key={equipo.id}
                nombre={equipo.nombre} 
                puntos={equipo.puntos} 
                imagen={equipo.imagen} 
                color={equipo.color}/>

              ))}
         

            </div>
        </div>
)}