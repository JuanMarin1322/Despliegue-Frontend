

import "../styles/general/input.css"
export const Input = (props) => {



  return (

<div className="form-group" id={props.iddiv}>
                <h2 className="titulo-input">{props.titulo}</h2>
              <input
                  type={props.type}
                  className="input-fo"
                  id={props.id}
                  placeholder={props.placeholder}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  accept={props.accept}
                  required
                />
                
              </div>
  )
}