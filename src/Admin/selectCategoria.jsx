

import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useEquiposStore } from "../hooks";
import "../styles/general/select.css"
export const SelectCategoria = (props) => {

  const { equipos } = useSelector( state => state.equipos );
  const { startSettingEquipos } = useEquiposStore();



  useEffect(() => {
    startSettingEquipos()
  }, [])
  

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
                  <option id={props.id} value={0}> Seleccione una categoria </option>
                  {

                    equipos.map(equipo =>{

                      return (<option id="Equipo" key={ equipo.id } value={ equipo.id }>{ equipo.nombre }</option>)
                      
                    })

                  }
                  
                </select>
                
              </div>
  )
}