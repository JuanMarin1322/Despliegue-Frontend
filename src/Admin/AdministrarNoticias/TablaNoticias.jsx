import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useNoticiasStore } from '../../hooks'
import { useNavigate } from 'react-router-dom';
import { onDeleteNoticia } from '../../store';
import { localText } from '../../translate';

export const TablaNoticias = () => {

    const { noticias } = useSelector( state => state.noticias )
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { startListNoticias, starteDeleteNoticia } = useNoticiasStore();
    
    const [show2, setShow2] = useState(false);
    
    const [id, setId] = useState();

    const handleClose2 = () => setShow2(false);
    
    const MensajeConfirmacion =  (row) => async(event)=>{
      event.stopPropagation();
      event.preventDefault();
      setShow2(true);
      setId(row.id)
      }
      
      const handleUpdate = (row) => (e) => {
        e.preventDefault();
        navigate(`/editar-noticia/${ row.id }`)
      }

      const onDeletenoticia = (e) => {
        e.preventDefault();
        if(starteDeleteNoticia({ id })) {
            setShow2(false);
            dispatch( onDeleteNoticia({id}) )
          }
 
      }

      useEffect(() => {
        startListNoticias();
      }, [])

    const columns = [
        { field: 'id', headerName: 'ID',  hide: true},
      { field: 'titulo', headerName: 'Título', flex: 1, minWidth: 150 },
      { field: 'contenido', headerName: 'Contenido', flex: 2 },
      {
        field: 'fechaCreacion',
        headerName: 'Fecha de creación',
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
                  rows={noticias}
                  columns={columns}
                  pageSize={8}
                  rowsPerPageOptions={[8]}
                  localeText ={ localText }
                />
              </div>
            </div>
          </div>
        
        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <p>¿Estas seguro que deseas eliminar esta noticia?</p>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="primary" onClick={onDeletenoticia}>Confirmar</Button>
            <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
        </Modal.Footer>
        </Modal>
        </>
      );


}
