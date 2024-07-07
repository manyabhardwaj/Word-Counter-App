import React, { useState} from 'react';

import'./App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import Alert from './components/Alert';

function App() {
const [mode, setMode] = useState('light');

/* For Setting alert*/
const [alert, setAlert] = useState(null);
const showAlert =(message, type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
setAlert(null);
},12000);
}

 
     const toggleMode = ()=>{
      if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title="TextUtils - Dark Mode";
      } 
      else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
        document.title="TextUtils - Light Mode";
      }
      }
      /* For title Popups which is not a good UX

      setInterval(() =>{
        document.title='TextUtils is Amazing';
      }
      , 2000);

      setInterval(() =>{
        document.title='Install TextUtils Now';
      }
      , 1500);

      */

          
        
    return (
   <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
    
</>
  );
}


export default App;