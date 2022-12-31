import Button from "react-bootstrap/Button";
import { MDBBtn } from 'mdb-react-ui-kit';
import resumePdf from "../assets/downloads/Kenna_Manuela_resume_pdf.pdf";

function Buttons({ currentPage, handlePageChange }) {
    return (
        <>
        
     <div class="text-center">
     <button className="btn-primary-btn">
        <Button variant="orange" size="sm">
          Hire Me
        </Button>
        </button>{" "}
        <button className="btn-highlighted-btn">
        <a href={resumePdf} download>
        <Button variant="orange" size="sm">
          Get Resume
        </Button>
        </a>
        </button>{" "}
      </div>
      </>
    );
}

export default Buttons;