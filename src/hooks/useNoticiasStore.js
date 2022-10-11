import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { amcorApi } from "../api";
import { fileUploadNoticias } from "../helpers";
import { LoadNoticias } from "../store";

export const useNoticiasStore = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const startLoadingNoticias = async() => {

        try {
            
            const { data } = await amcorApi.get('/noticias');
            dispatch( LoadNoticias( data.noticias ) )
    
        } catch (error) {
            console.error(error);
        }

    }

    const startListNoticias = async() => {

        try {
            
            const { data } = await amcorApi.get('/allnoticias');
            dispatch( LoadNoticias( data.noticias ) )
    
        } catch (error) {
            console.error(error);
        }

    }

    const startCreateNoticias = async({ titulo, imagen, contenido }) => {
      const fecha = new Date().toLocaleDateString('es-ES')
      try {
        const { data } = await amcorApi.post('/create-noticia',{ titulo, imagen, fecha, contenido})
        if(data.ok === true) {
          Swal.fire('Creacion exitosa','Se ha creado correctamente la noticia','success');
          navigate('/noticias')
        }else{
          return
        }
      } catch (error) {
        console.error(error);
      }
    }

    const startUploadingImages = async( files = [] ) => {

      try {
      
        const imagen = await fileUploadNoticias( files[0] )

        return imagen 
      
      } catch (error) {
      
        console.log(error)
      
      }
      
  }

    const starteUpdateNoticia = async({ id, titulo, contenido }) => {

      try {
        
        const { data } = await amcorApi.put('/noticia',{ id, titulo, contenido})
        if(data.ok === true) {
          Swal.fire('Actualizacion exitosa','Se ha actualizado correctamente la noticia','success');
          navigate('/noticias')
        }else{
          return
        }

      } catch (error) {
        
        console.error(error);

      }

    }

    const starteDeleteNoticia = async({ id }) => {

      try {
        
        const { data } = await amcorApi.delete(`/noticia/${ id }`)
        if(data.ok === true) {
          Swal.fire({title:'Eliminacion exitosa',text: 'Se ha eliminado correctamente la noticia',icon: 'success', timer: 1000, showConfirmButton: false});
          navigate('/noticias')
        }else{
          return
        }

        return true;

      } catch (error) {
        console.error(error);
        return false;
      }

    }


  return {
    startLoadingNoticias,
    startListNoticias,
    startCreateNoticias,
    starteUpdateNoticia,
    starteDeleteNoticia,
    startUploadingImages,
  }
}
