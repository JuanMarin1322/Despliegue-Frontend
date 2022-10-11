
import '../../styles/cambios-puntos/tarjeta.css'
import { useNavigate } from 'react-router-dom';

export function TarjetaTienda({producto}) {

    const navigate = useNavigate();

    function redireccion(e){ 
        e.preventDefault();
        navigate(`/detallesCP/${producto.id}`)
    }

    return(
    
            <div className='tarjeta-t'>
            <button className='imagen-tienda' href = "/detallesCP" onClick={redireccion}>
            <img className='imagen-cuadrado-tienda' src={producto.imagen}></img>
            <h1 className='TituloTT'>{producto.nombre}</h1>
            <h2 className='ValorTT'>{producto.precio} </h2>
            <h2 className='Puntos'>Puntos</h2>


            </button>
            </div>



     
    )
}