
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/loading.css'
import LinearProgress from '@mui/material/LinearProgress';

export const Loading= ()=>{
    

    return(
        <div className="loading">
    <img id="logoload" src="https://i.ibb.co/4R5N9PK/Group-38-3.png" alt="Group-38-3"/>
                
                <LinearProgress/>
                </div>
        
 
    )
}