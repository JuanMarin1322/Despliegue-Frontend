import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useJugadoresStore, useProductosStore } from '../../hooks';
import '../../styles/detalles-cp/contenido.css'
import { useNavigate } from 'react-router-dom';

export function ContenidoCP() {
    const params = useParams();

    const navigate = useNavigate();
    function redireccion(e){ 
        e.preventDefault();
        navigate(`/cambiaPuntos/`)
    }

    const { user } = useSelector( state => state.auth );
    const { jugadores } = useSelector( state => state.jugadores );
    const { productos } = useSelector( state => state.producto );
    const { startLoadingProductos } = useProductosStore();
    const { startClaimProducto, startListJugadores } = useJugadoresStore();
    
    const producto = useMemo(() => productos.find( product => product.id === parseInt(params.id))) 
    const jugadorActual = jugadores.find(jugador => jugador.id === user.id)

    const onSubmit = (e) => {
        e.preventDefault();

        const idUsuario = jugadorActual.id;
        const idProducto = parseInt(params.id)
        const puntos = jugadorActual.subtotal;
        const precio = producto.precio;
        const unidades = producto.unidades;

        startClaimProducto({idUsuario, idProducto, puntos, precio, unidades})
    }
    
    useEffect(() => {
        startLoadingProductos();
    },[])

    useEffect(() => {
        startListJugadores();
    },[])
    
    return(
        <div className='contenidoCP'>
        <div className='contenidosCP'>
        <div className='TextoCP'>
        <h1 className='titulo'>Información detallada</h1>
        <form onSubmit={ onSubmit }>

            <div className='container-h'>
                <div className='container-imagen'>
                    <img className='imagen-cuadrado' src={producto?.imagen}></img>
                </div>
                <div className='container-texto'>
                    <div className='text-inicio'>
                    <h1 className='titulocp'>{producto?.nombre}</h1>
                    <h1 className="valortt">{producto?.precio} Pt</h1>
                    <h2 className='text-plano'>{producto?.descripcion}</h2>
                    </div>
                    <div className='btn-cp'>
                    <button type="button" className="btn-cp-cancelar" onClick={redireccion}>Cancelar</button>
                    <button type="submit" className="btn-cp-reclamo">Reclamar</button>
                    </div>
                </div>

            </div>
        </form>
        </div>
        </div>
        </div>
    )

}