import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useProductosStore } from '../../hooks'
import { localText } from '../../translate/localText';
import { useNavigate } from 'react-router-dom';
import { onDeleteProducto } from '../../store';


export const TablaPremios = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {startLoadingProductos, startDeletePremio} = useProductosStore();

    const { productos } = useSelector( state => state.producto )
    
    const [show2, setShow2] = useState(false);
    
    const handleClose2 = () => setShow2(false);

    const [id,setId] = useState(0);
    
    const MensajeConfirmacion =  (row) => async(e)=>{
      e.stopPropagation();
      e.preventDefault();
      setShow2(true);
      setId(row.id)
    }
    
    const handleUpdate = (row) => (e) => {
      e.preventDefault();
      navigate(`/editar-premio/${ row.id }`)
    }

    const onDeletePremio = async(e) => {
      e.preventDefault();
      await startDeletePremio({id});
      dispatch(onDeleteProducto({id}))
      handleClose2();
    }

    useEffect(() => {
      startLoadingProductos();
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID',  hide: true},
      { field: 'nombre', headerName: 'Nombre', flex: 0.5, minWidth: 150 },
      {
        field: 'descripcion',
        headerName: 'Descripción',
        flex: 1
      },
      {
        field: 'precio',
        headerName: 'Precio',
        flex: 0.5
      },
      {
        field: 'action',
        headerName: 'Acciones',
        type: 'actions',
        flex: 0.5,
        minWidth: 100,
        cellClassName: 'actions',
          getActions: ({ row }) => {
            return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleUpdate(row)}
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={MensajeConfirmacion(row)}
                  color="inherit"
                />,
              ];
          }
      }
    ];
    
    
       
    
      return (
        <>

          <div style={{ height: 400, width: "100%" }}>
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ flexGrow: 1 }}>
                <DataGrid
                  headerHeight={56}
                  experimentalFeatures={{ lazyLoading: true }}
                  density='compact'
                  rows={productos}
                  columns={columns}
                  pageSize={7}
                  rowsPerPageOptions={[7]}
                  localeText = { localText }
                />
              </div>
            </div>
          </div>
        
        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <p>¿Estas seguro que deseas eliminar este producto?</p>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="primary" onClick={onDeletePremio}>Confirmar</Button>
            <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
        </Modal.Footer>
        </Modal>
        </>
      );


}
