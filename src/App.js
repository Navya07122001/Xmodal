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
     
    
  <ModalForm open={open} setIsopen={setIsopen} handleClick={handleClick}/>
    </div>
  );
}

export default App;