import React,{useState} from 'react'
import './App.css';
import {ButtonGroup, Button} from '@material-ui/core'
import {Checkbox} from '@material-ui/core'
import {Delete} from '@material-ui/icons'



function App() {
  const [name , setName] = useState([])
  const greet =(e)=>{
    let data = name ;
    data.push(e.target.value)
    console.log(data)
  }
  return(
    <div>
    <h1>Material _UI "Button Group"</h1>
    <ButtonGroup color="primary" variant="contained" orientation="vertical">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    </ButtonGroup>

    <Checkbox color="primary" value = "abc" onChange={(e)=>{greet(e)}}/>
    <Checkbox color="primary" value = "def" onChange={(e)=>{greet(e)}}/>
    <Checkbox color="primary" value = "ghi" onChange={(e)=>{greet(e)}}/>
    
    <Checkbox color="primary" value = "ghi" indeterminate onChange={(e)=>{greet(e)}}/>
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
