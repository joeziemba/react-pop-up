import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm(`Are your sure you don't want ${props.artist} tickets?`);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
  }

  return(
    <div id="popup">
      <div id="close"
        onClick={handleExit}>
        ✖
      </div>
      <h1>You won tickets to see {props.artist}!</h1>
      <p>Please enter your email so we can send you the details</p>
      <form onSubmit={e => { e.preventDefault(); console.log("Form Submitted")}}>
        <input type="text" placeholder="Your email here" />
        <input type="submit" value="CLAIM YOUR PRIZE" id="submit" />
      </form>
    </div>
  );
};

export default Popup;
