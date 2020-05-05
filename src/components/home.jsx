import React from 'react';
import { Link } from 'react-router-dom';
import Newscard from './newscard';
import banana from '../img/banana-4415864_1920.jpg';
import video from '../img/video.mp4';
import img1 from '../img/bee-2984342_1920.jpg';
import img2 from '../img/dark-fern-fern-leaves-1216345.jpg';
import img3 from '../img/sliced-lime.jpg';
import img4 from '../img/lighted-flower-bud.jpg';
import img5 from '../img/green-peas.jpg';
import img6 from '../img/green-leafy-plant-1092197.jpg';

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
        <div className="picture__div">
            <h1 className="picture__div--header">What We Do</h1>
            <div className="picture__grid">
                <div className="item item--1"><img src={img5} className="grid-img"></img></div>
                <div className="item item--2"><img src={img2} className="grid-img"></img></div>
                <div className="item item--3"><img src={img3} className="grid-img"></img></div>
                <div className="item item--4"><img src={img6} className="grid-img"></img></div>
                
            </div>
            
            {/*<video id="background-video" loop autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>*/}
        </div>
        <div className="newscard-div">
            <h4 className="newscard-div-title">View Testimonials</h4>
            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    <div className="col-md-4">
                        <Newscard 
                            cardImage={img1}
                            cardTitle="Yuri"
                            cardMessage="I am brilliant, creative and passionate about making stunning and intuitive user interfaces."
                            btnName="View"
                        />
                    </div>
                    <div className="col-md-4">
                        <Newscard 
                            cardImage={img1}
                            cardTitle="Yuri"
                            cardMessage="I am brilliant, creative and passionate about making stunning and intuitive user interfaces."
                            btnName="View"
                        />
                    </div>
                    <div className="col-md-4">
                        <Newscard 
                            cardImage={img1}
                            cardTitle="Yuri"
                            cardMessage="I am brilliant, creative and passionate about making stunning and intuitive user interfaces."
                            btnName="View"
                        />
                    </div>
                </div>
            </div>
        </div>
       
      
    </div>
  );
}

export default Home;