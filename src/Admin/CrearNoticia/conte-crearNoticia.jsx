
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'

import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { UploadOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button'

import { Select } from '../select'
import { TextArea } from '../textArea'
import { useForm, useNoticiasStore } from '../../hooks'
import Swal from 'sweetalert2'

const nuevaNoticias = {
  titulo: '',
  contenido: '',
}

export const CrearNoticia = () => {
    const navigate = useNavigate();
  
    const { titulo, contenido, onInputChange } = useForm(nuevaNoticias);

    const { startCreateNoticias, startUploadingImages } = useNoticiasStore();

    const [ urlImagen, setUrlimagen ] = useState('');

    let imagen = '';

    const volver = (e) => {
      e.preventDefault();
      navigate(`/noticias`)
    }
    
    const onFileInputChange  = async({ target }) =>{
      if( target.files === 0 ) return;
      setUrlimagen( await startUploadingImages( target.files ));  
    }
  
    const fileInputRef = useRef()
    
    const onSubmit = (e) => {
      e.preventDefault();

      if ( urlImagen === ''){
        return Swal.fire('Error al cargar imagen','Suba una imagen para el usario que va a crear', 'error')
      }else{
        imagen = urlImagen;
        if(titulo.trim() === '' || contenido.trim() ===''){
          Swal.fire('Error al crear la noticia','Diligencie los campos requeridos marcados con (*), estos son obligatorios', 'error')
        }
        startCreateNoticias({ titulo, imagen, contenido })
      }

    }

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
        
            <div className='Titulo'>
                <h3>
                Crea un nueva noticia
                </h3>
            </div>
            <form onSubmit={ onSubmit }>

              <div className='perfil'>
              <div className='datos-n'>
              <div className='compl'>
              <Input name="titulo" value={ titulo } onChange={ onInputChange } type="text" titulo="Titulo*" iddiv="titulo"/>
              
              <div className='btn-file-30'>
              
              <input
                type="file"
                accept="image/*"
                value={ imagen }
                onChange={  onFileInputChange }
                ref = { fileInputRef }
                style={{ display : 'none' }}
              />

              <button className='subir-noticia'                
                      onClick = { (e)=> {
                        e.preventDefault();
                        fileInputRef.current.click()}}
              >
                <UploadOutlined/> <h2>Subir imagen*</h2>
              </button>
              </div>
              </div>
                <TextArea name="contenido" value={ contenido } onChange={ onInputChange } type="file" titulo="Contenido*" />
              </div>
              </div>
            
              <div className='izquierda-btn'>
                <Button id="guardar-creacion" type="submit" >Guardar</Button>
                <Button id="cancelar-creacion" onClick={ volver }>Cancelar</Button>
              </div>
            </form>
            </div>
    </div>
  )
}
