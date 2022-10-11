

import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useEquiposStore } from "../hooks";
import "../styles/general/select.css"
export const SelectNCategoria = (props) => {

  

  return (

              <div className="form-group-50" id={props.iddiv}>
                <h2 className="titulo-input">{props.titulo}</h2>
              <select
                  type={props.type}
                  className="input-fo"
                  id={props.id}
                  placeholder={props.placeholder}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
              >
                  <option id={props.id} value={0}> Seleccione una categoría </option>
                  <option id="Equipo"  value="Condiciones_Inseguras">Condiciones Inseguras</option>
                  <option id="Equipo"  value="Reportes_Calidad">Reportes de calidad</option>
                  <option id="Equipo"  value="Estrellas_AMCOR">Estrellas AMCOR</option>
                  <option id="Equipo"  value="EBIT">EBIT</option>
                  <option id="Equipo"  value="Botellas_AMCOR">Botellas AMCOR</option>
                  <option id="Equipo"  value="DIFOT">DIFOT</option>
                  <option id="Equipo"  value="Total_Net_Sales">Total Net Sales</option>
                  <option id="Equipo"  value="Flujo_Caja">Flujo de Caja</option>
                  <option id="Equipo"  value="NBO_S">NBO'S</option>
                  <option id="Equipo"  value="PNC">PNC</option>
                  <option id="Equipo"  value="DIO">DIO</option>
                  <option id="Equipo"  value="Casi_Accidentes">Casi accidentes</option>
                </select>
                
              </div>
  )
}