import React, { useEffect, useState } from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import { Link } from 'react-router-dom';
import img1 from '../img/bee-2984342_1920.jpg';

function Form(props) {

  const [name, setName] = useState("");
  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  // useEffect(() => {
  //   function start() {
  //       gapi.client.init({
  //           clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
  //           scope: ""
  //       })
  //   }
  //   gapi.load('client: auth2', start)
  // })

  const handleChange = (event) => {
    //alert("Name!");
    setName ();
  }

  const submitInfo = () => {
    alert("Submitted!");
  }

  const onSuccess = e => {
    alert("User signed in")
    console.log(e)
  }

  const onFailure = e => {
    alert("User sign in Failed")
    console.log(e)
  }

  return (
    <div className="contact__form text-center">

      <h4 className="card-title">{props.formTitle}</h4>
      <input className="form__input"
        onChange={handleChange}
        type="text"
        placeholder="FirstName LastName"
      ></input>
      <input 
        className="form__input"
        type="text"
        placeholder="Message"></input>

      <div className="">
        <button className="submit__btn" onClick={submitInfo}>Submit</button>
      </div>
      
    </div>
  );
}

export default Form;