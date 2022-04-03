import React, { useRef } from "react";
import me from "../../Assets/Images/me1.png";
import {
  ArrowRight,
  Download,
  Github,
  Facebook,
  Twitter,
  LinkedIn,
  ListIcon,
  Phone
} from "../icons/Icons";

const Home = () => {
  const modalRef = useRef(null)
  const showMeSum = (e) => {
    modalRef.current.classList.remove('u-hide-me-sum')
  }
  const closeMeSum = (e) => {
    modalRef.current.classList.add('u-hide-me-sum')
  }
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
            <button href="/" className="home__button fix-button" onClick={showMeSum}>
              <span className="home__button--text">me in a nutshell</span>
              <ListIcon />
            </button>
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

      <div className="me-sum u-hide-me-sum" ref={modalRef}>
        <button className="close__button" title="close zaph's summary" onClick={closeMeSum}>
          {/* <div className="close__button--1"></div>
          <div className="close__button--2"></div> */}
          <ArrowRight/>
        </button>
        <div className="me-sum__image">
          <img src={me} alt="my _image" className="me-sum__image--img" />
        </div>
        <div className="me-sum__text">
          <p className="me-sum__text--subheading">Hello everybody, I am</p>
          <h2 className="me-sum__text--heading">Otwoma Dennis</h2>
          <p className="me-sum__text--occup">A frontend web developer</p>
          <p className="me-sum__text--txt">
            I am a frontend web developer with Reactjs and css, I am also well vested with material ui, styled components and many other frontend technologies that make frontend web development a success, I am also expertised with python programming.
          </p>

          <div className="me-sum__details">
            <p className="me-sum__detail">
              <Phone />
              4th march 2001
            </p>
            <p className="me-sum__detail">
              <Phone />
              0718762377
            </p>
            <p className="me-sum__detail">
              <Phone />
              otwomadennis365@gmail.com
            </p>
            <p className="me-sum__detail">
              <Phone />
              Kirinyaga University kutus
            </p>
          </div>

          <div className="me-sum__social">
            <a href="/" className="me-sum__link">
              <LinkedIn />
            </a>
            <a href="/" className="me-sum__link">
              <Facebook />
            </a>
            <a href="/" className="me-sum__link">
              <Twitter />
            </a>
            <a href="/" className="me-sum__link">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
