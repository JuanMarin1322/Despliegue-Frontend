
import { useEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
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
import { useSelector } from 'react-redux'

export const EditarPremio = () => {

  const navigate = useNavigate();
  const params = useParams();
  const { productos } = useSelector(state => state.producto);
  const productoActual = productos.find(producto => producto.id === parseInt(params.id));
  const { id, nombre = '', descripcion = '', precio = '', onInputChange } = useForm(productoActual);
  const { startLoadingProductos, startUpdatePremio } = useProductosStore();

  const volver = (e) => {
    e.preventDefault();
    navigate(`/premios`)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let numPrecio = parseInt(precio);
    if(nombre===''||descripcion===''||precio===''){
      Swal.fire({text:'Ingrese todos los campos obligatorios', icon:'warning'})
    }else{
      if(numPrecio<0){
        Swal.fire({text:'Ingrese un precio valido, es decir, mayor a 0', icon:'warning'})

      }else{
        console.log(precio)
        //startUpdatePremio({ id, nombre, precio: numPrecio, descripcion })

      }
    }

    

  }

  useEffect(() => {
    startLoadingProductos();
  }, [])


  return (
    <div className='AsigPuntos'>
      <NavBar2Admin />
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
                <Input type="text" titulo="Nombre*" name="nombre" value={nombre} onChange={onInputChange} iddiv="tituloE" />
              </div>

              <TextArea type="file" titulo="Descripcion*" name="descripcion" value={descripcion} onChange={onInputChange} />
              <div className='datos-p-hori'>

                <Input type="number" titulo="Precio*" name="precio" value={precio} onChange={onInputChange} iddiv="precio" />
              </div>
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
