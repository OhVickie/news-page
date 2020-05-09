import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/bee-2984342_1920.jpg';

function Form(props) {

const [name, setName] = useState("");

function handleChange(event){
    alert("Name!");
}

  return (
    <div className="text-center">
      <div className="">
        <h4 className="card-title">{props.formTitle}</h4>
      </div>
      <div className="">
        <input className="form__input"
            onChange={handleChange}
            type="text"
            placeholder="FirstName LastName"
        ></input>
        <button className="submit__btn">Submit</button>
      </div>
    </div>
  );
}

export default Form;