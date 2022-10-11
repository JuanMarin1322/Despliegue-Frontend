

import "../styles/general/textarea.css"
export const TextArea = (props) => {



  return (
              <div className="form-group" id={props.iddiv}>
                <h2 className="titulo-input">{props.titulo}</h2>
              <textarea
                  type={props.type}
                  className="input-fo"
                  id={props.id}
                  placeholder={props.placeholder}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}  
                  cols="150"
                  rows="10"
                  required
              />
                
              </div>
  )
}