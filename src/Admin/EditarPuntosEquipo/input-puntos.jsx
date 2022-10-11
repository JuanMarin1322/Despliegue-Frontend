


import "../../styles/general/input.css"
import { Input } from "../input";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export const InputPuntos = () => {
    
    
    var count=0;
    function restaseg(e){ 
        e.preventDefault();
        count=document.getElementById("ids").value
        if (count=='' || count<=0){
          document.getElementById("ids").value = 0;
          count=0
        }else{        
        count=parseInt(document.getElementById("ids").value)
        count=parseInt(count-100)
        }
        document.getElementById("ids").value = count; 
        
    }

    function sumaseg(e){ 
        e.preventDefault();
        count=document.getElementById("ids").value
        if (count==''){
          count=0
        }else{
        count=parseInt(document.getElementById("ids").value)
        count=parseInt(count+100)
      }
        document.getElementById("ids").value = count; 
        
    }


  return (


              
    <div className="botmasmen">
    <div className="cajon-resta">
  <button id="my-button" onClick={restaseg}><RemoveIcon /></button>
  </div>
  <input type="number" id="ids" className="input-puntos" required/>
  <div className="cajon-suma">
  <button id="my-button2" onClick={sumaseg}><AddIcon /></button>
  </div>
  </div>

  )
}