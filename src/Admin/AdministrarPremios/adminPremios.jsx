import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import '../../styles/AsigPuntos/AsigPuntos.css'
import { useNavigate } from 'react-router-dom';
import { TablaPremios } from './TablaPremios';


export const AdminPremios = () => {
    const navigate = useNavigate();
    const redi = () => {
        return <Navigate to='/usuarios'/>
    }
    function crearProducto(e){ 
        e.preventDefault();
        navigate(`/crear-premio`)
    }

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
            
            <div className='Titulo'>
                <h3>
                    Administra los premios
                </h3>
            </div>
            <div className='izquierda'>
            <button className='boton-crear' onClick={crearProducto}>
            <div className='boton-mas'>
            <div className='mas'></div>
            <h1 className='mas-letra'>Crea un nuevo premio</h1>
            </div>

            </button>
            </div>
            <div className='TablaColaboradoresCrud'>
            <TablaPremios/>
            </div>
        </div>
    </div>
  )
}
