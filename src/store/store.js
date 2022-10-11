import { configureStore } from "@reduxjs/toolkit";
import { jugadoresSlice, productoSlice, noticiasSlice, authSlice, equiposSlice } from "./"

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        jugadores: jugadoresSlice.reducer,
        equipos: equiposSlice.reducer,
        producto: productoSlice.reducer,
        noticias: noticiasSlice.reducer,
    },
})