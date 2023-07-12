// import React, { useEffect, useState } from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import img1 from '../img/bee-2984342_1920.jpg';

function Form(props) {

  // const [name, setName] = useState("");
  // const [popupStyle, showPopup] = useState("hide")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m4zs2m3', 'template_hyhern8', form.current, 'i9ttmQCT7Cr1KwGI6')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };

  // const popup = () => {
  //   showPopup("login-popup")
  //   setTimeout(() => showPopup("hide"), 3000)
  // }

 

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

      {/* <h4 className="card-title">{props.formTitle}</h4> */}
      <h4>Subscribe to our blog</h4>
      <p>No spam, just great blogs sent to your inbox weekly</p>

      <form ref={form} onSubmit={sendEmail}>
        <input className="form__input form__input--name form__input--firstname"
          // onChange={handleChange}
          type="text"
          name="user_firstname"
          placeholder="FirstName"
        ></input>

        <input className="form__input form__input--name form__input--lastname"
          // onChange={handleChange}
          type="text"
          name="user_lastname"
          placeholder="LastName"
        ></input>

        <input className="form__input form__input--email"
          // onChange={handleChange}
          type="text"
          name='user_email'
          placeholder="Email"
        ></input>

        <input
          className="form__input form__input--message"
          type="text"
          name='message'
          placeholder="Message"></input>

        <div className="">
          <button className="submit__btn btn btn-outline-primary" onClick={submitInfo}>Submit</button>
        </div>

      </form>
      
      
    </div>
  );
  }

export default Form;