import React from "react";
import { ArrowRight } from "../icons/Icons";

const Service = ({ serviceImg, serviceTitle, serviceDescription, linkDir }) => {
  return (
    <div className="service">
      <div className="service__image">
        <img
          src={serviceImg}
          alt="service representation img"
          className="service__image--img"
        />
      </div>
      <h3 className="service__title">{serviceTitle}</h3>
      <p className="service__description">{serviceDescription}</p>
      <a href={linkDir} className="service__learrn-more-btn">
        Read More
        <ArrowRight />
      </a>
    </div>
  );
};

export default Service;