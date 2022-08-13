import React from 'react';
import './resume.scss';

function Resume() {
  return (
    <div className="main-bg">
      <div className="middle-bg">
        <div className="resume-container">
          <div className="resume-content">
            <div className="resume-header">
              <h1 className="mt-3">Resume</h1>
              <p>
                Download my <span>resume</span>
              </p>
            </div>
            <div className="resume-body">
              <div className="resume-body-left">
                <div className="resume-body-left-top">
                  <h2>Front-end Proficiencies</h2>
                </div>
                <div className="resume-body-left-body">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
              <div className="resume-body-right">
                <div className="resume-body-right-top">
                  <h2>Back-end Proficiencies</h2>
                </div>
                <div className="resume-body-right-body">
                  <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
