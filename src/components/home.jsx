import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Newscard from './newscard';
import Form from './form';
import Trial from './Trial';
import banana from '../img/banana-4415864_1920.jpg';
import video from '../img/video.mp4';
import img1 from '../img/bee-2984342_1920.jpg';
import img2 from '../img/dark green bubble.jpg';
import img3 from '../img/AI typewriter green.jpg';
import img4 from '../img/lit-flower-bud.jpg';
import img5 from '../img/lightbulb blueback.jpg';
import img6 from '../img/blue yellow headset.jpg';
import img7 from '../img/sliced-lime.jpg';
import img8 from '../img/blue-sky-1.jpg';

function Home() {

    const [newsArticle, setNewsArticle] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=1e3ba36964564dacb9476df7bf795894&pageSize=6")
                console.log("This is the response", response.data);
                setNewsArticle(response.data.articles)

            }

            catch (error) {
                console.error("Failed to make request:", error.message);
            }
        };

        getNews();
    }, []

    );

    //function to dynmically generate different images for each of the newscards
    // let cardImg = function setCardImg() {
    //     let newsImgArr = [img1, img2, img3, img4, img5, img6];
    //     let randImgIndex = Math.floor(Math.random() * newsImgArr.length);

    //     return (newsImgArr[randImgIndex])
    // }


    return (
        <div className="home">
            <h4 className="webpage__title">bonkers.</h4>
            {/*- MEANING
        - Going beyond what is normal or conventional in a way that is fun, impressive, exciting, etc. 
        - Very fond, enthusiastic, or excited*/}
            <div className="home__content">
                <h1 className="title__part">
                    <span className="title__part--1">Hello!</span>
                    <span className="title__part--1">My name is Victory Esim.</span>
                </h1>
                <p className="title__message">
                    I am one of a kind.
                    I am brilliant, creative and passionate about making stunning and intuitive user interfaces.
                </p>
                <p>
                    <a href="https://github.com/OhVickie?tab=repositories" className="more-link">Learn More!</a>
                </p>
            </div>
            <div className="yellow__div">
                <div className="learn-more__div"></div>
                <h4 className="aesthetic">Aes.<span>the.</span>tic</h4>
                <p>concerned with beauty or the appreciation of beauty.</p>
            </div>
            <div className="banana__div"></div>

            {/*This part will be a grid containing newscards*/}
            <div className="picture__div">
                <h1 className="picture__div--header">What's the news?</h1>
                {/* I need to find a way to dynmically set different images for each of the newscards
                Maybe I can have an array of images and the images will be selected from there
                <div className="picture__grid">
                <div className="item item--1"><img src={img5} className="grid-img"></img></div>
                <div className="item item--2"><img src={img2} className="grid-img"></img></div>
                <div className="item item--3"><img src={img6} className="grid-img"></img></div>
                <div className="item item--4"><img src={img3} className="grid-img"></img></div>
                
            </div> */}
                <div className="picture__grid">
                    {newsArticle.length > 0 ?
                        (newsArticle.map((newsArticle, index) => {
                            let newsImgArr = [img1, img3, img2, img5, img4, img6];
                            return (<Newscard
                                key={index}
                                cardImage={newsImgArr[index]}
                                cardTitle={newsArticle.title}
                                cardMessage={newsArticle.description}
                                url={newsArticle.url}
                                btnName="View"
                            />)

                        })) : (<p>Loading...</p>)}

                </div>


                {/*<video id="background-video" loop autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>*/}
            </div>
            {/*<div className="newscard__div">
            <h4 className="newscard__div--title">View Testimonials</h4>
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
                    
                </div>
            </div>
        </div>*/}


            <div className="contact__div">
                {/* <div>
                <h1 className='contact__div--header'>Let's Connect</h1>
            </div> */}
                <div className='contact__div--body'>
                    <div className='contact__div--body-left'>
                        <h1>Let's Connect</h1>
                        <p>Whether you’re looking for company and product updates, complex system integration solutions,
                            or simply want a glimpse into the event-driven future, you’ll find it here.</p>
                    </div>
                    <div className='contact__div--body-right'>
                        <Form />
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Home;