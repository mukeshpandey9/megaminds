import React from "react";
import {
  FaHandshake,
  FaSmile,
  FaCheckCircle,
  FaGraduationCap,
  FaCheck,
} from "react-icons/fa";
import ResearchCarousel from "./ResearchCarousel";
import SmallUnderline from "../../components/SmallUnderline";

const ResearchPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-8 bg-white w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-screen-xl">
          <div className="flex-1 pr-8 w-full md:w-1/2 text-justify">
            <h1 className="text-4xl font-semibold mb-4">
              Achieve Academic Excellence With Innovative Consulting Solutions
              and <span className="text-orange-600">Expert Guidance</span> From{" "}
              <span className="text-orange-600">MEGAMINDS</span> for PhD and
              Master’s Research
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <img src="" alt="Image Icon" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      {/*  */}

      <div>
        {" "}
        <div className="flex justify-between bg-white p-4 rounded-lg w-full">
          <div className="flex items-center bg-orange-100 justify-center rounded-lg p-4 shadow-md w-64 text-center m-2">
            <FaHandshake className="text-4xl text-orange-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">6</h2>
              <p>Years of Service</p>
            </div>
          </div>
          <div className="flex items-center bg-orange-100 justify-center rounded-lg p-4 shadow-md w-64 text-center m-2">
            <FaSmile className="text-4xl text-orange-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">100+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center bg-orange-100 justify-center rounded-lg p-4 shadow-md w-64 text-center m-2">
            <FaCheckCircle className="text-4xl text-orange-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">500+</h2>
              <p>PhD Thesis Completed</p>
            </div>
          </div>
          <div className="flex items-center bg-orange-100 justify-center rounded-lg p-4 shadow-md w-64 text-center m-2">
            <FaGraduationCap className="text-4xl text-orange-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">50+</h2>
              <p>Qualified Experts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-white p-12 w-full">
        <h2 className="text-4xl font-bold mb-4">
          ABOUT <span className="text-orange-600">US</span>
        </h2>
        <p className="text-base leading-7 text-gray-700 px-4 text-justify">
          MEGAMINDS stands at the forefront of research consulting in India,
          dedicated to empowering PhD and Master’s students with exceptional
          academic support. With almost 20 years of experience, we have
          established ourselves as a trusted ally within the academic community.
          Our team of over 50 skilled experts, including researchers, analysts,
          and writers, is committed to upholding the highest ethical standards
          while offering innovative, customized solutions. Since 2018, we have
          been a pivotal resource for doctoral candidates, guiding them through
          every phase of their research journey with affordable and effective
          support.
        </p>
      </div>
      <div className="text-center bg-orange-50 w-full py-5">
        <h2 className="text-4xl font-bold my-4">
          DO YOU STRUGGLE WITH YOUR PHD WORK?
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Is choosing your PhD topic complicated?</p>
          </div>
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Are you struggling to write your Proposal document?</p>
          </div>
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Was your last meeting with your guide bad?</p>
          </div>
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Do you need help in implementing your ideas?</p>
          </div>
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Is it time to write your research paper?</p>
          </div>
          <div className="flex items-center m-4">
            <FaCheck className="text-xl text-orange-600 mr-2" />
            <p>Does publishing your paper in Scopus journals seem difficult?</p>
          </div>
        </div>
        <button className="mt-8 py-2 px-6 text-lg bg-purple-800 text-white rounded-lg hover:bg-purple-700 mb-8">
          Register Now
        </button>
      </div>
      <div className="text-center bg-white w-full font-bold py-12">
        <h2 className="text-4xl mb-4">SUBJECTS COVERED</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden w-72 m-4">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 text-left font-normal">
              <h3 className="text-xl font-semibold mb-2">
                PhD Assistance in Engineering & Technology
              </h3>
              <p>Algorithm Development</p>
              <p>Deep Learning</p>
              <p>Machine Learning</p>
              <p>Big Data</p>
              <p>IoT</p>
              <p>Cloud Computing</p>
              <p>Python, MATLAB Programming</p>
              <p>Networking</p>
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden w-72 m-4">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 text-left font-normal">
              <h3 className="text-xl font-semibold mb-2">
                Ethical Manuscript Editing Services
              </h3>
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
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden w-72 m-4">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 text-left font-normal">
              <h3 className="text-xl font-semibold mb-2">
                PhD Assistance in Business Management & Others
              </h3>
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

      <div>
        <h1 className="text-center my-10 text-4xl font-bold relative">
          Thesis Writing Assistance Procedure
          <SmallUnderline />
        </h1>
        <ResearchCarousel />
      </div>
    </>
  );
};

export default ResearchPage;
