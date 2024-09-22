import { useState } from 'react';
import './App.css';
import ModalForm from './Components/ModalForm/ModalForm';

function App() {
  const [open,setIsopen]=useState(false);
  const handleClick=(e)=>{
      setIsopen(true);
  }
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button type="button" onClick={handleClick} style={{backgroundColor:'#0056B3',color:'white',fontSize:'1.3rem',borderRadius:'10px',padding:'1rem',border:'none'}}>
        Open Form
      </button>
    
  <ModalForm open={open} setIsopen={setIsopen} handleClick={handleClick}/>
    </div>
  );
}

export default App;