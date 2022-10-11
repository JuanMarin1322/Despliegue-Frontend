
import React, { useEffect } from 'react'
import { useProductosStore } from '../../hooks'
import { useSelector } from 'react-redux'
import '../../styles/cambios-puntos/tarjeta.css'
import {TarjetaTienda} from '../'

export function CambiaPuntos() {
    
    const { productos } = useSelector( state => state.producto );
    const { startLoadingProductos } = useProductosStore();
    useEffect(() => {
        startLoadingProductos();
    },[])
   
    return(
        
        <div className='contenidosP'>
            <div className='TextoP'>
                <h1 className='tituloP'>Cambia tus puntos</h1>
                
            </div>
            <div className='container-productos'>
                {productos.map((producto)=> (
                            <TarjetaTienda
                                key={ producto.id }
                                producto={ producto }                         
                            />
                ))}
            </div>     
        </div>

    )

}