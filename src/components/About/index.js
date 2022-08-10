import React from 'react';
import './about.css';
import headShot from '../../assets/images/head-shot.jpg';

function About() {
  return (
    <section id="about-me-section">
      <div className="about-me-bg-lg"></div>
      <div className="about-me-container about-me-bg-sm">
        <div className="portrait">
          <img src={headShot} className="my-2 portrait" alt="My head shot" />
        </div>
        <div className="about-me-content">
          <div className="about-me-header">
            <h2 id="about">Hello I'm Chase,</h2>
          </div>
          <div className="about-me-text">
            <p>
              a dynamic full-stack web developer that specializes in JavaScript.
              Whether putting together a stylish, dynamic, and responsive
              front-end OR building RESTful APIs, servers, and databases (MySQL
              or NoSQL) on the back-end. All can be done with the power of
              JavaScript!
            </p>
            <p>
              I'm a recent graduate of the University of Texas at Austin's
              Coding Bootcamp with a certificate in Full-Stack Web Development.
              My current skillset includes HTML, CSS, JavaScript, jQuery, React,
              Node, Express, AJAX, MySQL, and MongoDB.
            </p>
            <p>
              I'm always looking to learn new skills and expand my knowledge
              base.
            </p>
          </div>
          <div className='btn-container'>
            <button className='contact-btn'>Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
