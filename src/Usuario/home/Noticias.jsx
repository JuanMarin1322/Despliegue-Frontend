import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from '@mui/material/Button'
import '../../styles/home/Noticias.css'
import { useNoticiasStore } from '../../hooks'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Noticias() {

  const { startLoadingNoticias } = useNoticiasStore();

  const { noticias } = useSelector( state => state.noticias );

  const navigate = useNavigate();

  const redireccion = (id) => (e) => {
    e.preventDefault();
    navigate(`/noticia/${id}`)
  }

  useEffect(() => {
    startLoadingNoticias()
  },[])

  return (
    <div className='CajonNoticia'>
        <h3>¿QUÉ ESTA PASANDO?</h3>
       
        
    <Accordion className='Acordion' defaultActiveKey="0">


      { noticias.map( noticia => (
          <Accordion.Item className='item' key={ noticia.id } eventKey={ noticia.id }>
            
            <Accordion.Header className='title' >
              
              { noticia.titulo }
            </Accordion.Header>
              <Accordion.Body>
              <div className='body-acordeon'>
             
                <div className='textonoticia-pre'>
                  { noticia.contenido }
                </div>
                <div className='boton-noticia'>
                  <Button variant="contained" onClick={ redireccion(noticia.id) }>Ver mas</Button>
                </div>
                
              </div>
              </Accordion.Body>
          </Accordion.Item>
        )
      )}
    </Accordion>
    </div>
  );
}



