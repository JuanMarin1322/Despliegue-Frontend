import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../styles/home/TablaPuntos.css'
import { useJugadoresStore } from '../../hooks/useJugadoresStore';
import { useEffect } from 'react';
import { useSelector } from "react-redux"

export function TablaPuntos() {

  const { startSettintPosicionesJugadores } = useJugadoresStore();
  const { posiciones } = useSelector( state => state.jugadores );

  let posicion = 0;

  useEffect(() => {
    startSettintPosicionesJugadores();
  },[])
  

  return (
    <div className='TablaPuntos'>
        <h3>POSICIONES COPA AFCALI FY23</h3>
    <TableContainer className='tabla' component={Paper}>
      <Table padding="checkbox" size="small" aria-label="a dense table">
        <TableHead className='HeadTabla'>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Total Puntos</TableCell>
            <TableCell align="right">EBIT</TableCell>
            <TableCell align="right">COND. INSEGURAS</TableCell>
            <TableCell align="right">CASI ACCIDENTES</TableCell>
            <TableCell align="right">REPORTES CALIDAD</TableCell>
            <TableCell align="right">ESTRELLAS AMCOR</TableCell>
            <TableCell align="right">BOTELLAS DE AMOR</TableCell>
            <TableCell align="right">DIFOT</TableCell>
            <TableCell align="right">TOTAL NET SALES</TableCell>
            <TableCell align="right">FLUJO DE CAJA</TableCell>
            <TableCell align="right">NBO'S</TableCell>
            <TableCell align="right">PNC</TableCell>
            <TableCell align="right">DIO</TableCell>
          
          
          </TableRow>
        </TableHead>
        <TableBody>
          {posiciones.map(jugador => {

            posicion += 1;

            return(
                <TableRow
                  key={jugador.idUsuario}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{ posicion }</TableCell>
                  <TableCell component="th" scope="row">
                    {jugador.nombre}
                  </TableCell>
                  <TableCell align="right">{jugador.puntos}</TableCell>
                  <TableCell align="right">{jugador.EBIT}</TableCell>
                  <TableCell align="right">{jugador.Condiciones_Inseguras}</TableCell>
                  <TableCell align="right">{jugador.Casi_Accidentes}</TableCell>
                  <TableCell align="right">{jugador.Reportes_Calidad}</TableCell>
                  <TableCell align="right">{jugador.Estrellas_AMCOR}</TableCell>
                  <TableCell align="right">{jugador.Botellas_AMCOR}</TableCell>
                  <TableCell align="right">{jugador.DIFOT}</TableCell>
                  <TableCell align="right">{jugador.Total_Net_Sales}</TableCell>
                  <TableCell align="right">{jugador.Flujo_Caja}</TableCell>
                  <TableCell align="right">{jugador.NBO_S}</TableCell>
                  <TableCell align="right">{jugador.PNC}</TableCell>
                  <TableCell align="right">{jugador.DIO}</TableCell>
                </TableRow>
            )
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

