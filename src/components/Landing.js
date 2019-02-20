import React from "react";
import "./Landing.css";

const Landing = () => (
  <section className="landing">
    <div className="landing-background" />
    <div>
      <h1 className="hero-title">Turn the music up!</h1>
    </div>

    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/2560x1440"
            className="d-block w-100"
            alt="https://via.placeholder.com/2560x1440"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">
              The world is full of music; why should you have to listen to music
              that someone else chose?
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/2560x1440"
            className="d-block w-100"
            alt="https://via.placeholder.com/2560x1440"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">
              The world is full of music; why should you have to listen to music
              that someone else chose?
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/2560x1440"
            className="d-block w-100"
            alt="https://via.placeholder.com/2560x1440"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">
              The world is full of music; why should you have to listen to music
              that someone else chose?
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
);

export default Landing;
