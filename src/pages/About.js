import React from "react";
import Typical from "react-typical";
// import resumePdf from "../assets/downloads/Kenna_Manuela_resume_pdf.pdf";
import Portfolio from "./Portfolio";
import Card from 'react-bootstrap/Card';
import Buttons from "../components/Buttons.js"
import Contact from "./Contact";
import Footer from "../components/Footer";



function About() {
  return (
    <div className="about-container">
      <div className="about-parent">
        <div className="about-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Manuela</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
             <span className="profile-role-tagline">
              </span> 
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Creative Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
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
          <Card>
                <Card.Body>
                <h3> Using artistic talent and attention to small details to build
                applications with front and back end operations.</h3>
                </Card.Body>
                </Card>
            </span>
          </div>
        <Buttons></Buttons>
        </div>
        <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default About;
