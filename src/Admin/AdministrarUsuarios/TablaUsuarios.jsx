import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import KeyIcon from '@mui/icons-material/Key';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { Modal, Button} from 'react-bootstrap';
import { useForm, useJugadoresStore } from '../../hooks'
import { useNavigate } from 'react-router-dom';
import { localText } from '../../translate';
import { Input } from '../input';
import '../../../styles/modal.css'
import { InputPassw } from '../inputPassw';
import Swal from 'sweetalert2';

export const TablaUsuarios = () =>{

    const navigate = useNavigate();

    const { startListJugadores, startUpdateUsuarioPassword, startDeletingJugadores, startActivateJugadores, startListJugadoresActivos } = useJugadoresStore();

    const { jugadores } = useSelector( state => state.jugadores )
    
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    
    const [ password, setPassword ] = useState('');

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setPassword('');
      setPasswordConfirm('');
      setShow(false)
    };
    
    const [id, setId] = useState(0);
    
    const MensajeConfirmacion =  (row) => (e)=>{
      e.stopPropagation();
      e.preventDefault();
      setShow2(true);
      setId(row.id);
    }

    const MensajeConfirmacion2 =  (row) => (e)=>{
      e.stopPropagation();
      e.preventDefault();
      setShow3(true);
      setId(row.id);
    }
    
    const handleUpdate = (row) => (e) => {
      e.preventDefault();
      navigate(`/editar-usuario/${ row.id }`)
    }
    
    const handleUpdatePassword = (row) => (e) => {
      e.stopPropagation();
      e.preventDefault();
      setShow(true);
      setId(row.id);
    }

    
    const onUpdatePassword = async(e) =>{
      if(password===''||passwordConfirm===''){
        
        Swal.fire({text: "Por favor ingrese la contraseña a cambiar", icon: "warning"})

      }
      else{
        
        if( password === passwordConfirm ){
          if(password.length >= 8){

          await startUpdateUsuarioPassword({ id, password: passwordConfirm });
          handleClose();}
          else{

            Swal.fire({text: "La contraseña debe contenar mas de 8 caracteres", icon: "warning"})
          }
        }
        else{
          Swal.fire({text: "Las contraseñas digitadas no coinciden", icon: "warning"})
        }
        
      }
    }

    const onDeleteJugador = async(e) => {
      await startDeletingJugadores({ id });
      startListJugadores();
      handleClose2();
    }

    const onActivateUsuario = async(e) => {
      await startActivateJugadores({id})
      startListJugadores();
      startListJugadoresActivos();
      handleClose3();
    }
    
    useEffect(() => {
      startListJugadores();
    }, [])
    
    const columns = [
        { field: 'id', headerName: 'ID', with:60, hide: true},
      { field: 'nombre', headerName: 'Nombre', flex: 2, minWidth: 200 },
      { field: 'equipo', headerName: 'Equipo', flex: 1, minWidth:120 },
      {
        field: 'correo',
        headerName: 'Correo',
        flex: 1,minWidth: 120,
      },{
        field: 'estado',
        headerName: 'Estado',
        type: 'actions',
        flex: 0.5,
        minWidth: 100,
        cellClassName: 'actions',
          getActions: ({ row }) => {
            return [
              
                <GridActionsCellItem
                  icon={
                    (row.estado === 1)
                    ? <CheckIcon />
                    : <BlockIcon />
                  }
                  label="Activo"
                  className="textPrimary"
                  onClick={ 
                    (row.estado === 1)
                    ? () => {}
                    : MensajeConfirmacion2(row) 
                  }
                  color="inherit"
                />
              ];
          }
      },
      
      {
        field: 'action',
        headerName: 'Acciones',
        type: 'actions',
        flex: 1,
        minWidth: 150,
        cellClassName: 'actions',
          getActions: ({ row }) => {
            return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleUpdate(row)}
                  color="inherit"
                  disabled={
                    (row.estado === 1)
                    ? false
                    : true
                  }
                />,
                <GridActionsCellItem
                icon={<KeyIcon />}
                label="Edit password"
                className="textPrimary"
                onClick={handleUpdatePassword(row)}
                color="inherit"
                disabled={
                    (row.estado === 1)
                    ? false
                    : true
                  }
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={MensajeConfirmacion(row)}
                  color="inherit"
                  disabled={
                    (row.estado === 1)
                    ? false
                    : true
                  }
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
                  rows={jugadores}
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
            <p>¿Estás seguro que deseas poner como inactivo este jugador?</p>
        </Modal.Body>
    
        <Modal.Footer>
        
            <Button variant="primary" onClick={onDeleteJugador}>Confirmar</Button>
            <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Actualizar - Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>¿Estás seguro que deseas actualizar la contraseña?</p>
            <p  id="tit-modal">Contraseña</p> 
            <InputPassw name="password" value = { password } onChange={ ({target})=>{ setPassword(target.value) } } id="pass" />


            <p id="tit-modal">Confirmar Contraseña</p>
            <InputPassw name="passwordConfirm" value = { passwordConfirm } onChange={ ({target})=>{ setPasswordConfirm(target.value) } } id="password"/>
        </Modal.Body>
    
        <Modal.Footer>
            
            <Button variant="primary" onClick={onUpdatePassword}>Confirmar</Button>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        </Modal.Footer>
        </Modal>


        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
              <Modal.Title>Activar Usuario</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
              <p>¿Estás seguro que deseas activar este usuario?</p>
          </Modal.Body>
    
          <Modal.Footer>
              <Button variant="primary" onClick={onActivateUsuario}>Confirmar</Button>
              <Button variant="secondary" onClick={handleClose3}>Cancelar</Button>
          </Modal.Footer>
        </Modal>

        </>
      );

}