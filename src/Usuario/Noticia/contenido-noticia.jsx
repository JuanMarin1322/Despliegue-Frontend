import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useNoticiasStore } from '../../hooks';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../../styles/Noticias/noticias.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export function ContenidoNoticia() {

    const params = useParams();

    const { startLoadingNoticias } = useNoticiasStore();

    const { noticias } = useSelector(state => state.noticias);

    const noticia = noticias.find(noticia => noticia.id === parseInt(params.id))
    const navigate = useNavigate();
    function regresar(e) {
        e.preventDefault();
        navigate(`/`)


    }

    useEffect(() => {
        startLoadingNoticias()
    }, [])

    return (
        <div className='contenidosP'>
            <div className='TextoP'>
                <h1 className='tituloPN'>{noticia?.titulo}</h1>
            </div>
            <div className='contereg'>
            <Button id='regresarIni' onClick={regresar}><ArrowCircleLeftIcon />Regresar</Button>
            </div>
            
            <div className='container-noticias'>
            
                <div className='contenedor-noticia-img' >
                    <img alt='imagen noticia' hidden={(noticia?.imagen === undefined) ? true : false} src={noticia?.imagen} />
                </div>
                <div className='contenedor-noticia'>
                    <div className='boton-noticia'>
                        
                    </div>
                    <h2>{noticia?.contenido}</h2>
                </div>

            </div>




        </div>
    )
}