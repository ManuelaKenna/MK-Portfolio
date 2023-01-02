import React from 'react';
import resumeImg from '../assets/images/resume-screenshot.png';
import resumePdf from '../assets/downloads/Kenna_Manuela_resume_pdf.pdf';


function Resume(){
return (

    <div className = "resume-container"> 
    <h2> Manuela Kenna Resume </h2>
    <a href= {resumePdf} download > 
    <h2>Download</h2>
    </a>
    <div>
        <img src= {resumeImg}/> </div>
    </div> 
)
}

export default Resume;