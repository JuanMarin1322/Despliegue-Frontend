import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import '../../styles/AsigPuntos/AsigPuntos.css'
import { useNavigate } from 'react-router-dom';
import { TablaNoticias } from './TablaNoticias';


export const AdminNoticias = () => {
    const navigate = useNavigate();
    const redi = () => {
        return <Navigate to='/usuarios'/>
    }
    function crearNoticia(e){ 
        e.preventDefault();
        navigate(`/crear-noticia`)
    }

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
            
            <div className='Titulo'>
                <h3>
                    Administra las Noticias
                </h3>
            </div>
            <div className='izquierda'>
            <button className='boton-crear' onClick={crearNoticia}>
            <div className='boton-mas'>
            <div className='mas'></div>
            <h1 className='mas-letra'>Crea una nueva Noticia</h1>
            </div>

            </button>
            </div>
            <div className='TablaColaboradoresCrud'>
                <TablaNoticias/>
            </div>
        </div>
    </div>
  )
}
