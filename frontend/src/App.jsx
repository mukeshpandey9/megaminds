import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFileSignature, faComments, faPaperPlane, faShoppingCart, faCreditCard, faDownload } from '@fortawesome/free-solid-svg-icons';

const AssignmentPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'Instant Assignment Help',
      icon: faGraduationCap,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Reliable Experts:</strong> Our team consists of highly qualified Indian experts who have graduated from Australian universities.</li>
          <li><strong>Customized Solutions:</strong> Tailored assignment solutions to meet your specific needs and academic requirements.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock online support in English and Hindi for all subjects.</li>
        </ul>
      )
    },
    {
      title: 'Affordable & Timely Delivery',
      icon: faFileSignature,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Quick Turnaround:</strong> Fast and reliable delivery of assignments within your deadlines.</li>
          <li><strong>Best Price Guarantee:</strong> High-quality work at competitive prices to suit your budget.</li>
          <li><strong>Unique & Error-Free:</strong> Ensuring 100% originality and error-free assignments.</li>
        </ul>
      )
    },
    {
      title: 'Expert Consultation',
      icon: faComments,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Free Consultation:</strong> Get a free expert consultation to understand how we can assist you with your assignments.</li>
          <li><strong>Personalized Guidance:</strong> Receive tailored advice and solutions from professionals.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="text-gray-800">
      <div className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-2 text-white mt-1">
        <span className="text-sm font-medium">Home / Assignment Support</span>
      </div>
      
      {/* Section 1 - Introduction with Image */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            {/* Text Block */}
            <div className="md:w-2/3 mb-8 mr-3">
              <h2 className="text-3xl font-bold text-center text-black mb-4">
                Instant Assignment Help at{" "}
                <span className="text-3xl font-semibold text-orange-600 mb-4">MEGAMINDS</span>
              </h2>
              <p className="text-lg text-justify mb-4">
                Crafting success stories since 2018, MEGAMINDS has been a trusted provider of assignment support services, offering quick and affordable solutions with a professional touch. Our reliable Indian experts, graduated from Australian universities, are dedicated to delivering customized assignment solutions tailored to your needs.
              </p>
              <p className="text-lg text-justify mb-4">
                We pride ourselves on our commitment to timely delivery, ensuring that your assignments are 100% unique and error-free. Our 24/7 online support, available in both English and Hindi, guarantees that you receive the help you need whenever you need it.
              </p>
             
             

              {/* 3-Step Process Cards */}
              <section className="py-8">
                <h2 className="text-3xl font-bold bg-orange-200 text-center text-black mb-8">3-Step Assignment Support Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-orange-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Place Your Order</h3>
                    <p>Choose your subject and provide details. Our team will start working on your assignment immediately.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faCreditCard} className="text-orange-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Pay for Your Order</h3>
                    <p>Complete the payment process to confirm your order. We offer multiple secure payment options.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={faDownload} className="text-orange-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Receive Your Solution</h3>
                    <p>Download your assignment solution on time and achieve academic success. We're here to support you every step of the way.</p>
                  </div>
                </div>
              </section>

              <p className="text-lg text-justify mb-4">
                Boost your grades today with our high-quality academic solutions. Stay calm, achieve success, and secure your path to academic excellence with MEGAMINDS.
              </p>
            </div>

            {/* Form Block */}
            <div className="md:w-1/3 ml-5">
              <form className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-4 text-white mt-1">
                <h2 className="text-3xl font-semibold text-center text-orange-100 mb-4">
                  Register for Assignment Support
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
                  <div className="mb-4">
  <label className="block text-white text-sm font-semibold mb-2 mt-3" htmlFor="assignmentType">
    Select Assignment Type
  </label>
  <select
    id="assignmentType"
    name="assignmentType"
    className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
    required
  >
    <option value="" disabled>Select an assignment type</option>
    <option value="Essay">Essay</option>
    <option value="Research Paper">Research Paper</option>
    <option value="Case Study">Case Study</option>
    <option value="Dissertation">Dissertation</option>
    <option value="Thesis">Thesis</option>
    <option value="Lab Report">Lab Report</option>
    <option value="Project">Project</option>
    <option value="Presentation">Presentation</option>
    <option value="Assignment">General Assignment</option>
    {/* Add more assignment types as needed */}
  </select>
</div>

                </div>
                <div className="mb-4">
  <label className="block text-white text-sm font-semibold mb-2" htmlFor="mastersSubject">
    Select Master's Subject
  </label>
  <select
    id="mastersSubject"
    name="mastersSubject"
    className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
    required
  >
    <option value="" disabled>Select a subject</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Data Science">Data Science</option>
    <option value="Business Administration">Business Administration</option>
    <option value="Finance">Finance</option>
    <option value="Marketing">Marketing</option>
    <option value="Economics">Economics</option>
    <option value="Engineering Management">Engineering Management</option>
    <option value="Psychology">Psychology</option>
    <option value="Sociology">Sociology</option>
    <option value="Education">Education</option>
    <option value="Public Health">Public Health</option>
    <option value="Law">Law</option>
    <option value="Environmental Science">Environmental Science</option>
    <option value="Political Science">Political Science</option>
    <option value="International Relations">International Relations</option>
    <option value="History">History</option>
    <option value="Art History">Art History</option>
    <option value="Philosophy">Philosophy</option>
    <option value="Literature">Literature</option>
    <option value="Engineering">Engineering</option>
    <option value="Biomedical Sciences">Biomedical Sciences</option>
    {/* Add more subjects as needed */}
  </select>
</div>

                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="urgency">
                    Select Urgency/Deadline
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="" disabled>Select urgency</option>
                    <option value="24 Hours">24 Hours</option>
                    <option value="3 Days">3 Days</option>
                    <option value="1 Week">1 Week</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
<section className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">Our Assignment Support Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={service.icon} className="text-orange-600 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-black">{service.title}</h3>
          </div>
          {service.content}
        </div>
      ))}
    </div>
  </div>
</section>

    </div>



  );
};

export default AssignmentPage;
