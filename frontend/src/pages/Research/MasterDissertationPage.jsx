import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faGraduationCap, faPenAlt, faComments, faClipboardCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const MasterDissertationPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'Conceptual Guidance',
      icon: faGraduationCap,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Basic Concept Explanation:</strong> Helping students understand core concepts and theories related to their research.</li>
          <li><strong>Research Problem Formulation:</strong> Assisting in the identification and framing of a research problem, including defining research questions and objectives.</li>
          <li><strong>Research Methodology Guidance:</strong> Advising on appropriate research methods and techniques for data collection and analysis.</li>
        </ul>
      )
    },
    {
      title: 'Literature Review Assistance',
      icon: faPenAlt,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Comprehensive Literature Search:</strong> Conducting thorough searches for relevant literature.</li>
          <li><strong>Review and Summarization:</strong> Reviewing and summarizing existing research to highlight key findings and gaps.</li>
          <li><strong>Citation Management:</strong> Assisting with proper citation and referencing using appropriate academic styles.</li>
        </ul>
      )
    },
    {
      title: 'Coding and Software Implementation',
      icon: faShieldAlt,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Custom Coding:</strong> Development of code in various programming languages (e.g., Python, Java, MATLAB) tailored to the specific needs of the dissertation.</li>
          <li><strong>Algorithm Implementation:</strong> Assistance with implementing algorithms that are central to the research.</li>
          <li><strong>Software Simulation:</strong> Creating and running simulations using software like MATLAB, CST, or any other relevant tools.</li>
          <li><strong>Debugging and Optimization:</strong> Finding and fixing errors in existing code, and optimizing code for better performance.</li>
        </ul>
      )
    },
    {
      title: 'Data Analysis and Interpretation',
      icon: faClipboardCheck,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Statistical Analysis:</strong> Performing statistical analyses to interpret research data accurately.</li>
          <li><strong>Data Visualization:</strong> Creating charts, graphs, and other visual tools to present data effectively.</li>
          <li><strong>Results Interpretation:</strong> Assisting in drawing meaningful conclusions from data and correlating results with research hypotheses.</li>
        </ul>
      )
    },
    {
      title: 'Editing and Proofreading',
      icon: faComments,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Content Review:</strong> Ensuring clarity, coherence, and logical flow in your dissertation content.</li>
          <li><strong>Grammar and Syntax Check:</strong> Correcting grammatical errors and improving the overall language quality.</li>
          <li><strong>Formatting:</strong> Checking and adjusting the formatting according to academic guidelines and standards.</li>
        </ul>
      )
    },
    {
      title: 'Plagiarism Checking',
      icon: faShieldAlt,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Turnitin Check:</strong> Performing thorough plagiarism checks using Turnitin to ensure originality.</li>
          <li><strong>Paraphrasing Assistance:</strong> Helping to rephrase and paraphrase content to avoid plagiarism issues.</li>
          <li><strong>Citation Review:</strong> Ensuring proper citation and referencing to prevent accidental plagiarism.</li>
        </ul>
      )
    }
  ];

  return (
   
  
    <div className="text-gray-800">
      <div className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-2 text-white mt-1">
    <span className="text-sm font-medium">Home / Master Dissertation</span>
  </div>
  {/* Section 1 - Introduction with Image */}
<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-start">
      {/* Text Block */}
      <div className="md:w-2/3 mb-8 mr-3">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Master Dissertation Services at{" "}
          <span className="text-3xl font-semibold text-orange-600 mb-4">MEGAMINDS</span>
        </h2>
        <p className="text-lg text-justify mb-4">
          With over 6 years of dedicated service, MEGAMINDS is a leading provider of Master’s dissertation support, renowned for our expertise across a broad spectrum of fields. Our extensive experience includes handling projects from the UK and USA, as well as advanced specializations in Machine Learning (ML), Deep Learning (DL), cloud computing, and networking.
        </p>
        <p className="text-lg text-justify mb-4">
          We recognize that a successful dissertation demands a comprehensive understanding of both your research subject and the latest technological innovations. Our team of seasoned professionals is adept at guiding you through every aspect of your dissertation, from the initial topic selection and proposal development to detailed data analysis and final editing.
        </p>
        <p className="text-lg text-justify mb-4">
          At MEGAMINDS, we excel in integrating state-of-the-art techniques in ML and DL with practical knowledge of cloud computing and networking, ensuring that your research is both cutting-edge and relevant. Whether you need support with advanced algorithms, cloud-based solutions, or networking intricacies, our expertise will help you craft a dissertation that meets the highest academic standards.
        </p>
        <p className="text-lg text-justify mb-4">
          Leverage our years of experience and technical proficiency to achieve academic excellence. Contact MEGAMINDS today to discover how our Master Dissertation Services can support your research goals.
        </p>
        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-500">
          See Samples
        </button>
      </div>

      {/* Form Block */}
      <div className="md:w-1/3 ml-5">
       
        <form className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-4 text-white mt-1">
        <h2 className="text-3xl font-semibold text-center text-orange-100 mb-4">
          Register for Our Services
        </h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
              Contact Number (Whatsapp)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="Country">
              Country
            </label>
            <select
              id="Country"
              name="Country"
              className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            >
              <option value="UK">UK</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="service">
              Select Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Full">Coding + Dissertation</option>
              <option value="Dissertation">Dissertation</option>
              {/* Replace with dynamic services list */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Section 2 - Why Choose Us */}
      <section className="w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-4 text-black mt-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10">
            Why Choose Us for Dissertation Writing Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Chapter-Wise Submission</h3>
              <p className="text-center">
                Receive each chapter as it’s completed, allowing for timely feedback and revisions. Our chapter-wise submission ensures a structured and systematic approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Result Driven & Authentic</h3>
              <p className="text-center">
                Our research is backed by credible sources and tailored to meet academic standards. Expect nothing less than distinction-level papers from our team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faPenAlt} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">100% Original – No AI Tools</h3>
              <p className="text-center">
                We strictly avoid AI tools to maintain professional integrity. Your dissertation is thoroughly checked using Turnitin to guarantee originality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Cost-Effective Services</h3>
              <p className="text-center">
                High-quality dissertation writing doesn't have to break the bank. Our services are competitively priced to be accessible to all students.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faComments} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">24/7 Customer Support</h3>
              <p className="text-center">
                Our dedicated customer support team is available round-the-clock, including weekends and holidays, to assist you with your dissertation needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Timely Delivery</h3>
              <p className="text-center">
                We understand the importance of deadlines. Our team ensures timely delivery of each chapter and the final dissertation to meet your academic requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">
          Our Dissertation Writing Services
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer"
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={service.icon} className="text-orange-600 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <button
                  className="text-orange-600"
                  onClick={() => setActiveService(activeService === index ? null : index)}
                >
                  {activeService === index ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </div>
              {activeService === index && (
                <div className="text-gray-700">
                  {service.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

     
    </div>
  );
};

export default MasterDissertationPage;
