import React, { useState } from 'react'
import Textform from"./textform"
import Header from "./header"

function App() {
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#262626";

    }
    else{
      setmode('light')
      document.body.style.backgroundColor="#f2f2f2";
      

    }
  }
  const [mode,setmode]=useState('light')

  
  
  
  return (
    <>
    
      <Header mode={mode}  toggleMode={toggleMode}/>
      <Textform mode={mode}  />
    
    

    
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
