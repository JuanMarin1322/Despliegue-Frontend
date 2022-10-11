import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminHome, AdminUsuarios } from "../Admin";
import { CrearUsuario } from "../Admin/Crearusuario/conte-crearUsuario";
import { EditarPuntos } from "../Admin/EditarPuntos/editarPuntos";
import { NavBar2 } from "../General/Usuario";
import { useAuthStore } from "../hooks";
import { CajonLogin } from "../Login";
import { AdminNoticias } from "../Admin/AdministrarNoticias/adminNoticias";
import { CambiaPuntosContenido, ComoGanarPuntos, DetallesCP, Home, Noticia, QueEsCopa } from "../Usuario";
import CircularProgress from '@mui/material/CircularProgress';
import { CrearNoticia } from "../Admin/CrearNoticia/conte-crearNoticia";
import { AdminPremios } from "../Admin/AdministrarPremios/adminPremios";
import { CrearPremio } from "../Admin/CrearPremio/conte-crearPremio";
import { EditarPuntosEquipo } from "../Admin/EditarPuntosEquipo/editarPuntosEquipo";
import { EditarUsuario } from "../Admin/EditarUsuario/conte-editarUsuario";
import { EditarNoticia } from "../Admin/EditarNoticia/conte-crearNoticia";
import { EditarPremio } from "../Admin/EditarPremio/conte-crearPremio";
import { Loading } from "../General/loading";

export const AppRouter = () => {

    const { status, user, checkAuthToken } = useAuthStore()

    useEffect(() => {
      checkAuthToken();
    }, [])
    
  
        if( status === 'checking'){
  
          return (
            <Loading />
          )}
  
  return (
    <Routes>

        {

          ( status === 'not-authenticated' )
          ? (
            <>
                <Route path="/auth/*" element={ <CajonLogin/> }/>
                <Route path="/*" element={ <Navigate to ="/auth/login"/> }/>
            </>
          )
          :(
            ( user.rol === 0 )
            ?(
                <>
                  <Route path="/" element={ <AdminHome/> }/>
                  <Route path="/usuarios" element= { <AdminUsuarios/> } />
                  <Route path="/noticias" element= { <AdminNoticias/> } />
                  <Route path="/premios" element= { <AdminPremios/> } />
                  <Route path="/crear-usuario" element= { <CrearUsuario/> } />
                  <Route path="/crear-noticia" element= { <CrearNoticia/> } />
                  <Route path="/crear-premio" element= { <CrearPremio/> } />
                  <Route path="/editar-puntos-usuario/:id" element= { <EditarPuntos/> } />
                  <Route path="/editar-puntos-equipo/:id" element= { <EditarPuntosEquipo/> } />
                  <Route path="/editar-usuario/:id" element={<EditarUsuario/>}/>
                  <Route path="/editar-noticia/:id" element={<EditarNoticia/>}/>
                  <Route path="/editar-premio/:id" element={<EditarPremio/>}/>
                  <Route path="/editar-puntos-usuario/:id" element= { <EditarPuntos/> } />
                  <Route path="/*" element={ <Navigate to ="/"/> }/>
                </>
              )
            :(

              <>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cambiaPuntos" element={<CambiaPuntosContenido/>}/>
                <Route path="/detallesCP/:id" element={ <DetallesCP/> }/>
                <Route path="/que-es-la-copa" element={<QueEsCopa/>}/>
                <Route path="/como-ganar-puntos" element={<ComoGanarPuntos/>}/>
                <Route path="/noticia/:id" element={ <Noticia/> }/>
                <Route path="/*" element={ <Navigate to ="/"/> }/>
              </>

             )
          )
          

        }

    </Routes>
  )

}
