import React from "react";
import {
  Github,
  Facebook,
  Twitter,
  LinkedIn,
  ArrowRight,
  Message,
  PaperPlane,
  Phone,
} from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__me">
          <h2 className="footer__me--title">Dennis Otwoma</h2>
          <p className="footer__me--text">
            I am a frontend web developer and a python programmer. I focus on
            developing scalable applications that meet user requirements and
            ready for future changes. <br /> Part time, I am a cyclist, chess
            player and a proffesional dreamer. I am also the C.T.O
            SADE-Primetech solutions.
          </p>
          <div className="social__links">
            <a href="/" className="social__link">
              <Github />
            </a>
            <a href="/" className="social__link">
              <Facebook />
            </a>
            <a href="/" className="social__link">
              <Twitter />
            </a>
            <a href="/" className="social__link">
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="footer__services">
          <h3 className="footer__subtitle">my expertise</h3>
          <p className="expertise">
            {" "}
            <ArrowRight /> ui design
          </p>
          <p className="expertise">
            {" "}
            <ArrowRight /> ux design
          </p>
          <p className="expertise">
            {" "}
            <ArrowRight /> web development
          </p>
          <p className="expertise">
            {" "}
            <ArrowRight /> networking
          </p>
          <p className="expertise">
            {" "}
            <ArrowRight /> apis programming
          </p>
          <p className="expertise">
            {" "}
            <ArrowRight /> algorithms coding
          </p>
        </div>

        <div className="footer__contact">
          <h3 className="footer__subtitle">talk to me</h3>

          <p className="contact">
            {" "}
            <Phone /> 0718762377
          </p>
          <p className="contact">
            {" "}
            <Message />
            542, Kutus, kirinyaga, Kenya
          </p>
          <p className="contact">
            {" "}
            <Message /> 0718762377
          </p>
          <p className="contact">
            {" "}
            <PaperPlane />
            otwomadennis365@gmail.com
          </p>
          <p className="contact">
            {" "}
            <Twitter />
            @Zaphenath254
          </p>
        </div>
      </div>
      <p className="footer__copyright">
        &copy; 2022. This is the official website for Otwoma Dennis and also the
        portfolio website, no part of this website should be reproduced for any
        purpose whatsoever. All Rights Reserved and all credits to Otwoma
        Dennis.
      </p>
    </footer>
  );
};
export default Footer;
