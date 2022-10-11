import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem} from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useJugadoresStore } from '../../hooks'
import "../../styles/AsigPuntos/AsigPuntos.css"

export const TablaReclamos = () => {


  //ARREGLAR PARA QUE TRAIGA LOS RECLAMOS

    const { startListColaboradores } = useJugadoresStore();

    const { colaboradores } = useSelector( state => state.jugadores )

    const [update, setUpdate] = useState();

    useEffect(() => {
      startListColaboradores();
    }, [])
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);

    const MensajeConfirmacion =  (idParametro) => async(event)=>{
        event.stopPropagation();
        event.preventDefault();
        setShow2(true);
    }

    let datos;

    const handleUpdate = (row) => (e) => {
      e.preventDefault();
      setUpdate(row);
      setShow(true);
      return datos = row;
    }


    const columns = [
        { field: 'orden', headerName: 'No. orden', width: 60, hide: true},
      { field: 'nombre', headerName: 'Nombre solicitante', width: 200 },
      { field: 'estado', headerName: 'Nombre prod.', width: 110 },
      { field: 'cantidad', headerName: 'Cantidad', width: 140 },
      { field: 'equipo', headerName: 'Fecha del pedido', width: 140 },
      {
        field: 'action',
        headerName: 'Enviado',
        type: 'actions',
        width: 90,
        cellClassName: 'Enviado',
          getActions: ({ row }) => {
            return [
                <GridActionsCellItem
                  icon={<CheckCircleIcon />}
                  label="Enviado"
                  className="textPrimary"
                  onClick={handleUpdate(row)}
                  color="inherit"
                />,
              ];
          }
      }
    ];
    
    const data = [
        {id: '01', name: 'Pepito', estado: 'activo', equipo: 'Laminación', seguridad: 1200, calidad: 1100, estrella: 900, pbit: 100, totalpuntos: 3500}
    ]
    
       
    
      return (
        <>

        <div className="tabla-mui" style={{ height: 400, width: "98%"}}>
          <DataGrid
            rows={colaboradores}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
    
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modificar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ascoabvoabvodbnaiopbfabfuiobnaeuirnbfnsbsneiortbnaier</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' /*onClick={alert('Atualizado')}*/> Guardar cambios </Button>
              <Button variant="secondary" onClick={handleClose}> Cerrar </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <p>¿Estas seguro que deseas eliminar este producto?</p>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
            <Button variant="primary" /*onClick={alert('Eliminado')}*/>Confirmar</Button>
        </Modal.Footer>
        </Modal>
        </>
      );

}