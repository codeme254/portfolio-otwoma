import React, { useRef } from "react";
import Experience from "./Experience";
import me from "./../../Assets/Images/me1.png";
import {
  Html5Icon,
  Css3,
  JavaScript,
  ReactIcon,
  Sass,
  NodeIcon,
  PythonIcon,
  JavaIcon,
  Code,
  Github,
  Git
} from "./../icons/Icons";

const About = () => {
  const aboutRef = useRef(null);
  const aboutButtonRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsBtnRef = useRef(null);
  const experinceRef = useRef(null);
  const experienceBtnRef = useRef(null);

  const openAbout = () => {
    aboutButtonRef.current.classList.add("about__button--btn--active");
    skillsBtnRef.current.classList.remove("about__button--btn--active");
    experienceBtnRef.current.classList.remove("about__button--btn--active");

    aboutRef.current.classList.remove("about__container-abs");
    skillsRef.current.classList.add("about__container-abs");
    experinceRef.current.classList.add("about__container-abs");
  };

  const openSkills = () => {
    skillsBtnRef.current.classList.add("about__button--btn--active");
    aboutButtonRef.current.classList.remove("about__button--btn--active");
    experienceBtnRef.current.classList.remove("about__button--btn--active");

    skillsRef.current.classList.remove("about__container-abs");
    aboutRef.current.classList.add("about__container-abs");
    experinceRef.current.classList.add("about__container-abs");
  };

  const openExperience = () => {
    experienceBtnRef.current.classList.add("about__button--btn--active");
    skillsBtnRef.current.classList.remove("about__button--btn--active");
    aboutButtonRef.current.classList.remove("about__button--btn--active");

    experinceRef.current.classList.remove("about__container-abs");
    aboutRef.current.classList.add("about__container-abs");
    skillsRef.current.classList.add("about__container-abs");
  };
  return (
    <section className="about">
      <div className="about__image">
        <img src={me} alt="img 2 of zaph" className="about__image--img" />
      </div>
      <div className="about__abouts">
        <div className="about__buttons">
          <button
            className="about__button--btn about__button--btn--active"
            onClick={openAbout}
            ref={aboutButtonRef}
          >
            About me
          </button>
          <button
            className="about__button--btn"
            onClick={openSkills}
            ref={skillsBtnRef}
          >
            Skills
          </button>
          <button
            className="about__button--btn"
            onClick={openExperience}
            ref={experienceBtnRef}
          >
            Experience
          </button>
        </div>

        <div className="all_abouts_container">
          {/* about me */}
          <div className="about__container" ref={aboutRef}>
            <h2 className="about__title">My story</h2>
            <p className="about__text">
              I realised my passion for computers when I was 12 years old, ever
              since, I have been a very good friend to computers, when I went to
              high school, I pursued Computer Studies, Physics and Geography
              where I scored an A in Computer Studies, currently, I am pursuing
              computer science and I really love programming, problem solving
              and algorithms.
            </p>
            <h3 className="about__subtitle">
              I have been doing web design and coding for 5 years now
            </h3>
            <p className="about__text">
              The first time I had a test of coding was when I was in high
              school, when our Computer Studies teacher introduced us to Cobol
              language, though I did not like the language, it sparked a new
              sense of passion in me, after finishing high school, I enrolled
              for responsive web design in Freecodecamp.org (thank you Quiny
              Larson). Ever since, I developed a passion for user Interfaces, in
              my undergraduate studies, I have interacted with languages like C,
              C++ and Java
            </p>
          </div>
          {/* end of about me */}

          {/* SKILLS */}
          <div
            className="about__container about__container-abs"
            ref={skillsRef}
          >
            <h2 className="about__title">What am proficient at</h2>
            <div className="skills-container">
              <div className="skill-box">
                <Html5Icon />{" "}
                <span className="skill-box__skill-name">HTML 5</span>
              </div>
              <div className="skill-box">
                <Css3 /> <span className="skill-box__skill-name">CSS3</span>
              </div>
              <div className="skill-box">
                <JavaScript />{" "}
                <span className="skill-box__skill-name">JavaScript</span>
              </div>
              <div className="skill-box">
                <ReactIcon />{" "}
                <span className="skill-box__skill-name">ReactJS</span>
              </div>
              <div className="skill-box">
                <Sass /> <span className="skill-box__skill-name">Sass</span>
              </div>
              <div className="skill-box">
                <NodeIcon />{" "}
                <span className="skill-box__skill-name">NodeJS</span>
              </div>
              <div className="skill-box">
                <PythonIcon />{" "}
                <span className="skill-box__skill-name">Python</span>
              </div>
              <div className="skill-box">
                <JavaIcon /> <span className="skill-box__skill-name">Java</span>
              </div>
              <div className="skill-box">
                <Code />{" "}
                <span className="skill-box__skill-name">Algorithms</span>
              </div>
              <div className="skill-box">
                <Github />{" "}
                <span className="skill-box__skill-name">GitHub</span>
              </div>
              <div className="skill-box">
                <Git />{" "}
                <span className="skill-box__skill-name">Git</span>
              </div>
            </div>
          </div>
          {/* END OF SKILLS */}

          {/* EXPERIENCE*/}
          <div
            className="about__container about__container-abs"
            ref={experinceRef}
          >
            <Experience
              experienceTitle="Freelance Frontend Developer with React"
              experienceTimeStamp="2020-2021"
              company="Freelancing"
              experienceDescription="
                            Between the year 2020 and 2021, I have been doing freelance frontend web development with react with over 25 customers served to satisfaction"
            />

            <Experience
              experienceTitle="Frontend Developer with React"
              experienceTimeStamp="2021-2021"
              company="Kirinyaga University CU"
              experienceDescription="I was featured in a university project where I was among a team selected by the university to create a web application for the Christian Union of our university, this was however one of the many projects I was featured in by the university"
            />

            <Experience
              experienceTitle="Chief Technology Officer"
              experienceTimeStamp="2020-"
              company="PrimeTech Solutions"
              experienceDescription="I have been the chief technology officer of SADE-PRIMETECH solutions, a tech startup based in Kirinyaga which offers web, mobile, cloud and general tech solutions."
            />
          </div>
          {/* END OF EXPERIENCE SECTION */}
        </div>
      </div>
    </section>
  );
};

export default About;
