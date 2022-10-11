import { NavBarAdmin } from '../General/Admin'
import { Banner } from '../Admin/Home/Banner'

import { ConteTarjetaAdmin } from './Home/conte-tarjetas'
import '../styles/AsigPuntos/AsigPuntos.css';
//import { TablaReclamos } from './Home/TablaReclamos';
export const AdminHome = () => {
  return (
    <div className='AsigPuntos'>
        <NavBarAdmin/>
        <Banner/>
        
        <ConteTarjetaAdmin/>
        <div className='contenedor-asigpuntos'>
            
            
            
            </div>
            

    </div>
  )
}
