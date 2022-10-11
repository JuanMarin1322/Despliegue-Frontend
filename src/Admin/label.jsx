

import "../styles/general/label.css"
export const Label = (props) => {



  return (

<div className="form-group" id={props.iddiv}>
                <h2 className="titulo-input">{props.titulo}</h2>
              <label
                  type={props.type}
                  className="input-fo"
                  id={props.id}
                  placeholder={props.placeholder}
                  name={props.name}
                >{props.conte}</label>
                
              </div>
  )
}