import { createSlice } from '@reduxjs/toolkit';

export const jugadoresSlice = createSlice({
      name: 'usuario',
      initialState:{
         jugadores: [],
         activos: [],
         top5: [],
         posiciones: [],
         errorMessage: null
      },
      reducers:{
            setJugadoresDestacados: (state, { payload = [] }) =>{
               state.top5 = payload;
               state.errorMessage = null;
            },
            setJugadoresPosiciones: (state, { payload = [] }) =>{
                  state.posiciones = payload;
                  state.errorMessage = null;
            },
            setAllJugadores: (state, { payload = [] }) =>{
                  state.jugadores = payload;
                  state.errorMessage = null;
            },
            setAllJugadoresActivos: (state, { payload = [] }) =>{
                  state.activos = payload;
                  state.errorMessage = null;
            },
            onDeleteJugador: ( state, { payload }) => {
                  state.jugadores = state.jugadores.filter( jugador => jugador.id !== payload.id ) 
            },
            onLogoutJugadores: (state) => {
               state.jugadores = [];
               state.top5 = [];
               state.errorMessage = null;
            },
      }
})

export const {
      setAllJugadores, 
      setJugadoresPosiciones,
      onLogoutJugadores, 
      setJugadoresDestacados,
      onDeleteJugador,
      setAllJugadoresActivos,
   } = jugadoresSlice.actions