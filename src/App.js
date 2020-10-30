import React,{useState} from 'react'
import './App.css';
import {ButtonGroup, Button} from '@material-ui/core'
import {Delete} from '@material-ui/icons'



function App() {
  return(
    <div>
    <h1>Material _UI "Button Group"</h1>
    <ButtonGroup color="primary" variant="contained" orientation="vertical">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    </ButtonGroup>
    </div>
  )
}

  // const [color , setColor] = useState("primary")
  // const [disabled , setDisabled] =useState(false)
  // const change =() =>{
  //   setColor("secondary")
  //   alert("Cliked ")
  //   setDisabled(true)
  
   

 
//   //return (
//     //<div>
//    // </div
//   //  > 
//     <h1>Hello Material Ui</h1>
    
//     // <Button
//     //  color = {color}
//     //  variant="outlined"
//     //  disabled={disabled}
//     // //  disabled
//     //  onClick={()=>{change()}}
//     // //  startIcon={<Delete />}
//     // endIcon = {<Delete/>}
//     //  >
//     // MUI Button
     
//     // </Button>
      
//     </div>
//   );
// }

export default App;
