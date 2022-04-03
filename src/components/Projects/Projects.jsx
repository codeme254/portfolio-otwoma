import React from 'react';
import Heading from '../Heading/Heading';
import Project from './Project';
import projectImage from './../../Assets/Images/cmpproj.jpg'

const Projects = () => {
    return(
        <section className="projects">
            <Heading title="Projects" subTitle="actions speak louder than words" />

            <div className="projects__container">
                <Project status="completed" categoryString="frontend web development, fullstack web development, apis coding" projectImage={projectImage} projectName="Believers church" />
                <Project status="ideated" categoryString="python, apis" projectImage={projectImage} projectName="The secret auction" />
                <Project status="under dvpt" categoryString="frontend web development, fullstack web development, apis coding" projectImage={projectImage} projectName="Zaph tours" />
                <Project status="completed" categoryString="frontend web development, fullstack web development, apis coding" projectImage={projectImage} projectName="zana blog web" />
                <Project status="completed" categoryString="frontend web development, fullstack web development, apis coding, collaboration" projectImage={projectImage} projectName="kyucu webapp" />
                <Project status="completed" categoryString="web scraping, python, beautiful soup, apis" projectImage={projectImage} projectName="spotify playlist" />
            </div>
        </section>
    )
}

export default Projects
