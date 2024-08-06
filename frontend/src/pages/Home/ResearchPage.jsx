import React from "react";
import { FaHandshake, FaSmile, FaCheckCircle, FaGraduationCap, FaCheck } from "react-icons/fa";

const ResearchPage = () => {
  console.log("ResearchPage component rendered");

  return (
    <div>
      <div className="banner">
        <div className="content">
          <div className="text">
            <h1>
              Achieve Academic Excellence With Innovative Consulting Solutions and{" "}
              <span className="highlight">Expert Guidance</span> From{" "}
              <span className="highlight">MEGAMINDS</span> for PhD and Master’s Research
            </h1>
            <div className="stats">
              <div className="stat">
                <FaHandshake className="icon" />
                <div>
                  <h2>17</h2>
                  <p>Years of Service</p>
                </div>
              </div>
              <div className="stat">
                <FaSmile className="icon" />
                <div>
                  <h2>10550+</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="stat">
                <FaCheckCircle className="icon" />
                <div>
                  <h2>8300+</h2>
                  <p>PhD Thesis Completed</p>
                </div>
              </div>
              <div className="stat">
                <FaGraduationCap className="icon" />
                <div>
                  <h2>510+</h2>
                  <p>Qualified Experts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img
              src="" // Add your image source here
              alt="Image Icon"
              className="imageStyle" // Ensure this class aligns with App.css if necessary
            />
          </div>
        </div>
      </div>
      <div className="about">
        <h2>About <span className="highlight">Us</span></h2>
        <p>
          MEGAMINDS is India’s premier research consulting organization, helping PhD and Master’s students achieve academic excellence through innovative and customized support services. With nearly two decades of experience, we have earned a reputation as a trusted partner in the academic community. Our team of over 500 experts comprises talented researchers, analysts, and writers, who are dedicated to maintaining the highest ethical standards and delivering affordable, effective solutions tailored to your unique needs. As a division of ELK Education Consultants Pvt Ltd, we have been serving doctoral candidates since 2006, providing expert guidance and support at every stage of their research journey.
        </p>
      </div>
      <div className="questions">
        <h2>DO YOU STRUGGLE WITH YOUR PHD WORK?</h2>
        <div className="questionList">
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Is choosing your PhD topic complicated?</p>
          </div>
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Are you struggling to write your Proposal document?</p>
          </div>
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Was your last meeting with your guide bad?</p>
          </div>
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Do you need help in implementing your ideas?</p>
          </div>
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Is it time to write your research paper?</p>
          </div>
          <div className="questionItem">
            <FaCheck className="checkIcon" />
            <p>Does publishing your paper in Scopus journals seem difficult?</p>
          </div>
        </div>
        <button className="registerButton">Register Now</button>
      </div>
      <div className="subjectsCovered">
        <h2>SUBJECTS COVERED</h2>
        <div className="cardContainer">
          <div className="card">
            <div className="cardImage"></div>
            <div className="cardContent">
              <h3>PhD Assistance in Engineering & Technology</h3>
              <p>Algorithm Development</p>
              <p>Image Signal Processing</p>
              <p>VLSI Modelsim, Vivado</p>
              <p>Circuit Simulation & Layout</p>
              <p>Power Electronics, Power systems</p>
              <p>Big Data</p>
              <p>IoT</p>
              <p>Cloud Computing</p>
              <p>Python, MATLAB Programming</p>
              <p>NR7 NISR ClowiSIM</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage"></div>
            <div className="cardContent">
              <h3>Ethical Manuscript Editing Services</h3>
              <p>Abstract Editing</p>
              <p>Research Proposal Editing</p>
              <p>Literature Review</p>
              <p>Research Gaps Identification</p>
              <p>Research Problem Formulation</p>
              <p>Journal Paper Editing</p>
              <p>Interpretation of Results</p>
              <p>Thesis Formatting</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage"></div>
            <div className="cardContent">
              <h3>PhD Assistance in Business Management & Others</h3>
              <p>Business & Management</p>
              <p>Finance</p>
              <p>Marketing</p>
              <p>International Business</p>
              <p>Qualitative Analysis</p>
              <p>Quantitative Analysis</p>
              <p>Entrepreneurship</p>
              <p>SPSS, R, AMOS, PLS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
