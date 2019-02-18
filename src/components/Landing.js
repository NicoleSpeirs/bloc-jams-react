import React from 'react';
import './Landing.css';
import Carousel from 'react-bootstrap/Carousel';


const Landing = () => (
    <section className="landing">
    <div className="landing-background">
    </div>
       <h1 className="hero-title">Turn the music up!</h1>

    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="FIRST SLIDE"
            />
            <Carousel.Caption>
                <h2>Choose your music</h2>
                <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="SECOND SLIDE"
            />
            <Carousel.Caption>
                <h2>Unlimited, streaming, ad-free</h2>
                <p>No arbitrary limits. No distractions.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="THIRD SLIDE"
            />
            <Carousel.Caption>
            <h2>Choose your music</h2>
            <p>The world is full of music; why should you have to listen to music that someone else chose?</p>

                <h2>Mobile enabled</h2>
                <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

       <section className="selling-points">
        <div className="point">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
       </section>
    </section>
);

export default Landing;