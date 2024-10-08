import React, { useState } from "react";
import "./ModalForm.css";

const ModalForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    date: "",
  });
  const [open, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setIsopen(false);
    }
  };

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    if (data.number.toString().length !== 10) {
      alert("Invalid phone number. Enter a 10-digit phone number");
    } else if (new Date(data.date) > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }
    setIsopen(false)
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

  return (
    <div className="main">
      <h1>User Details Modal</h1>
      <button onClick={handleClick} style={{ backgroundColor: '#0056B3', color: 'white', fontSize: '1.3rem', borderRadius: '10px', padding: '1rem', border: 'none' }}>
        Open Form
      </button>

      {open && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" >
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <div className="inputGrp">
                <label style={{ fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.5rem' }} htmlFor="username">Username:</label>
                <input type="text" required onChange={handleUsername} className="inputfield" id="username" name="username" />
              </div>

              <div className="inputGrp">
                <label style={{ fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.5rem' }} htmlFor="email">Email Address:</label>
                <input type="email" required onChange={handleEmail} className="inputfield" name="email" id="email" />
              </div>

              <div className="inputGrp">
                <label style={{ fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.5rem' }} htmlFor="phoneNo">Phone Number:</label>
                <input type="number" required onChange={handleNumber} className="inputfield" name="phoneNo" id="phone" />
              </div>

              <div className="inputGrp">
                <label style={{ fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.5rem' }} htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" required onChange={handleDate} className="inputfield" id="dob" />
              </div>

              <div>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
