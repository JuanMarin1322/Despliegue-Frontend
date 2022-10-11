
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams} from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'

import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { UploadOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { Select } from '../select'
import { IconButton } from '@mui/material'
import { useForm, useJugadoresStore } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2";



export const EditarUsuario = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { startListJugadores, startUpdateUsuario } = useJugadoresStore();
    const { jugadores } = useSelector( state => state.jugadores );
    const jugadorActual = jugadores.find(jugador => jugador.id === parseInt(params.id));
    const { id, correo, onInputChange } = useForm(jugadorActual)
    const [pass,setPass] = useState();
    const [password,setPassword] = useState();
    

    const volver = (e) => {
      e.preventDefault();
      navigate(`/usuarios`)
    }

    const onPassChange = ({ target }) => {
      setPass(target.value)
    }
    const onPasswordChange = ({ target }) => {
      setPassword(target.value)
    }

    const onSubmit = (e) => {
      e.preventDefault();
      if( correo.trim() === '' ) {
        Swal.fire('Error al actualizar','El correo es requerido si lo va a cambiar', 'error')
      }else{
        startUpdateUsuario({ id, correo })
      }
    }
  
    useEffect(() => {
      startListJugadores();
    },[])

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
            <form onSubmit={ onSubmit }>
        
            <div className='Titulo'>
                <h3>
                Editar usuario
                </h3>
            </div>

            <div className='perfil'>
            <div className='subir-foto'>
            <img src={ jugadorActual?.imagenPerfil } alt="Imagen del usuario " className='foto'/>
            
            
            </div>
            <div className='datos-p'>
            <Input type="text" name="nombre" value={ jugadorActual?.nombre } onChange={ ()=>{} } titulo="Nombre completo"/>
            <div className='datos-p-hori'>
            <Input type="text" name="equipo" value={ jugadorActual?.equipo } onChange={ () => {}} titulo="Equipo" iddiv="incorreo"/>
            <Input type="email" name="correo" value={ correo } onChange={ onInputChange } titulo="Correo electrónico" iddiv="incorreo"/>
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
