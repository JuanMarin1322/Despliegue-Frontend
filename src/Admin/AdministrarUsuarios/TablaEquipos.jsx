import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem} from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useEquiposStore } from '../../hooks'
import "../../styles/AsigPuntos/AsigPuntos.css"
import { useNavigate } from 'react-router-dom';
import { localText } from '../../translate';

export const TablaEquipos = () => {

    const { startSettingEquipos } = useEquiposStore();

    const { equipos } = useSelector( state => state.equipos )

    const navigate = useNavigate();

    useEffect(() => {
      startSettingEquipos();
    }, [])
    

    const handleClose = () => setShow(false);

    const [show, setShow] = useState(false);


    const MensajeConfirmacion =  (idParametro) => async(event)=>{
        event.stopPropagation();
        event.preventDefault();
        setShow(true);
    }

    const handleUpdate = (row) => (e) => {
      e.preventDefault();
      navigate(`/editar-puntos-equipo/${ row.id }`)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 60, hide: true},
        { field: 'nombre', headerName: 'Nombre', flex: 2, minWidth: 250 },
        { field: 'puntos', headerName: 'Total', flex: 2, minWidth: 150},
      {
        field: 'action',
        headerName: 'Acciones',
        type: 'actions',
        flex: 1,minWidth: 90,
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
                  rows={equipos}
                  columns={columns}
                  pageSize={8}
                  rowsPerPageOptions={[8]}
                  localeText ={ localText }
                />
              </div>
            </div>
          </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <p>¿Estas seguro que deseas eliminar este producto?</p>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" /*onClick={alert('Eliminado')}*/>Confirmar</Button>
        </Modal.Footer>
        </Modal>
        </>
      );

}