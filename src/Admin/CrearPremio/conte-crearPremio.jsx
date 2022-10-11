
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'
import { UploadOutlined } from '@mui/icons-material'
import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import Button from '@mui/material/Button'
import { Select } from '../select'
import { TextArea } from '../textArea'
import Swal from 'sweetalert2'
import { useForm, useProductosStore } from '../../hooks'

const nuevoPremio = {
  nombre: '',
  descripcion: '',
  precio: '',
}

export const CrearPremio = () => {
    const navigate = useNavigate();
    const { nombre, descripcion, precio, onInputChange } = useForm(nuevoPremio);
    const { startUploadingPremiosImages, startCreatingNewPremio } = useProductosStore();
    const [ urlImagen, setUrlimagen ] = useState('');

    let imagen = '';

    const volver = (e) => {
      e.preventDefault();
      navigate(`/noticias`)
    }
    
    const onFileInputChange  = async({ target }) =>{
      if( target.files === 0 ) return;
      setUrlimagen( await startUploadingPremiosImages( target.files ));  
    }

    const fileInputRef = useRef()

    const onSubmit = (e) => {
      e.preventDefault();
      imagen = urlImagen;
      let numPrecio = parseInt(precio);
      if ( urlImagen === ''){
        return Swal.fire('Error al cargar imagen','Suba una imagen para el usario que va a crear', 'error')
      }else{
      if(nombre.trim() === ''||descripcion.trim() === ''||precio.trim() === ''){
        Swal.fire({text:'Ingrese todos los campos obligatorios', icon:'warning'})
      }else{
        if(numPrecio<0){
          Swal.fire({text:'Ingrese un precio valido, es decir, mayor a 0', icon:'warning'})
  
        }else{
          
          startCreatingNewPremio({nombre, precio: numPrecio, descripcion, imagen});   
          Swal.fire('Creacion exitosa','Se ha creado correctamente el premio','success');
          navigate('/premios') 
  
        }
      }
    }

      
   

    }

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
        
            <div className='Titulo'>
                <h3>
                Crea un nuevo producto
                </h3>
            </div>
            <form onSubmit={onSubmit}>
            <div className='perfil'>

            <div className='datos-n'>
            <div className='compl'>
            <Input type="text" titulo="Nombre*" name="nombre" value={nombre} onChange={onInputChange} iddiv="titulo"/>
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
                fileInputRef.current.click()} }
            >
              <UploadOutlined/> <h2>Subir imagen*</h2>
            </button>
            </div>
            </div>

            <TextArea type="file" titulo="Descripcion*" name="descripcion" value={descripcion} onChange={onInputChange} />
            <div className='datos-p-hori'>
            
            <Input type="number" titulo="Precio*" name="precio" value={precio} onChange={onInputChange} iddiv="precio"/>
            </div>
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
