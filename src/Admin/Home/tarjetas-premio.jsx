import React from 'react'

import "../../styles/home/Admin/tarjetas.css";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useNavigate } from 'react-router-dom';
export  function TarjetaPremioAdmin() {
  const navigate = useNavigate();
  function premio(e){ 
    e.preventDefault();
    navigate(`/premios`)
}
 
  return (
    <div className='tarjeta-admin' onClick={premio}>
    <div className='titulo-tarjeta'>
    <h1 className='text-tarjeta'>Premios</h1>
    </div>
    <div className='conte-tarjetaAdmin'>
        <div className='imag'>
        <CardGiftcardIcon sx={{ fontSize: 40 }}
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
