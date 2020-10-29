import React from 'react'
import './App.css';
import {Button} from '@material-ui/core'

function App() {
  return (
    <div>
    <h1>Hello Material Ui</h1>
    
    <Button
     color = "primary"
     variant="outlined"
    //  disabled
     onClick={()=>{alert("Button Clicked Successfully")}}
     >
    MUI Button
    </Button>
      
    </div>
  );
}

export default App;
