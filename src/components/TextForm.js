import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick =()=> {
       
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");
    }
    const handleloClick =()=> {
       
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success");
    }
    const handleClearClick =()=> {
       
        let newText = '';
        setText(newText)
        props.showAlert("Cleared" , "success");
    }
    const handleOnChange =(event)=> {
     
        setText(event.target.value);
    }
    const handleCopy = () => {
    
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard" , "success");
    }

    /* Use State */

    const [text, setText] = useState('');
    
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 " onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 " onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008* text.split("").length}Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something above in the textbox to preview it here"}</p>
        </div>
    </>
  )
}
