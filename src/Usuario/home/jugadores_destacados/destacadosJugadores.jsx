
import "../../../styles/home/destacados.css"

import "bootstrap/dist/css/bootstrap.min.css";

export function DestacadosJugadores(jugador) {
    
    return (
        <div className="container-destacado">
                     
                <div>
                    <img className="jugador" src={jugador.imagen} alt="destacado" />
                </div>
                   
                <div className="text-destacado">
                    <h1 className="titulo-destacado">{jugador.nombre}</h1>
                    <h1 className="titulo-destacado">{jugador.puntos} Pt</h1>
                </div>
               
          
        </div>

           
    )
}