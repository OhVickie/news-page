import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/bee-2984342_1920.jpg';

function Form(props) {

const [name, setName] = useState("");

function handleChange(event){
    alert("Name!");
}

  return (
    <div className="card text-center newscard">
      <div className="overflow">
        <img src={props.formImage} className="formImage"></img>
        <h4 className="card-title">{props.formTitle}</h4>
      </div>
      <div className="card-body text-dark">
        <input
            onChange={handleChange}
            type="text"
            placeholder="FirstName LastName"
        ></input>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;