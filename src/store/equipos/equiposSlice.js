import { createSlice } from '@reduxjs/toolkit';

export const equiposSlice = createSlice({
      name: 'equipos',
      initialState:{
         equipos: [],
         errorMessage: null,
      },
      reducers:{
         setEquiposDestacados: (state, { payload = [] }) =>{
            state.equipos = payload;
            state.errorMessage = null;
         },
         setEquipos: (state, { payload = [] }) =>{
            state.equipos = payload;
            state.errorMessage = null;
         },
         onLogoutEquipos: (state) => {
            state.equipos = [];
            state.errorMessage = null;
         }
       }
})

export const { setEquiposDestacados, onLogoutEquipos, setEquipos } = equiposSlice.actions