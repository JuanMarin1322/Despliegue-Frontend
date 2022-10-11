import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { amcorApi } from "../api";
import { fileUploadPremios } from "../helpers";
import { LoadProductos } from "../store";

export const useProductosStore = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startLoadingProductos = async() => {

    try {
      
      const { data } = await amcorApi.get('/productos');
      dispatch( LoadProductos(data.premios) );

    } catch (error) {
      console.error(error);
    }

  }

  const startCreatingNewPremio = async({ nombre, descripcion, precio, imagen }) => {

    try {
      await amcorApi.post('/create-product',{ nombre, descripcion, precio, imagen })
      Swal.fire('Creacion exitosa','Se ha creado correctamente el premio','success');
      navigate('/premios') 
    } catch (error) {
      console.log(error);
    }

  }

  const startUploadingPremiosImages = async( files = [] ) => {
    try {
      const imagen = await fileUploadPremios( files[0] )
      return imagen 
    } catch (error) {
      console.log(error)  
    }
  }

  const startUpdatePremio = async({ id, nombre, descripcion, precio }) => {

    try {
      await amcorApi.put('/premio/actualizarPremio',{ id, nombre, descripcion, precio })
      Swal.fire('Actualizacion exitosa','Se ha actualizado correctamente el premio','success');
      navigate('/premios') 
    } catch (error) {
      console.log(error)
    }

  }

  const startDeletePremio = async({ id }) => {
    try {
      await amcorApi.delete(`/premio/${id}`)
      Swal.fire('Eliminacion exitosa','Se ha eliminado correctamente el premio','success');
    } catch (error) {
      console.log(error)
    }
  }
    

  return {
    startLoadingProductos,
    startUploadingPremiosImages,
    startUpdatePremio,
    startCreatingNewPremio,
    startDeletePremio,
  }
}
