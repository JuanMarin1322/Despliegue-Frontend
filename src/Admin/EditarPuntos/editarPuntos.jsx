
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'
import Swal from 'sweetalert2'
import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button'
import { Label } from '../label'
import { useJugadoresStore } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'

import { InputPuntos } from './input-puntos'

import { SelectCategoria } from '../selectCategoria'
import { SelectNCategoria } from '../selectNuevCategoria'

export const EditarPuntos = () => {
    const navigate = useNavigate();
  
    const params = useParams();

    const dispatch = useDispatch();

    const { startListJugadores, startUpdatePuntosJugador } = useJugadoresStore();
    
    const { jugadores } = useSelector( state => state.jugadores );
    
    const jugadorActual = jugadores.find(jugador => jugador.id === parseInt(params.id));

    const [ categoria, setCategoria ] = useState();
    
    const volver = (e) => {
        e.preventDefault();
        navigate('/usuarios')
    }

    const onUpdate = async(e) => {
        e.preventDefault();
        const id=jugadorActual?.id;
        const nombrej=jugadorActual?.nombre;
        const correoj=jugadorActual?.correo;
        const nombreCategoria = document.getElementById('categoria').value;
        const cantidadCategoria=document.getElementById('ids').value;

        if( cantidadCategoria < 0 ){
            Swal.fire(
                'Error',
                'No puede enviar unidades negativas',
                'error'
              )
        }else{

            await startUpdatePuntosJugador({id,nombreCategoria, cantidadCategoria, nombrej, correoj });
            Swal.fire(
                'Se han modificado los puntos con exito!',
                'Presione para continuar!',
                'success'
              )
    
              navigate('/usuarios')

        }

        
        
    }

    const onCategoriasChange = ({target}) => {
        setCategoria(target.value);
    }

    useEffect(() => {
      startListJugadores()
    },[])
    
    
  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
        
            <div className='Titulo'>
                <h3>
                Editar puntos del jugador
                </h3>
            </div>
            <form onSubmit={ onUpdate } >

                <div className='perfil'>
                    <img src={ jugadorActual?.imagenPerfil } className='foto'/>
                    <div className='datos-p'>
                        <Label type="text" conte={ jugadorActual?.nombre } titulo="Nombre completo"/>
                        <Label type="text" conte={ jugadorActual?.equipo } titulo="Equipo"/>
                        <div className='puntos-select'>
                            <SelectNCategoria id="categoria" type="text" conte="Calidad" onChange={ onCategoriasChange } titulo="Seleccione la categoría"/>
                                <div className='conte-inputn'>
                                <InputPuntos categoria={categoria} jugadorActual={jugadorActual}/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='izquierda-btn'>
                    <Button id="guardar-creacion" type='submit' >Guardar</Button>
                    <Button id="cancelar-creacion" onClick={ volver }>Cancelar</Button>
                </div>
            </form>
            </div>
    </div>
  )
}
