import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { TablaColaboradores } from './TablaColaboradores'
import '../../styles/AsigPuntos/AsigPuntos.css'
import { TablaUsuarios } from './TablaUsuarios'
import { useNavigate } from 'react-router-dom';
import { EditPEquipo } from './equipo_destacado/comp_equipo_destaca'
import { TablaEquipos } from './TablaEquipos'
export function AdminUsuarios() {
    const navigate = useNavigate();
    const redi = () => {
        return <Navigate to='/usuarios'/>
    }
    function crearUser(e){ 
        e.preventDefault();
        navigate(`/crear-usuario`)
    }

    function editPuntosUser(e){ 
        e.preventDefault();
        navigate(`/editar-puntos-usuario`)
    }
    function editPuntosEquipo(e){ 
        e.preventDefault();
        navigate(`/editar-puntos-equipo`)
    }

    useEffect(() => {
        redi()
    },[])

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
            
            <div className='Titulo'>
                <h3>
                    Administra los usuarios
                </h3>
            </div>
            <div className='izquierda'>
            <button className='boton-crear' onClick={ crearUser }>
            <div className='boton-mas'>
            <div className='mas'></div>
            <h1 className='mas-letra'>Crea un nuevo usuario</h1>
            </div>

            </button>
            </div>
            <div className='TablaColaboradoresCrud'>
            <TablaUsuarios/>

                
            </div>

            <div className='Titulo'>
                <h3>
                    Editar puntos por usuario
                </h3>
            </div>
            
            
            <div className='TablaColaboradoresCrud'>
            <TablaColaboradores/>
            </div>
        

        <div className='Titulo'>
                <h3>
                    Editar puntos por equipo
                </h3>
            </div>
            
            <div className='TablaColaboradoresCrud'>
            <TablaEquipos/>
          
           
          
        </div>
        
    </div>
    </div>
  )
}
