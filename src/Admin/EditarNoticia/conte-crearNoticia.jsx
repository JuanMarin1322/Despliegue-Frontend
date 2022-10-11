
import { useEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'

import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { UploadOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button'

import { Select } from '../select'
import { TextArea } from '../textArea'
import { useForm, useNoticiasStore } from '../../hooks'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const EditarNoticia = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { noticias } = useSelector(state => state.noticias);

  const { startListNoticias, starteUpdateNoticia } = useNoticiasStore();

  const noticiaActual = noticias.find(noticia => noticia.id === parseInt(params.id));

  const { titulo, contenido, onInputChange } = useForm(noticiaActual)

  const volver = (e) => {
    e.preventDefault();
    navigate(`/noticias`)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const id = noticiaActual.id;
    if( titulo.trim() === '' || contenido.trim() === ''){
      Swal.fire(
        'Error',
        'No puede enviar el contenido o el titulo en blanco',
        'error'
      )
    }else{
      starteUpdateNoticia({ id, titulo, contenido })
    }
  }

  useEffect(() => {
    startListNoticias();
  }, [])

  return (
    <div className='AsigPuntos'>
      <NavBar2Admin />
      <div className='contenedor-asigpuntos'>

        <div className='Título'>
          <h3>
            Editar noticia
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className='perfil'>

            <div className='datos-n'>
              <div className='compl'>
                <Input name='titulo' value={titulo} onChange={onInputChange} type="text" titulo="Titulo*" iddiv="tituloE" />


              </div>

              <TextArea name='contenido' value={contenido} onChange={onInputChange} type="file" titulo="Contenido*" />
            </div>
          </div>



          <div className='izquierda-btn'>
            <Button id="guardar-creacion" type="submit" >Guardar</Button>
            <Button id="cancelar-creacion" onClick={volver}>Cancelar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
