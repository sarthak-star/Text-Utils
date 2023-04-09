import React,{useState} from 'react'


const Textform = (props) => {
    
    const handleonchange= (event)=>{
        setText(event.target.value)
    }    
    
    const handleupclick=()=>{
        
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handledownclick=()=>{
        
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleclear=()=>{
        setText("")
        
    }
    
    
    
    const [text,setText]=useState("")
  
  
return (
    <>
    <div className="container my-5 ">

    <h2 className={`text-${props.mode==='light'? 'dark':'light'}`} >Enter Text Below to Analyse</h2>
    <textarea itemID='textarea' className={`form-control bg-${props.mode} text-${props.mode==='light'? 'dark':'light'}`} onChange={handleonchange} id="exampleFormControlTextarea1" value={text} rows="5"></textarea>
    <button type="button" onClick={handleupclick} className={`btn btn-${props.mode==='light'? 'dark':'light'} my-3`}>Convert to Upper case</button>
    <button type="button" onClick={handledownclick} className={`btn btn-${props.mode==='light'? 'dark':'light'} mx-2`}>Convert to Lower case</button>
    <button type="button" onClick={handleclear} className={`btn btn-${props.mode==='light'? 'dark':'light'}`}>Clear Text Area</button>
    

    <h3 className={`text-${props.mode==='light'? 'dark':'light'}`}>Text Summary</h3>
    <p className={`text-${props.mode==='light'? 'dark':'light'}`}>{text.split(" ").length} words and {text.length} characters</p>
    <p className={`text-${props.mode==='light'? 'dark':'light'}`}>{0.008*text.split(" ").length} minutes read</p>
    
    </div>
    
    
    
    </>
  )
}

export default Textform