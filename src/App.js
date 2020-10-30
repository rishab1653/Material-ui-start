import React,{useState} from 'react'
import './App.css';
import {Delete} from '@material-ui/icons'
import {Button} from '@material-ui/core'


function App() {

  const [color , setColor] = useState("primary")
  const [disabled , setDisabled] =useState(false)
  const change =() =>{
    setColor("secondary")
    alert("Cliked ")
    setDisabled(true)
  
   

  }
  return (
    <div>
    <h1>Hello Material Ui</h1>
    
    <Button
     color = {color}
     variant="outlined"
     disabled={disabled}
    //  disabled
     onClick={()=>{change()}}
    //  startIcon={<Delete />}
    endIcon = {<Delete/>}
     >
    MUI Button
     
    </Button>
      
    </div>
  );
}

export default App;
