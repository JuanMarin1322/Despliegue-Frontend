
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { NavBar2Admin } from '../../General/Admin'
import { Input } from '../input'

import '../../styles/AsigPuntos/AsigPuntos.css'
import '../../styles/crearUsuario.css'
import { useNavigate } from 'react-router-dom';
import { InputPuntos } from './input-puntos'

import Button from '@mui/material/Button'
import { Label } from '../label'
import { SelectCategoria } from '../selectCategoria'
import { SelectNCategoria } from '../selectNuevCategoria'
import Swal from 'sweetalert2'
import { useEquiposStore } from '../../hooks'
import { useSelector } from 'react-redux'

export const EditarPuntosEquipo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { startUpdatePuntosPorEquipos, startSettingEquipos } = useEquiposStore();
  const { equipos } = useSelector( state => state.equipos );
  const equipoActual = equipos.find(equipo => equipo.id === parseInt(params.id));
  const [ categoria, setCategoria ] = useState();
  
  const onCategoriasChange = ({target}) => {
    setCategoria(target.value);
   }

   const onSubmit = (e) => {
    e.preventDefault();

    const idEquipo = parseInt(params.id);
    const cantidad = parseInt(document.getElementById('ids').value);

    if(categoria === undefined || categoria === '0') {
        Swal.fire('Error en la seleccion de categoria','Seleccione una categoria.','error')
    }else{
      if(cantidad <= 0){
        Swal.fire({title:'Ingrese una cantidad valida',text:'La cantidad ingresada debe ser mayor a 0',icon:'error'})
      }else{
        startUpdatePuntosPorEquipos({ idEquipo, categoria, cantidad })
      }
        
    }
   }

   const volver = (e) => {
    e.preventDefault();
    navigate('/usuarios')
   }

   useEffect(() => {
    startSettingEquipos();
   }, [])
   

  return (
    <div className='AsigPuntos'>
        <NavBar2Admin/>
        <div className='contenedor-asigpuntos'>
        
            <div className='Titulo'>
                <h3>
                Editar puntos del equipo
                </h3>
            </div>
            <form onSubmit={ onSubmit }>
            <div className='perfil'>

            <img src='.\images\Ellipse 6.png' className='foto'/>
            <div className='datos-p'>
            <Label type="text" conte={ equipoActual?.nombre } titulo="Nombre del equipo"/>
            <div className='puntos-select'>
            <SelectNCategoria id="categoria" type="text" onChange={ onCategoriasChange } conte="Calidad" titulo="Seleccione la categoría"/>
            <div className='conte-inputn'>
            <InputPuntos/>
            </div>
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
