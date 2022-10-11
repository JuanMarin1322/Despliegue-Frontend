import { createSlice } from '@reduxjs/toolkit';

export const productoSlice = createSlice({
      name: 'producto',
      initialState:{
         productos: [],
      },
      reducers:{
           LoadProductos: (state, { payload = [] }) =>{
              state.productos = payload;
            },
            onDeleteProducto: ( state, { payload }) => {
               state.productos = state.productos.filter( producto => producto.id !== payload.id ) 
            },
            onLogoutProducto: ( state ) => {
               state.productos = [];
            }
       }
})

export const { LoadProductos, onDeleteProducto, onLogoutProducto } = productoSlice.actions