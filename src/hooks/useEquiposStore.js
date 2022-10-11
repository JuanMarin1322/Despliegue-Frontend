import { useDispatch } from "react-redux"

import { setEquipos, setEquiposDestacados } from "../store";
import { amcorApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useEquiposStore = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const startSettingTopEquipos = async() => {

    try {
        
        const { data } = await amcorApi.get('/topEquipos');
        dispatch(setEquiposDestacados(data.equipos));

    } catch (error) {
        console.error(error);
    }

  }  

  const startSettingEquipos = async() => {

    try{
      const { data } = await amcorApi.get('/equipos');
      dispatch(setEquipos(data.equipos));
    }catch (error) {
      console.error(error);
    }

  }

  const startSettingAllEquipos = async() => {

    try{
      const { data } = await amcorApi.get('/todosEquipos');
      dispatch(setEquipos(data.equipos));
    }catch (error) {
      console.error(error);
    }

  }

  const startUpdatePuntosPorEquipos = async({ idEquipo, categoria, cantidad, nombrej, correoj}) => {

    try {
      await amcorApi.put('/actualizarPuntosEquipo',{idEquipo, categoria, cantidad, nombrej, correoj})
      Swal.fire('Actualizacion exitosa','Se han sumado exitosamente los puntos a los jugadores del equipo','success')
      navigate('/usuarios')
    } catch (error) {
      console.error(error);
    }

  }

  return {
    startSettingTopEquipos,
    startSettingEquipos,
    startUpdatePuntosPorEquipos,
    startSettingAllEquipos,
  }
}
