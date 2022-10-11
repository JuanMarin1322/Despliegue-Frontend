

import "../../../styles/home/destacados.css"
import "../../../styles/home/destacados-equipo.css"

import "bootstrap/dist/css/bootstrap.min.css";




export const Destacados = (equipo) => {

    const color = equipo.color;
    
    
    return (
      
        <div className="container-destacado">
          
                <div className="contenedor-circulo" style={{ background: color }}>
                <img src={equipo.imagen} alt="destacado" className="destlaminacion" />
                   
                </div>
                <div className="text-destacado">
                <h1 className="titulo-destacado">{equipo.nombre}</h1>
                <h1 className="titulo-destacado">{equipo.puntos} Pt</h1>
                </div>
               
          
        </div>

           
    )
}
