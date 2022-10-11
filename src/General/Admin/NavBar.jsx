import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks/'
import '../../styles/general/NavBar.css'

export function NavBarAdmin() {
  
  const { startLogout } = useAuthStore();

  return (
    <div className='NavBar1'>
    <div className='shape'>
    </div>
      <nav className='contenedor'>
        <div className='Logo'>
        <a href="/"><img src="/images/Logo-copa-afcali-blanco.png" alt="logo"/></a>
        </div>
          <input className='box' type='checkbox' id='btn-menu'/>
          <label className='btnMenu' htmlFor='btn-menu'><i className='bx bx-menu'></i></label>
        <div className='Enlaces'>
        <div className='cajon-nav'>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/usuarios">Usuarios</a>
            </div>
            <div>
              <a href="/noticias">Noticias</a>
            </div>
            <div>
              <a href="/premios">Premios</a>
            </div>
            <div>
              <button className='btn-logout' onClick={ startLogout }> Salir <i className='bx bx-door-open'></i></button>
            </div>              
          </div>
        </div>
      </nav>
  </div>






  )
}
