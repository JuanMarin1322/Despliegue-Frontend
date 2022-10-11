import React from 'react'

import "../../styles/home/Admin/tarjetas.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
export  function TarjetaUsuarioAdmin() {
  const navigate = useNavigate();
  function usuario(e){ 
    e.preventDefault();
    navigate(`/usuarios`)
}
  return (
    
   
    <div className='tarjeta-admin' onClick={usuario}>
    <div className='titulo-tarjeta'>
    <h1 className='text-tarjeta'>Usuario</h1>
    </div>
    <div className='conte-tarjetaAdmin'>
        <div className='imag'>
        <AccountCircleIcon sx={{ fontSize: 40 }}
          style={{
                height: '100%',
                width: '100%'
              }}/>
     
        </div>
        <h2 className='h2-tarj-admin'>Administra los usuarios del sistema</h2>
    
    </div>
        
           
    </div>
  
    
  )
}
