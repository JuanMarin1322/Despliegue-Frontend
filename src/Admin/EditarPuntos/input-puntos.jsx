


import "../../styles/general/input.css"
import { Input } from "../input";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
export const InputPuntos = (props) => {

  const jugadorActual = props.jugadorActual;
  const categoria = props.categoria;

  const [puntos, setPuntos] = useState(0);

  const onPuntosChange = ({ target }) => {
    setPuntos(target.value);
  }

  var count = 0;
  function restaseg(e) {
    e.preventDefault();
    count = document.getElementById("ids").value
    if (count == '' || count <= 0) {
      document.getElementById("ids").value = 0;
      count = 0
    } else {
      if (count <= puntos) {
        count=puntos
      } else {
        count = parseInt(document.getElementById("ids").value)
        count = parseInt(count - 100)
      }
    }
    document.getElementById("ids").value = count;

  }

  function sumaseg(e) {
    e.preventDefault();
    count = document.getElementById("ids").value
    if (count == '') {
      count = 0
    } else {
      count = parseInt(document.getElementById("ids").value)
      count = parseInt(count + 100)
    }
    document.getElementById("ids").value = count;

  }

  useEffect(() => {
    try {
      setPuntos((jugadorActual[categoria]) ? jugadorActual[categoria] : 0)
    } catch (error) {
      setPuntos(0)
    }
  }, [categoria])

  return (



    <div className="botmasmen">
      <div className="cajon-resta">
        <button id="my-button" onClick={restaseg}><RemoveIcon /></button>
      </div>
      <input type="number" id="ids" value={puntos} onChange={onPuntosChange} className="input-puntos" />
      <div className="cajon-suma">
        <button id="my-button2" onClick={sumaseg}><AddIcon /></button>
      </div>
    </div>

  )
}