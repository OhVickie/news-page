import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/bee-2984342_1920.jpg';

function Newscard(props) {
  return (
    <div className="card text-center newscard">
      <div className="overflow">
        <img src={props.cardImage} className="card-img-top"></img>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.cardTitle}</h4>
        <p className="card-text text-secondary">{props.cardMessage}</p>
        <a href="#" className="btn btn-outline-success btn--white btn--animated">Hey</a>
      </div>
    </div>
  );
}

export default Newscard;