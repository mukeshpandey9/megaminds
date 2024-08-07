import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClipboard,
  FaCode,
  FaLightbulb,
  FaBook,
  FaFileAlt,
  FaCogs,
  FaChartLine,
  FaEdit,
  FaPen,
  FaCheckCircle,
  FaGraduationCap,
  FaHandshake,
  FaSmile,
  FaNewspaper,
  FaFileSignature,
  FaProjectDiagram,
  FaClipboardList,
  FaChartPie,
  FaChartBar,
  FaLaptopCode,
  FaCloud,
  FaPython,
} from "react-icons/fa";

const carouselData = [
  {
    title: "Thesis Proposal Assistance",
    description:
      "Guidance in developing a clear and compelling research proposal.\nAssistance in defining research objectives, questions, and hypotheses.\nSupport in structuring and organizing your proposal effectively.",
    icon: FaClipboard,
  },
  {
    title: "Literature Review Support",
    description:
      "Help in conducting a comprehensive literature review.\nAssistance with synthesizing relevant research and identifying gaps.\nGuidance on organizing your literature review to support your thesis.",
    icon: FaLightbulb,
  },
  {
    title: "Research Question Development",
    description:
      "Assistance in formulating clear and researchable questions.\nGuidance on aligning questions with your research objectives.\nSupport in refining and focusing research questions for better results.",
    icon: FaPen,
  },
  {
    title: "Methodology Design",
    description:
      "Expert input on developing a robust research methodology.\nAssistance with designing experiments or research processes.\nSupport in ensuring the validity and reliability of your methodology.",
    icon: FaBook,
  },
  {
    title: "Data Analysis Assistance",
    description:
      "Guidance on choosing appropriate data analysis techniques.\nSupport with statistical analysis and interpretation of results.\nHelp with visualizing data and presenting findings effectively.",
    icon: FaFileAlt,
  },
  {
    title: "Coding Support",
    description:
      "Assistance with debugging and troubleshooting code issues.\nGuidance on best coding practices and standards.\nSupport in optimizing code for performance and readability.",
    icon: FaCode,
  },
  {
    title: "Draft Review and Editing",
    description:
      "Professional review of your thesis draft for clarity and coherence.\nAssistance with editing for grammar, style, and formatting.\nFeedback on improving arguments and overall structure.",
    icon: FaCogs,
  },
  {
    title: "Formatting and Proofreading",
    description:
      "Ensure your thesis meets academic formatting standards.\nDetailed proofreading to catch errors and improve readability.\nAssistance with finalizing the layout and citations.",
    icon: FaChartLine,
  },
  {
    title: "Publication and Submission Help",
    description:
      "Support in preparing your thesis for publication or journal submission.\nGuidance on selecting appropriate journals and understanding submission requirements.\nHelp with addressing reviewer feedback and revisions.",
    icon: FaEdit,
  },
];

const ResearchPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = carouselData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(totalItems - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <>
      <div className="flex flex-col items-center p-8 bg-white w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-screen-xl">
          <div className="flex-1 pr-8 w-full md:w-1/2 text-justify">
            <h1 className="text-[2.1rem] leading-normal font-bold text-center mb-4">
              Achieve Academic Excellence With Innovative Consulting Solutions
              and <span className="text-orange-600">Expert Guidance</span> From{" "}
              <span className="text-orange-600">MEGAMINDS</span> for PhD and
              Master’s Research
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-white px-2 py-6 rounded-lg w-full mx-auto max-w-screen-xl">
        {[
          { icon: FaHandshake, count: "6", label: "Years of Service" },
          { icon: FaSmile, count: "100+", label: "Happy Clients" },
          { icon: FaCheckCircle, count: "500+", label: "PhD Thesis Completed" },
          { icon: FaGraduationCap, count: "50+", label: "Qualified Experts" },
        ].map(({ icon: Icon, count, label }, index) => (
          <div
            key={index}
            className="flex items-center bg-orange-100 justify-center rounded-lg p-4 shadow-md flex-1 mx-4 text-center"
          >
            <Icon className="text-4xl text-orange-600 mr-3" />
            <div className="border-l border-gray-300 pl-3">
              <h2 className="text-2xl font-bold">{count}</h2>
              <p>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center bg-white p-12 w-full">
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
      </div>*/}

      <div className="text-center bg-orange-50 w-full py-5">
        <h2 className="text-4xl font-bold my-4">
          STRUGGLING WITH YOUR PHD WORK?
        </h2>
        <div className="flex flex-wrap justify-center">
          {[
            "Overwhelmed by finding the perfect PhD topic?",
            "Need guidance on writing a compelling research proposal?",
            "Unsure how to improve after an unproductive meeting with your supervisor?",
            "Struggling with implementing your research ideas effectively?",
            "Stuck on writing and finalizing your research paper?",
            "Finding the process of publishing in Scopus journals challenging?",
          ].map((text, index) => (
            <div key={index} className="flex items-center m-4">
              <FaCheckCircle className="text-xl text-orange-600 mr-2" />
              <p>{text}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 py-2 px-6 text-lg bg-purple-800 text-white rounded-lg hover:bg-purple-700 mb-8">
          Register Now
        </button>
      </div>

      <div className="text-center bg-white py-8 w-full">
        <h2 className="text-4xl font-bold mb-6">WHAT WE OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {[
            { icon: FaClipboard, label: "Topic and Research Proposal" },
            { icon: FaLightbulb, label: "Problem Statement" },
            { icon: FaBook, label: "Base Papers" },
            { icon: FaFileAlt, label: "Chapters Writing" },
            { icon: FaCogs, label: "Implementation" },
            { icon: FaChartLine, label: "Analysis" },
            { icon: FaEdit, label: "Editing" },
            { icon: FaNewspaper, label: "Journal Papers" },
            { icon: FaFileSignature, label: "Development Editing" },
            { icon: FaProjectDiagram, label: "Research Design" },
            { icon: FaClipboardList, label: "Review Article" },
            { icon: FaChartPie, label: "Qualitative Data Analysis" },
            { icon: FaChartBar, label: "Quantitative Data Analysis" },
            { icon: FaLaptopCode, label: "Matlab Projects" },
            { icon: FaCloud, label: "Cloud Projects" },
            { icon: FaPython, label: "Python Projects" },
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center bg-white justify-center rounded-lg p-4 shadow-md"
            >
              <Icon className="text-4xl text-orange-600 mr-3" />
              <div>
                <h2 className="text-xl font-semibold">{label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 py-12 w-full">
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">
          SUBJECTS COVERED
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              imgSrc: "/images/phd1.jpg",
              alt: "Engineering & Technology",
              title: "PhD Assistance in Engineering & Technology",
              content: [
                "Algorithm Development",
                "Deep Learning",
                "Machine Learning",
                "Big Data",
                "IoT",
                "Cloud Computing",
                "Python, MATLAB Programming",
                "Networking",
              ],
            },
            {
              imgSrc: "/images/phd2.jpg",
              alt: "Manuscript Editing",
              title: "Ethical Manuscript Editing Services",
              content: [
                "Abstract Editing",
                "Research Proposal Editing",
                "Literature Review",
                "Research Gaps Identification",
                "Research Problem Formulation",
                "Journal Paper Editing",
                "Interpretation of Results",
                "Thesis Formatting",
              ],
            },
            {
              imgSrc: "/images/phd3.jpg",
              alt: "Business Management",
              title: "PhD Assistance in Business Management & Others",
              content: [
                "Business & Management",
                "Finance",
                "Marketing",
                "International Business",
                "Qualitative Analysis",
                "Quantitative Analysis",
                "Entrepreneurship",
              ],
            },
          ].map(({ imgSrc, alt, title, content }, index) => (
            <div
              key={index}
              className="bg-orange-200 rounded-lg shadow-md overflow-hidden w-72 m-4"
            >
              <div className="w-full h-60 bg-gray-200">
                <img
                  src={imgSrc}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-orange-700">
                  {title}
                </h3>
                <ul className="list-disc pl-5">
                  {content.map((item, idx) => (
                    <li key={idx} className="text-base text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-12 w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">
          Get Your Quote
        </h2>

        <form className="max-w-4xl mx-auto bg-orange-50 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-number"
                className="block text-lg font-medium mb-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-number"
                name="contact-number"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="area-of-research"
                className="block text-lg font-medium mb-4"
              >
                Area Of Research
              </label>
              <select
                id="area-of-research"
                name="area-of-research"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="deep-learning">Deep Learning</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="big-data">Big Data</option>
                <option value="iot">IoT</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="python-programming">Python Programming</option>
                <option value="matlab-programming">MATLAB Programming</option>
                <option value="networking">Networking</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="international-business">
                  International Business
                </option>
                <option value="qualitative-analysis">
                  Qualitative Analysis
                </option>
                <option value="quantitative-analysis">
                  Quantitative Analysis
                </option>
                <option value="entrepreneurship">Entrepreneurship</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="support-type"
                className="block text-lg font-medium mb-4"
              >
                Type of Support
              </label>
              <select
                id="support-type"
                name="support-type"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="" disabled>
                  Select Support Type
                </option>
                <option value="full-phd">Full PhD with Coding</option>
                <option value="partial-support">Partial Support</option>
                <option value="thesis-writing">Thesis Writing</option>
                <option value="coding-only">Coding Only</option>
                <option value="paper-writing">Paper Writing</option>
                <option value="chapter-writing">Chapter Writing</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Request a Callback
          </button>
        </form>
      </div>

      <div className="bg-orange-50 py-8 px-4 w-full">
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">
          Thesis Writing Assistance Procedure
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {carouselData.map((card, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
                  <div className="bg-orange-200 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <card.icon className="text-4xl text-orange-600 mr-4" />
                      <h3 className="text-2xl font-semibold text-orange-600">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
