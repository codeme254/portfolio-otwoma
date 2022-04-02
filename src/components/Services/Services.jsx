import React from "react";
import Heading from "../Heading/Heading";
import Service from "./Service";
import coding from "./../../Assets/Images/coding.png";
import computer from "./../../Assets/Images/computer.png";
import ui from "./../../Assets/Images/user-interface.png";
import ux from "./../../Assets/Images/user-experience.png";
import api from "./../../Assets/Images/api.png";
import alogrithms from "./../../Assets/Images/algorithm.png";

const Services = () => {
  return (
    <section className="services">
      <Heading
        title="services"
        subTitle="these are the services I will provide to my clients and employer"
      />
      <div className="services__container">
        <Service
          serviceImg={coding}
          serviceTitle="Web development"
          serviceDescription="Web Development deals with building, creating and maintaining websites.It includes aspects such as web design, web publishing, web programming, and database management."
        />
        <Service
          serviceImg={ui}
          serviceTitle="UI Design"
          serviceDescription="UI stands for User Interface, it is the desing of user interfaces for machines and softwares. This is the part that the user interacts with, for example buttons, forms, and many others."
        />
        <Service
          serviceImg={ux}
          serviceTitle="UX design"
          serviceDescription="UX stands for user experience, this is a technique that is used to create software products and even hardware products that provide meaningful and relevant experiences to the user"
        />
        <Service
          serviceImg={computer}
          serviceTitle="Networking"
          serviceDescription=" Networking, also known as computer networking, is the practice of transporting and exchanging data between nodes(computers) over a shared medium in an information system."
        />
        <Service
          serviceImg={api}
          serviceTitle="APIs programming"
          serviceDescription="API stands for Application Programming Interface, itis a connection between computers or between computer programs. It is a type of software It is a type of software interface offering service to another software interface."
        />
        <Service
          serviceImg={alogrithms}
          serviceTitle="alogrithms coding"
          serviceDescription="An algorithm refers to an efficient step by step methodology in order to come up with a solution to a problem, the end result of efficient algorithm is a very fast performing software."
        />
      </div>
    </section>
  );
};

export default Services;
