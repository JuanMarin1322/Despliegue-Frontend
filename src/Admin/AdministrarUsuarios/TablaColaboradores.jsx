import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem} from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useJugadoresStore } from '../../hooks'
import "../../styles/AsigPuntos/AsigPuntos.css"
import { useNavigate } from 'react-router-dom';
import { localText } from '../../translate';

export const TablaColaboradores = () => {

    const { startListJugadoresActivos } = useJugadoresStore();

    const { activos } = useSelector( state => state.jugadores )

    const navigate = useNavigate();

    useEffect(() => {
      startListJugadoresActivos();
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
      navigate(`/editar-puntos-usuario/${ row.id }`)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 60, hide: true},
      { field: 'nombre', headerName: 'Nombre', flex: 2, minWidth: 200 },
      {
        field: 'subtotal',
        headerName: 'Total de puntos',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Condiciones_Inseguras',
        headerName: 'Cond. Inseguras',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Reportes_Calidad',
        headerName: 'Reportes Calidad',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Estrellas_AMCOR',
        headerName: 'Calidad',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'EBIT',
        headerName: 'EBIT',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Botellas_AMCOR',
        headerName: 'Bot. de AMCOR',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'DIFOT',
        headerName: 'DIFOT',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Total_Net_Sales',
        headerName: 'Total NET SALES',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Flujo_Caja',
        headerName: 'Flujo de caja',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'NBO_S',
        headerName: "NBO'S",
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'PNC',
        headerName: 'PNC',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'DIO',
        headerName: 'DIO',
        type: 'number',
        flex: 1,minWidth: 120,
      },
      {
        field: 'Casi_Accidentes',
        headerName: 'Casi accidentes',
        type: 'number',
        flex: 1,minWidth: 120,
      },
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
                  rows={activos}
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