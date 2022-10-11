
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'

import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { UploadOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { Select } from '../select'
import { IconButton } from '@mui/material'
import { useForm, useJugadoresStore } from '../../hooks'
import { useDispatch } from 'react-redux'
import Swal from "sweetalert2";
import { InputPassw } from '../inputPassw'

const NuevoUsuario = {
  nombrex: '',
  correo: '',
  password: '',
  equipo: '',
}

export const CrearUsuario = () => {
  const navigate = useNavigate();

    const { nombrex, correo, password, equipo, onInputChange } = useForm(NuevoUsuario); 
    const { startCreatingNewUser, startUploadingImages } = useJugadoresStore();
    const [ urlImagen, setUrlimagen ] = useState('');

    let imagen

    const volver = (e) => {
      e.preventDefault();
      navigate(`/usuarios`)
    }

    const onFileInputChange  = async({ target }) =>{
        if( target.files === 0 ) return;
        setUrlimagen( await startUploadingImages( target.files ));
      }

    const onSubmit = (e) => {
      e.preventDefault();
      let nombre = nombrex.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 
      if( equipo === 0 || equipo === "" ){
      
        Swal.fire('Seleccione un equipo','Seleccione un equipo', 'error')
      
      }else{

        if ( urlImagen === ''){
          return Swal.fire('Error al cargar imagen','Suba una imagen para el usuario que se creara', 'error')
        
        }else{
          if( nombre.trim() === '' || correo.trim() === '' || password.trim() === '' || equipo.trim() === ''){
            Swal.fire('Error al crear el usuario','Diligencie todos los campos, estos son obligatorios', 'error')
          }else{
            imagen = urlImagen;
            if(password.length<8){
              Swal.fire('Error al crear el usuario','Ingrese una contraseña mayor a 8 caracteres', 'error')
            }
            startCreatingNewUser({nombre, correo, password, imagen, equipo})
          }
        }
      }

    }

      const fileInputRef = useRef()

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
            <form onSubmit={ onSubmit }>
        
            <div className='Título'>
                <h3>
                Crea un nuevo usuario
                </h3>
            </div>

           
            
            <div className='datos-p-cr'>
            <div className='datos-p-hori'>
            <Input type="text" iddiv="incorreo" name="nombrex" value={ nombrex } onChange={ onInputChange } id="equipo-select-1" titulo="Nombre completo*"/>
            <Select type="text"  titulo="Equipo*" name="equipo" value={ equipo } onChange={ onInputChange } id="equipo-select-2" iddiv="incorreo"/>
            
            
            

            </div>
            <div className='datos-p-hori'>
            
            <Input type="email" name="correo" value={ correo } onChange={ onInputChange } titulo="Correo electronico*" id="equipo-select-3" iddiv="incorreo"/>
            <InputPassw name="password" value = { password } onChange={ onInputChange} titulo="Contraseña*" id="equipo-select-4" iddiv="incorreo" />
            
            </div>
           
            </div>
            <div className='datos-p-hori'>
            <div className="form-group" id="incorreo"></div>
            <div className="form-group" id="incorreo">
            <div className='subir-foto'>
            
            <input
              type="file"
              accept="image/*"
              onChange={  onFileInputChange }
              value={ imagen }
              ref = { fileInputRef }
              style={{ display : 'none' }}
            />

            <button className='subir'
              onClick = { (e)=> {
                e.preventDefault();
                fileInputRef.current.click()
                }}
            >
              <UploadOutlined/> <h2>Subir imagen de perfil*</h2>
            </button>
            </div>
           
            </div>
           
            </div>
            
     
            

            <div className='izquierda-btn'>
            <Button id="guardar-creacion" type="submit">Guardar</Button>
            <Button id="cancelar-creacion" onClick={ volver }>Cancelar</Button>
            </div>
            </form>
            </div>
    </div>
  )
}
