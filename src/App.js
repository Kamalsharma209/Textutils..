import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'





function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState('null');

  const showAlert =(message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='#042743';
      showAlert("Dark Mode Activated", "Success")
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light Mode Activated", "Success")
      
    }
  }
  return (
    <>
    <Navbar tittle = 'TextUtils' about_of_TextUtils = 'about' mode ={mode} togglemode ={togglemode}/>
    <Alert alert = {alert}/>
    <div className="container my -3" mode={mode}>
    <TextForm showAlert={showAlert} heading = "enter" mode ={mode}/>
      </div>
  </>
  );
}

export default App;
