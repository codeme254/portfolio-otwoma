import React from "react";

const Experience = ({
  experienceTitle,
  experienceTimeStamp,
  experienceDescription,
  company,
}) => {
  return (
    <div className="experience">
      <h3 className="experience__title">{experienceTitle}</h3>
      <h5 className="experience__skill-duration">
        {experienceTimeStamp} <span>{company}</span>{" "}
      </h5>
      <p className="experience__description">{experienceDescription}</p>
    </div>
  );
};

export default Experience;
