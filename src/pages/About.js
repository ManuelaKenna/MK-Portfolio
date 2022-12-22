import React from "react";
import Typical from "react-typical";
import resumePdf from "../assets/downloads/Kenna_Manuela_resume_pdf.pdf";

function About() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/MoneyM/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/manuela.kenna/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/manuela-kenna/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Manuela</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer✌🏼",
                    1000,
                    "Full Stack Developer👩🏼‍💻",
                    1000,
                    "Creative Developer🎨",
                    1000,
                    "MERN Stack Developer🌐",
                    1000,
                    "React Developer⚙️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Using artistic talent and attention to small details to build
                applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href={resumePdf} download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
