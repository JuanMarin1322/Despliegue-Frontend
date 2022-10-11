import { createSlice } from '@reduxjs/toolkit';

export const noticiasSlice = createSlice({
      name: 'noticias',
      initialState:{
         noticias: [],
      },
      reducers:{
           LoadNoticias: (state, { payload = [] }) =>{
              state.noticias = payload;
            },
            onDeleteNoticia: ( state, { payload }) => {
                 state.noticias = state.noticias.filter( noticia => noticia.id !== payload.id ) 
            },
            onLogoutNoticia: ( state ) =>{
               state.noticias = [];
            }
       }
})

export const { LoadNoticias, onDeleteNoticia, onLogoutNoticia } = noticiasSlice.actions