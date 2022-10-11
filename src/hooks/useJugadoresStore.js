import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'
import { setJugadoresDestacados, setAllJugadores, setJugadoresPosiciones, onDeleteJugador, setAllJugadoresActivos } from "../store";
import { amcorApi } from "../api";
import { fileUpload } from "../helpers";
import { useNavigate } from "react-router-dom";

export const useJugadoresStore = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const startSettingTop5 = async() => {

    try {
        
        const { data } = await amcorApi.get('/top');
        dispatch(setJugadoresDestacados(data.topCincoJ));
    } catch (error) {
        console.error(error);
    }

  }  

  const startSettintPosicionesJugadores = async() => {

    try {
      
      const { data } = await amcorApi.get('/todosPuntos');
      dispatch( setJugadoresPosiciones( data.posJugadores ) )

    } catch (error) {
      console.log(error)
    }

  }
  const startListJugadores= async() => {

    try {
      
      const { data } = await amcorApi.get('/lista');
      dispatch( setAllJugadores( data.lista ) )

    } catch (error) {
      console.log(error)
    }

  }
  const startListJugadoresActivos= async() => {

    try {
      
      const { data } = await amcorApi.get('/listaActivos');
      dispatch( setAllJugadoresActivos( data.lista ) )

    } catch (error) {
      console.log(error)
    }

  }

  const startCreatingNewUser = async({ nombre, correo, password, imagen, equipo }) => {

    try {

      const { data } = await amcorApi.post('/create-user',{ nombre, correo, password, imagen, equipo })
        if(data.ok === true) {
          Swal.fire('Creacion exitosa','Se ha creado correctamente el usuario','success');
          navigate('/usuarios')
        }else{
         
        }
    } catch ({ response }) {

      if(response?.data?.errors){
        
        if(response.data.errors?.password){
          Swal.fire({title:'Error en la creacion',text:((response.data.errors.password).msg),icon:'error'});
        }else if(response.data.errors?.nombre){
          Swal.fire({title:'Error en la creacion',text:((response.data.errors.nombre).msg),icon:'error'});
        }else if(response.data.errors?.nombre){
            Swal.fire({title:'Error en la creacion',text:((response.data.errors.correo).msg),icon:'error'});
        
        }
        
      }else{
        
        Swal.fire({title:'Error en la creacion',text:((response.data).msg),icon:'error'});
        console.log(response.data)
      }
    }

  }

  const startUploadingImages = async( files = [] ) => {

      try {
      
        const imagen = await fileUpload( files[0] )

        return imagen 
      
      } catch (error) {
      
        console.log(error)
      
      }
      
  }

  const startUpdateUsuario = async({ id, correo }) => {

    try {
      const { data } = await amcorApi.put('/actualizarUsuario',{id,correo})

      if( data.ok === true){
        Swal.fire('Actualizacion exitosa','Se ha actualizado correctamente el usuario','success')
        navigate('/usuarios')
      }

    } catch (error) {
      Swal.fire('Error en la actualizacion','Ha ocurrido un error en la actualizacion','error')
    }

  }

  const startUpdateUsuarioPassword = async({ id, password }) => {
    console.log({ id, password });
    try {
      await amcorApi.put('/actualizarPassUsuario',{ id, password });
      Swal.fire('Cambio de contraseña exitosa','Se ha cambiado correctamente la contraseña','success')
      return;
    } catch (error) {
      console.log(error);
      return
    }
  }

  const startUpdatePuntosJugador = async({ id, nombreCategoria, cantidadCategoria}) => {

    try {
      console.log(nombreCategoria)
      const { data } = await amcorApi.put('/actualizarPuntos',{id, nombreCategoria, cantidadCategoria});
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }

  }

  const startClaimProducto = async({ idUsuario, idProducto, puntos, precio }) => {

    if( puntos < precio ){
      return Swal.fire(
        'Ha ocurrido un error.',
        'No tienes los puntos suficientes para reclamar este producto.',
        'error'
      )
    }else{
      let nuevoTotal = puntos - precio;
      try {
        await amcorApi.put('/reclamarPunto',{idUsuario, idProducto, nuevoTotal});
        startListJugadores();
        return Swal.fire(
          'Felicidades!',
          'Has reclamado exitosamente el premio.',
          'success'
        )
      } catch (error) {
        console.log(error)
      }

    }

  }

  const startDeletingJugadores = async({ id }) => {

    try {
      await amcorApi.delete(`/jugador/${id}`)
      Swal.fire(
        'Jugador Inactivo',
        'Has puesto como inactivo al jugador exitosamente.',
        'success'
      )

    } catch (error) {
      console.log(error);
    }
  }

  const startActivateJugadores = async({ id }) => {

    try {
      await amcorApi.put(`/jugador/${id}`)
      Swal.fire(
        'Jugador Activado',
        'Haz activado al jugador exitosamente.',
        'success'
      )

    } catch (error) {
      console.log(error);
    }
  }
  
  return {
    startSettingTop5,
    startSettintPosicionesJugadores,
    startListJugadores,
    startCreatingNewUser,
    startUpdatePuntosJugador,
    startClaimProducto,
    startUploadingImages,
    startUpdateUsuario,
    startUpdateUsuarioPassword,
    startDeletingJugadores,
    startActivateJugadores,
    startListJugadoresActivos,
  }
}
