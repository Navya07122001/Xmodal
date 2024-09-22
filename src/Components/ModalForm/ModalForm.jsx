import React, { useState } from "react";
import "./ModalForm.css"
const ModalForm = ({ open, setIsopen, handleClick }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.number.toString().length !== 10) {
      alert("Invalid phone number.Enter a 10-digit phone number");
    }
    if (new Date(data.date) > Date.now()) {
      alert("Invalid date of birth.Date of birth cannot be in the future.");
    }
    console.log(data);
    setIsopen(false);
  };
  const handleUsername = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      username: e.target.value,
    }));
  };
  const handleEmail = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      email: e.target.value,
    }));
  };
  const handleNumber = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      number: e.target.value,
    }));
  };
  const handleDate = (e) => {
    setData((prevdata) => ({
      ...prevdata,
      date: e.target.value,
    }));
  };
  const closeModal=(e)=>{
    if(e.target.className==="modal-content"){
      setIsopen(false);
    }
  }
  return (
    <div className="modal" >
      {open && (
        <div className="modal-content" onClick={closeModal}>
      
          <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
          <div className="inputGrp">
           <label style={{fontSize:'1.5rem',fontWeight:'600',lineHeight:'1.5rem'}}>Username:</label>
            <br />
            <input type="text" required onChange={handleUsername} className="inputfield" id="username"/>
            </div>
           
            <br />
            <div className="inputGrp">
             <label style={{fontSize:'1.5rem',fontWeight:'600',lineHeight:'1.5rem'}}>Email Address:</label>
            <br />
            <input type="email" required onChange={handleEmail} className="inputfield" id="email"/></div>
           
            <br />
            <div className="inputGrp">
             <label style={{fontSize:'1.5rem',fontWeight:'600',lineHeight:'1.5rem'}}>Phone Number:</label>
            <br />
            <input type="number" required onChange={handleNumber} className="inputfield" id="phone"/></div>
           
            <br />
            <div className="inputGrp">
            <label style={{fontSize:'1.5rem',fontWeight:'600',lineHeight:'1.5rem'}}>Date of Birth:</label>
            <br />
            <input type="date" required onChange={handleDate} className="inputfield" id="dob"/>
            </div>
            <br />
            <div>
            <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalForm;