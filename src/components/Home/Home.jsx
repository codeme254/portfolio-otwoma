import React from "react";
import me from "../../Assets/Images/me1.png";
import {
  ArrowRight,
  Download,
  Github,
  Facebook,
  Twitter,
  LinkedIn
} from "../icons/Icons";

const Home = () => {
  return (
    <section className="home">
      <div className="home__text">
        <div className="home__text--container">
          <p className="home__hello">hello</p>
          <h1 className="home__title">
            <span className="home__title--intro">I am Dennis Otwoma</span>
            <span className="home__title--description">
              A frontend web developer
            </span>
          </h1>
          <p className="home__text--description">
            This guy believes that on the seventh day, God created Code. He is
            also a , part time cyclist and proffesional dreamer
          </p>
          <div className="home__buttons">
            <a href="/" className="home__button" id="home__button--filled">
              <span className="home__button--text">Hire me</span>
              <ArrowRight />
            </a>
            <a href="/" className="home__button">
              <span className="home__button--text">download cv</span>
              <Download />
            </a>
          </div>

          <div className="home__social-links">
            <a href="/" className="social-link">
              <Github />
              <span className="social-link__text">GitHub</span>
            </a>
            <a href="/" className="social-link">
              <Facebook />
              <span className="social-link__text">Facebook</span>
            </a>
            <a href="/" className="social-link">
              <Twitter />
              <span className="social-link__text">Twitter</span>
            </a>
            <a href="/" className="social-link">
              <LinkedIn />
              <span className="social-link__text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home__image">
        <img className="home__image--img" src={me} alt="this is me" />
      </div>
    </section>
  );
};

export default Home;
