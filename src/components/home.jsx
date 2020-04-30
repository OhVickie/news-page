import React from 'react';
import { Link } from 'react-router-dom';
import Newscard from './newscard';
import banana from '../img/banana-4415864_1920.jpg';
import video from '../img/video.mp4';

function Home() {
  return (
    <div className="home">
        <h4 className="webpage_title">bonkers.</h4>
        <div className="home-content">
            <h1 className="title-part">
                <span className="title-part--1">Hello!</span>
                <span className="title-part--1">My name is Victory Esim.</span>
            </h1>
            <p className="title-message">
                I am one of a kind. 
                I am brilliant, creative and passionate about making stunning and intuitive user interfaces.
            </p>
            <p>
                <a href="https://github.com/OhVickie?tab=repositories" className="more-link">Learn More!</a>
            </p>
        </div>
        <div className="yellow-div">
            <div className="learn-more-div"></div>
            <h4 className="aesthetic">Aes.<span>the.</span>tic</h4>
            <p>concerned with beauty or the appreciation of beauty.</p>
        </div>
        <div className="banana-div">    
        </div>
        
        {/*This part will be a grid containing newscards*/}
        <div className="picture-div">
            <h1>What We Do</h1>
            <img src={banana}></img>
            <video id="background-video" loop autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
      
    </div>
  );
}

export default Home;