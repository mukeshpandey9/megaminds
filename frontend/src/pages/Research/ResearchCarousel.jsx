import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const carouselData = [
  {
    title: 'Thesis Proposal Assistance',
    description: 'Guidance in developing a clear and compelling research proposal.\nAssistance in defining research objectives, questions, and hypotheses.\nSupport in structuring and organizing your proposal effectively.',
    icon: FaClipboard,
  },
  {
    title: 'Literature Review Support',
    description: 'Help in conducting a comprehensive literature review.\nAssistance with synthesizing relevant research and identifying gaps.\nGuidance on organizing your literature review to support your thesis.',
    icon: FaLightbulb,
  },
  {
    title: 'Methodology Design',
    description: 'Expert input on developing a robust research methodology.\nAssistance with designing experiments or research processes.\nSupport in ensuring the validity and reliability of your methodology.',
    icon: FaBook,
  },
  {
    title: 'Data Analysis Assistance',
    description: 'Guidance on choosing appropriate data analysis techniques.\nSupport with statistical analysis and interpretation of results.\nHelp with visualizing data and presenting findings effectively.',
    icon: FaFileAlt,
  },
  {
    title: 'Draft Review and Editing',
    description: 'Professional review of your thesis draft for clarity and coherence.\nAssistance with editing for grammar, style, and formatting.\nFeedback on improving arguments and overall structure.',
    icon: FaCogs,
  },
  {
    title: 'Formatting and Proofreading',
    description: 'Ensure your thesis meets academic formatting standards.\nDetailed proofreading to catch errors and improve readability.\nAssistance with finalizing the layout and citations.',
    icon: FaChartLine,
  },
  {
    title: 'Publication and Submission Help',
    description: 'Support in preparing your thesis for publication or journal submission.\nGuidance on selecting appropriate journals and understanding submission requirements.\nHelp with addressing reviewer feedback and revisions.',
    icon: FaEdit,
  },
  {
    title: 'Research Question Development',
    description: 'Assistance in formulating clear and researchable questions.\nGuidance on aligning questions with your research objectives.\nSupport in refining and focusing research questions for better results.',
    icon: FaPen,
  },
  {
    title: 'Statistical Tools Guidance',
    description: 'Help in selecting and using statistical tools for your research.\nAssistance with understanding and applying statistical methods.\nSupport in interpreting statistical outputs and their implications.',
    icon: FaCalculator,
  },
  {
    title: 'Coding Support',
    description: 'Assistance with debugging and troubleshooting code issues.\nGuidance on best coding practices and standards.\nSupport in optimizing code for performance and readability.',
    icon: FaCode,
  },
];

const ResearchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = carouselData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(totalItems - itemsPerPage, 0) : prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage));
  };

  const visibleItems = carouselData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="text-center bg-white py-8 w-full">
      <h2 className="text-4xl font-bold mb-6">Thesis Writing Assistance Procedure</h2>
      <div className="flex justify-center">
        {currentIndex > 0 && (
          <button onClick={handlePrev} className="p-2 text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="text-2xl" />
          </button>
        )}
        <div className="flex overflow-hidden">
          {visibleItems.map(({ title, description, icon: Icon }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mx-2 flex-1 min-w-[300px]">
              <Icon className="text-4xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
        {currentIndex + itemsPerPage < totalItems && (
          <button onClick={handleNext} className="p-2 text-gray-600 hover:text-gray-800">
            <FaArrowRight className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ResearchCarousel;
