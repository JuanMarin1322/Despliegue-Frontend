import React from 'react'

import "../../styles/home/Admin/tarjetas.css";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useNavigate } from 'react-router-dom';
export  function TarjetaNoticiaAdmin() {
  const navigate = useNavigate();
  function noticia(e){ 
    e.preventDefault();
    navigate(`/noticias`)
  }
 
  return (
    <div className='tarjeta-admin' onClick={noticia}>
    <div className='titulo-tarjeta'>
    <h1 className='text-tarjeta'>Noticias</h1>
    </div>
    <div className='conte-tarjetaAdmin'>
        <div className='imag'>
        <NewspaperIcon sx={{ fontSize: 40 }}
        style={{
                height: '100%',
                width: '100%'
              }}/>
        </div>
        <h2 className='h2-tarj-admin'>Administra las noticias</h2>
    
    </div>
        
           
    </div>
  )
}
